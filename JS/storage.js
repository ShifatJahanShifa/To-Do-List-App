import { addTask } from './taskHandler.js'

export const saveTasksToLocalStorage=(taskList, categoryName)=>{
    const tasks=Array.from(taskList.querySelectorAll('li')).map((li)=>({
        text: li.querySelector('span').textContent,
        completed: li.querySelector('.checkbox').checked
    }))

    for(let i=0;i<tasks.length;i++) 
    {
        console.log(tasks[i].text, tasks[i].completed)
        
    }
    localStorage.setItem(categoryName,JSON.stringify(tasks))
}

export const loadTasksFromLocalStorage=(categoryName)=>{
    const savedTasks=JSON.parse(localStorage.getItem(categoryName)) || []
    console.log('okkk', savedTasks.length)
    savedTasks.forEach(({text,completed})=> addTask(categoryName,text,completed, false))
}