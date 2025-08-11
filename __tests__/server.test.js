const request = require('supertest');
const app = require('../server');

describe('POST /workflow', () => {
  it('returns HTML with mermaid diagram', async () => {
    const resp = await request(app)
      .post('/workflow')
      .send({ steps: [{ id: 'a', next: ['b'] }, { id: 'b', next: [] }] });
    expect(resp.statusCode).toBe(200);
    expect(resp.text).toContain('a-->b');
    expect(resp.text).toContain('<div class="mermaid">');
  });
});
