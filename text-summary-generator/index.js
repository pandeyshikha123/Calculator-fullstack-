// index.js

function generateSummary(text, maxPoints = 5) {
  if (!text || typeof text !== 'string') {
    throw new Error("Input must be a valid string.");
  }

  // Step 1: Split text into sentences
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];

  // Step 2: Sort sentences by length (basic importance heuristic)
  const importantSentences = sentences
    .sort((a, b) => b.length - a.length)
    .slice(0, maxPoints)
    .map(s => "• " + s.trim());

  // Step 3: Return result
  return importantSentences.join("\n");
}

module.exports = { generateSummary };
