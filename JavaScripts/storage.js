import { list } from "./domElements.js"
import { addItems, addTask } from "./taskHandler.js"


export const saveTasksToLocalStorage=(selectedCategory)=>{
    const lists=list.querySelectorAll('li')
    let tasks=[]
    for (let i=0;i< lists.length; i++) 
    {
        let temp={
            text: lists[i].querySelector('span').textContent,
            completed: lists[i].querySelector('.list-item').checked
        }
        tasks.push(temp)
    }

    for(let i=0;i<tasks.length;i++) 
    {
        console.log(tasks[i].text, tasks[i].completed)
    }
    localStorage.setItem(selectedCategory,JSON.stringify(tasks))
}


export const loadTasksFromLocalStorage=(selectedCategory)=>{
    const savedTasks=JSON.parse(localStorage.getItem(selectedCategory)) || []
    // console.log('okkk', savedTasks.length)
    // console.log('task',savedTasks)
    for(let i=0;i<savedTasks.length;i++) 
    {
        // update UI
        addItems(selectedCategory,savedTasks[i].text,savedTasks[i].completed)
    }
}