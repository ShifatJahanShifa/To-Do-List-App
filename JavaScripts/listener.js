import { categoryNames, list, submitButton } from "./domElements.js";
import { loadTasksFromLocalStorage } from "./storage.js";
import { addTask } from "./taskHandler.js";
import { selectedCategory, updateProgress } from "./ui.js";


export const addListener=()=>{
    let category=selectedCategory;
    categoryNames.addEventListener('change',()=>{
        category=categoryNames.value;
        list.innerHTML=''
        loadTasksFromLocalStorage(category)
        updateProgress()
    })


    submitButton.addEventListener('click', (event) => 
    {
        event.preventDefault()
        addTask(category)
    })
}