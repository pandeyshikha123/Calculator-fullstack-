// Load environment variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const mongoose = require('mongoose');
const Calculation = require('./models/Calculation');
const summaryRoute = require('./routes/summaryRoute'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', summaryRoute);

//  Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

//  Calculation Route
app.post('/api/calculate', async (req, res) => {
  try {
    const { num1, num2, operation } = req.body;

    if (num1 == null || num2 == null || !operation) {
      return res.status(400).json({ error: 'Missing input values or operation.' });
    }

    exec(`java -cp ./ Calculator ${num1} ${num2} ${operation}`, async (error, stdout) => {
      if (error || stdout.includes("Error")) {
        return res.status(400).json({ error: stdout.trim() || error.message });
      }

      const result = parseFloat(stdout.trim());

      const calc = new Calculation({ num1, num2, operation, result });
      await calc.save();

      res.json({ result });
    });
  } catch (err) {
    console.error('Calculation error:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
}); 

app.listen(3000, () => console.log(" Server running at http://localhost:3000"));
// 🗄️ Fetch Calculations Route  
 