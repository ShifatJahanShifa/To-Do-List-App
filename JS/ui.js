import { taskList, todoContainer, progressBar, progressNumbers } from "./domElements.js";

export const toggleEmptyState=()=>{
    todoContainer.style.width= taskList.children.length > 0 ? '100%': '50%'
}

export const updateProgress=()=>{
    const totalTask=taskList.children.length
    const completedTask=taskList.querySelectorAll('.checkbox:checked').length
    
    progressBar.style.width=totalTask ? `${(completedTask/totalTask)*100}%` : '0%'
    progressNumbers.textContent=`${completedTask}/${totalTask}`
    
    // console.log('w',completedTask, totalTask)
}


export const updateHeading = (categoryName) => {
    document.getElementById('heading').innerText = `To-Do List\n${categoryName}`
};
