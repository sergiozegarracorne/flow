function buildMermaid(process) {
  const lines = ['graph LR'];
  if (!process || !Array.isArray(process.steps)) {
    return lines.join('\n');
  }
  for (const step of process.steps) {
    if (step.next && step.next.length) {
      for (const nxt of step.next) {
        lines.push(`${step.id}-->${nxt}`);
      }
    } else {
      lines.push(step.id);
    }
  }
  return lines.join('\n');
}

module.exports = { buildMermaid };
