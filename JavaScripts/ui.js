import { list, progressNumber } from "./domElements.js"
import { saveTasksToLocalStorage } from "./storage.js"

export let selectedCategory='📚 Study'

export const updateProgress=()=>{
    const totalTask=list.children.length
    const completedTask=list.querySelectorAll('.list-item:checked').length
   
    progressNumber.textContent=`Completed Task: ${completedTask}/${totalTask}`
    
    // console.log('w',completedTask, totalTask)
}

