function completeTask(buttonId, taskId) {
    let completeBtn = document.getElementById(buttonId);
    let taskTitle = document.getElementById(taskId).innerText;
    let totalComplete = parseInt(document.getElementById('total-work').innerText);
    let taskAssigned = parseInt(document.getElementById('task-assigned').innerText);
    totalComplete++;
    taskAssigned--;

    let currentTime = new Date();
    let timeString = currentTime.toLocaleTimeString();

    alert('Board Updated Successfully');

    if (taskAssigned === 0) {
        alert("All tasks have been assigned!");
    }

    document.getElementById('total-work').innerText = totalComplete;
    document.getElementById('task-assigned').innerText = taskAssigned;

    completeBtn.setAttribute("disabled", "true");
    completeBtn.classList.add("bg-slate-500");
    completeBtn.classList.remove("hover:bg-blue-600");

    let logContainer = document.getElementById('log-container');
    const newlog = document.createElement('p');

    newlog.classList.add("bg-color", "p-3", "rounded-xl", "ml-4", "mr-4", "mt-4");
    newlog.textContent = `You have completed the task "${taskTitle}" at ${timeString} .`;
    logContainer.appendChild(newlog);

    

}