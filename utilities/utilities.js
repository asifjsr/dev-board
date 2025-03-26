let totalComplete = parseInt(document.getElementById('total-work').innerText);
let taskAssgined = parseInt(document.getElementById('task-assigned').innerText);

function completebtn(id-btn, id-title){
    let completeBtn = document.getElementById('id-btn');
    let taskTitle = document.getElementById('id-title').innerText;
    totalComplete++;
    taskAssgined--;  
    completeBtn.setAttribute("disabled", "true");
    completeBtn.classList.add("bg-slate-500");
    completeBtn.classList.remove("hover:bg-blue-600");
    document.getElementById('total-work').innerText = totalComplete;
    document.getElementById('task-assigned').innerText = taskAssgined;
    alert('Board Update Successfully');
    let logContainer = document.getElementById('log-container');
    const newlog = document.createElement('p');
    newlog.classList.add("bg-color", "p-3",  "rounded-xl" , "ml-4" , "mr-4" ,"mt-4" )
    newlog.textContent = `You have completed the task ${taskTitle} at today`;
    logContainer.appendChild(newlog);
}