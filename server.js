const express = require('express');
const { buildMermaid } = require('./mermaidBuilder');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Workflow API. POST JSON to /workflow to visualize.');
});

app.post('/workflow', (req, res) => {
  const graph = buildMermaid(req.body);
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<script type="module">
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true });
</script>
</head>
<body>
<div class="mermaid">\n${graph}\n</div>
</body>
</html>`;
  res.send(html);
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
