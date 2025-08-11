const { buildMermaid } = require('../mermaidBuilder');

describe('buildMermaid', () => {
  it('creates edges from steps', () => {
    const data = { steps: [{ id: 'a', next: ['b'] }, { id: 'b', next: [] }] };
    const result = buildMermaid(data);
    expect(result).toContain('a-->b');
  });
});
