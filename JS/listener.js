import { addTask } from "./taskHandler.js"
import { loadTasksFromLocalStorage } from "./storage.js"
import { toggleEmptyState, updateHeading, updateProgress } from "./ui.js"

export let categoryName='📚 Study';

export const attachEventListeners = (taskList, taskInput, addTaskBtn, categoryContainer) => {
    // initializeTaskHandler(taskList, taskInput)  // will back to it

    const categories = categoryContainer.querySelectorAll('li');
    categories.forEach(li => {
        li.addEventListener('click', (event) => {
            const selectedLi = event.target;
            const selectedCategory = selectedLi.textContent;
            updateHeading(selectedCategory);
            taskList.innerHTML = '';

            loadTasksFromLocalStorage(selectedCategory)
            categoryName=selectedCategory
            console.log('listener init',taskList.length)
            toggleEmptyState(taskList);
            updateProgress(taskList, false, false)
        });
    }); 

    addTaskBtn.addEventListener('click', (event) => 
        {
            event.preventDefault()
            addTask(categoryName)
        })
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            console.log('bbbb',categoryName)
            addTask(categoryName)
        }
    })

};
