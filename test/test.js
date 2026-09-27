const request = require('supertest');
const { createApp } = require('../src/app');

const app = createApp();

describe('GET /', () => {
  it('returns a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello from Node 24!');
  });
});

describe('GET /health', () => {
  it('returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('GET /version', () => {
  it('returns the node version', async () => {
    const res = await request(app).get('/version');
    expect(res.statusCode).toBe(200);
    expect(res.body.node).toBe(process.version);
  });
});

describe('POST /echo', () => {
  it('echoes back the request body', async () => {
    const res = await request(app)
      .post('/echo')
      .send({ hello: 'world' });
    expect(res.statusCode).toBe(200);
    expect(res.body.youSent).toEqual({ hello: 'world' });
  });
});