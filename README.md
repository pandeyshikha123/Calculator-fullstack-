# 🧮 Calculator Full-Stack App

This is a full-stack calculator application built with:

- ⚙️ **Node.js + Express** backend
- 🧾 **Java** for core calculation logic
- 🌐 **Angular** frontend (in `frontend-angular`)
- 🧠 A custom reusable **NPM package**: [`text-summary-generator-shikha`](https://www.npmjs.com/package/text-summary-generator-shikha)

✅ Project Overview
A fullstack calculator that:

Accepts inputs on the Angular frontend
Sends them to a Node.js backend
Performs math operations in Java
Returns the result back to frontend
Stores inputs & results in MongoDB
Supports light/dark mode, history, localStorage

## 📁 Folder Structure

calculator-fullstack/
├── backend-node/ # Node + Express backend
│ ├── models/ # Contains JavaScript-Java bridge
│ │ └── Calculation.js # Java interaction via child_process
│ ├── routes/
│ │ └── summaryRoute.js # Uses text-summary-generator npm package
│ ├── index.js # Main backend entry
│ ├── Calculator.java # Java logic
│ ├── Calculator.class # Compiled Java file
├── frontend-angular/ # Angular frontend (calculator + summary UI)
├── text-summary-generator/ # Custom npm package source
│ ├── index.js
│ ├── package.json
│ └── test.js
└── README.md

🔁 Flow Summary
1. Frontend (Angular)
UI with input fields: num1, num2, and operation selector
On "Calculate", sends request to Node.js via HTTP POST
Displays result, maintains history (from LocalStorage)
Toggle for dark/light mode
Styled with responsive, animated CSS

2. Backend (Node.js + Express)
POST /api/calculate receives numbers and operation
Spawns Java process using child_process.exec
Passes num1, num2, and operation to Java
Gets result from Java’s stdout
Saves input/result to MongoDB
Sends final result as JSON to frontend

3. Java Program
Calculator.java reads 3 arguments: num1, num2, operation
Performs logic using switch-case
Supports: add, subtract, multiply, divide, mod, power
Handles errors using try-catch
Prints result or error message

4. MongoDB (Atlas)
Stores each calculation:
{
  "num1": 10,
  "num2": 5,
  "operation": "add",
  "result": 15,
  "timestamp": "2025-07-03T..."
}


## 🚀 Features

- ✅ Basic calculator operations using Java
- ✅ Full-stack integration with Angular UI and Node backend
- ✅ Text summarization API using a **custom npm package**
- ✅ Clean and modular project structure

---

## 🧠 `text-summary-generator` (NPM Package)

### 🔹 What it does:
Converts long paragraphs into 3–5 concise bullet points using simple rule-based logic.

### 🔹 How it's used:
It's published to npm and consumed by the Node backend route `/api/summary`.

Install it via:
```bash
npm install text-summary-generator

🔌 API Endpoints
➤ POST /api/summary
Request:
json
{
  "text": "Very long text paragraph goes here..."
}
Response:
json
{
  "summary": [
    "• Bullet point 1",
    "• Bullet point 2",
    "• Bullet point 3"
  ]
}

⚙️ How to Run
1. Clone the repo
git clone https://github.com/pandeyshikha123/Calculator-fullstack.git
cd calculator-fullstack

2. Setup text-summary-generator Package (Publish Only Once)
cd text-summary-generator
npm login
npm publish --access public

3. Start Backend
cd ../backend-node
npm install
node index.js

4. Start Frontend
cd ../frontend-angular
npm install
ng serve --open

📷 Screenshots
![image](https://github.com/user-attachments/assets/cb4b7a25-b93e-46ca-9fc8-e7aada7ac8b7)

👩‍💻 Author
Shikha Pandey
🔗 GitHub: @pandeyshikha123



