const mongoose = require('mongoose');

const calcSchema = new mongoose.Schema({
  num1: Number,
  num2: Number,
  operation: String,
  result: mongoose.Schema.Types.Mixed,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Calculation', calcSchema);
// This code defines a Mongoose schema for a calculation model in a Node.js application.
// The schema includes fields for two numbers, the operation performed, the result, and a timestamp.
// The model is then exported for use in other parts of the application, allowing for CRUD operations       