// tasks.js
window.addEventListener("DOMContentLoaded", async () => {
    const tbody = document.querySelector("tbody");

    try {
        const response = await fetch("http://localhost:3000/api/tasks");
        const tasks = await response.json();

        tasks.forEach(task => {
            const row = document.createElement("tr");
            row.innerHTML = `
          <td>${task.taskId}</td>
          <td>${task.title}</td>
          <td>${task.description}</td>
          <td>${task.assignedTo}</td>
          <td>${task.dueDate}</td>
          <td>${task.status}</td>
          <td>${task.employeeId}</td>
          <td>${task.cycleId}</td>
        `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error("Error loading tasks:", error);
        tbody.innerHTML = `<tr><td colspan="8">Could not load tasks.</td></tr>`;
    }
});
