const express = require('express');
const router = express.Router();
const { generateSummary } = require('text-summary-generator'); //  from npm

router.post('/summary', (req, res) => {
  const { text } = req.body;

  try {
    const rawSummary = generateSummary(text, 5);

    // Split into array, and ensure bullet formatting
    const summary = rawSummary
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => line.startsWith('•') ? line : `• ${line}`);

    res.json({ summary });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
// This route handles the summary generation request.
// It expects a POST request with a JSON body containing the text to summarize.     