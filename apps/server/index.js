const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/api/generate', (req, res) => {
  const { prompt } = req.body;
  // This simulates the AI logic
  res.json({ 
    result: `Drafting content for: ${prompt}`,
    timestamp: new Date().toISOString() 
  });
});

app.listen(port, () => {
  console.log(`Smart-Draft AI Server running at http://localhost:${port}`);
});