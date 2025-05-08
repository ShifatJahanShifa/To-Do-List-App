import { categoryName, form, list, submitButton } from "./domElements.js";
import { loadTasksFromLocalStorage } from "./storage.js";
import { addTask } from "./taskHandler.js";
import { selectedCategory, updateProgress } from "./ui.js";


export const addListener=()=>{
    let category=selectedCategory;
    categoryName.addEventListener('change',()=>{
        category=categoryName.value;
       
        console.log(category)
        // empty the ul. render the items from storage. 
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