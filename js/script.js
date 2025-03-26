
let totalComplete = parseInt(document.getElementById('total-work').innerText);
let taskAssgined = parseInt(document.getElementById('task-assigned').innerText);

 document.getElementById('complete-btn').addEventListener(
    'click', function(){
        let completeBtn = document.getElementById('complete-btn');
        let taskTitle = document.getElementById('task-title01').innerText;
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
)

//card-02

document.getElementById('complete-btn-02').addEventListener(
    'click', function(){
        let completeBtn = document.getElementById('complete-btn-02');
        let taskTitle = document.getElementById('task-title02').innerText;
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
)

//card 03

document.getElementById('complete-btn-03').addEventListener(
    'click', function(){
        let completeBtn = document.getElementById('complete-btn-03');
        let taskTitle = document.getElementById('task-title03').innerText;
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
)

//card - 04
document.getElementById('complete-btn-04').addEventListener(
    'click', function(){
        let completeBtn = document.getElementById('complete-btn-04');
        let taskTitle = document.getElementById('task-title04').innerText;
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
)

// card-05
document.getElementById('complete-btn-05').addEventListener(
    'click', function(){
        let completeBtn = document.getElementById('complete-btn-05');
        let taskTitle = document.getElementById('task-title05').innerText;
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
)

//
document.getElementById('complete-btn-06').addEventListener(
    'click', function(){
        let completeBtn = document.getElementById('complete-btn-06');
        let taskTitle = document.getElementById('task-title06').innerText;
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
)