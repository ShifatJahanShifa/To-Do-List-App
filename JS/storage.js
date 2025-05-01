import { addTask } from './taskHandler.js'
import { taskList } from './domElements.js'

export const saveTasksToLocalStorage=( categoryName)=>{
    const lists=taskList.querySelectorAll('li')
    let tasks=[]
    for (let i=0;i< lists.length; i++) 
    {
        let temp={
            text: lists[i].querySelector('span').textContent,
            completed: lists[i].querySelector('.checkbox').checked
        }
        tasks.push(temp)
    }

    for(let i=0;i<tasks.length;i++) 
    {
        console.log(tasks[i].text, tasks[i].completed)
    }
    localStorage.setItem(categoryName,JSON.stringify(tasks))
}

// export const saveTasksToLocalStorage1=( categoryName, li)=>{
//     const savedTasks=JSON.parse(localStorage.getItem(categoryName)) || []
//     let temp={
//         text: li.querySelector('span').textContent,
//         completed: li.querySelector('.checkbox').checked
//     }
//     savedTasks.push(temp)
    
//     localStorage.setItem(categoryName,JSON.stringify(savedTasks))
// }

// export const updateTaskStatus=(categoryName,li)=> 
// {
//     const savedTasks=JSON.parse(localStorage.getItem(categoryName)) || []
//     for (let i = 0; i < savedTasks.length; i++) {
//         if(savedTasks[i].text===li.querySelector('span').textContent) 
//         {
//             savedTasks[i].completed=li.querySelector('.checkbox').checked
//             break;
//         }
//     }
    
//     localStorage.setItem(categoryName,JSON.stringify(savedTasks))
// }

export const loadTasksFromLocalStorage=(categoryName)=>{
    const savedTasks=JSON.parse(localStorage.getItem(categoryName)) || []
    // console.log('okkk', savedTasks.length)
    // console.log('task',savedTasks)
    for(let i=0;i<savedTasks.length;i++) 
    {
        addTask(categoryName,savedTasks[i].text,savedTasks[i].completed)
    }
}