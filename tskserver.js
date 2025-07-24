// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let tasks = [
    {
        taskId: "TASK001",
        title: "Design Homepage",
        description: "Design the main landing page.",
        assignedTo: "Jane Smith",
        dueDate: "2025-07-25",
        status: "In Progress",
        employeeId: "EMP002",
        cycleId: "CYC001"
    },
    {
        taskId: "TASK002",
        title: "Setup Database",
        description: "Setup MySQL database.",
        assignedTo: "John Doe",
        dueDate: "2025-07-23",
        status: "Not Started",
        employeeId: "EMP001",
        cycleId: "CYC002"
    }
];

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
