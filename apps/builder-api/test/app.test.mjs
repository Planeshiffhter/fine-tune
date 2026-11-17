import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createServer, request as httpRequest } from 'node:http';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createHandler } from '../src/app.mjs';

let server;
let base;
before(async () => {
  server = createServer(createHandler());
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  base = `http://127.0.0.1:${server.address().port}`;
});
after(async () => {
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
});

async function generate(body, headers = { 'Content-Type': 'application/json' }) {
  return fetch(`${base}/api/generate`, { method: 'POST', headers, body });
}

async function standaloneServer(context) {
  const serverProcess = spawn(process.execPath, [fileURLToPath(new URL('../src/server.mjs', import.meta.url))], {
    env: { ...process.env, HOST: '127.0.0.1', PORT: '0' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const closed = new Promise((resolve) => serverProcess.once('close', resolve));
  context.after(async () => {
    if (serverProcess.exitCode === null && serverProcess.signalCode === null) serverProcess.kill();
    await closed;
  });
  let output = '';
  let diagnostics = '';
  serverProcess.stderr.setEncoding('utf8');
  serverProcess.stderr.on('data', (chunk) => { diagnostics += chunk; });
  serverProcess.stdout.setEncoding('utf8');
  const port = await new Promise((resolve, reject) => {
    serverProcess.once('error', reject);
    serverProcess.stdout.on('data', (chunk) => {
      output += chunk;
      const match = output.match(/http:\/\/127\.0\.0\.1:(\d+)/);
      if (match) resolve(Number(match[1]));
    });
    closed.then((code) => reject(new Error(`Server exited before startup (${code}): ${diagnostics}`)));
  });
  return { port, serverProcess };
}

function requestTarget(port, target) {
  return new Promise((resolve, reject) => {
    // An explicit path sends the raw target; fetch would reject it client-side.
    const request = httpRequest({ hostname: '127.0.0.1', port, method: 'GET', path: target, agent: false }, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('error', reject);
      response.on('end', () => resolve({ status: response.statusCode, headers: response.headers, body: Buffer.concat(chunks).toString('utf8') }));
    });
    request.setTimeout(2000, () => request.destroy(new Error('Raw request timed out.')));
    request.on('error', reject);
    request.end();
  });
}

test('malformed request URLs return a bounded error and leave the standalone server available', { timeout: 10_000 }, async (context) => {
  const { port, serverProcess } = await standaloneServer(context);
  for (const target of ['http://[', 'http://[::1']) {
    const response = await requestTarget(port, target);
    assert.equal(response.status, 400);
    assert.match(response.headers['content-type'], /application\/json/);
    assert.equal(response.headers['x-content-type-options'], 'nosniff');
    assert.match(response.headers['content-security-policy'], /frame-ancestors 'none'/);
    assert.equal(response.body, JSON.stringify({ error: 'Malformed request URL.' }));
    const health = await fetch(`http://127.0.0.1:${port}/api/health`);
    assert.equal(health.status, 200);
    assert.deepEqual(await health.json(), { status: 'ok', mode: 'offline_mock', model_connected: false });
    assert.equal(serverProcess.exitCode, null);
  }
  const generated = await fetch(`http://127.0.0.1:${port}/api/generate`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: 'Build a charming boutique store with products' }),
  });
  assert.equal(generated.status, 200);
  assert.equal((await generated.json()).category, 'store');
});

test('health is honest about model connection', async () => {
  const response = await fetch(`${base}/api/health`);
  assert.equal(response.status, 200);
  const data = await response.json();
  assert.deepEqual(data, { status: 'ok', mode: 'offline_mock', model_connected: false });
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
  assert.match(response.headers.get('content-security-policy'), /frame-ancestors 'none'/);
});

test('serves the UI and required assets from an allowlist only', async () => {
  const page = await fetch(base);
  assert.equal(page.status, 200);
  const html = await page.text();
  assert.match(html, /fine-tune · Builder prototype/);
  assert.match(html, /<iframe[^>]*sandbox=""/);
  assert.match(html, /No live LLM/);
  assert.match((await fetch(`${base}/app.js`)).headers.get('content-type'), /text\/javascript/);
  assert.match((await fetch(`${base}/styles.css`)).headers.get('content-type'), /text\/css/);
  assert.equal((await fetch(`${base}/not-found`)).status, 404);
  assert.equal((await fetch(`${base}/.env`)).status, 404);
});

test('returns a static mock file and explicit unimplemented statuses', async () => {
  const response = await generate(JSON.stringify({ prompt: 'Build a charming boutique store with products' }));
  assert.equal(response.status, 200);
  const data = await response.json();
  assert.equal(data.category, 'store');
  assert.equal(data.status, 'mock_only');
  assert.equal(data.verification.browser_tests, 'not_run');
  assert.match(data.files[0].content, /Boutique Store/);
  assert.equal(data.plan[2].status, 'not_implemented');
});

test('returns validation errors on missing or incorrect prompt', async () => {
  for (const body of ['{}', '{"prompt":4}', '{"prompt":"short"}', '[]']) {
    const response = await generate(body);
    assert.equal(response.status, 400);
    assert.ok((await response.json()).error);
  }
});

test('rejects wrong content type, malformed JSON and oversized input', async () => {
  const contentType = await generate('hello world', { 'Content-Type': 'text/plain' });
  assert.equal(contentType.status, 415);
  assert.equal((await generate('{bad json')).status, 400);
  const large = await generate(JSON.stringify({ prompt: 'a'.repeat(5000) }));
  assert.equal(large.status, 413);
});

test('rejects unsupported methods and does not expose a command-execution endpoint', async () => {
  assert.equal((await fetch(`${base}/api/generate`)).status, 405);
  assert.equal((await fetch(`${base}/api/health`, { method: 'POST' })).status, 405);
  assert.equal((await fetch(`${base}/api/run`, { method: 'POST' })).status, 404);
});
