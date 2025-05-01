import { addTask } from "./taskHandler.js"
import { loadTasksFromLocalStorage } from "./storage.js"
import {  toggleEmptyState, updateHeading, updateProgress } from "./ui.js"
import { taskList, taskInput, addTaskBtn, categoryContainer } from './domElements.js'
export let categoryName='📚 Study';

export const attachEventListeners = () => {
    const categories = categoryContainer.querySelectorAll('li');

    for(let i=0;i<categories.length;i++)
    {
        categories[i].addEventListener('click', () => {
            categoryName=categories[i].textContent;
            updateHeading(categoryName);
            taskList.innerHTML = '';
            loadTasksFromLocalStorage(categoryName)
            console.log('listener init',taskList.length)
            toggleEmptyState()
            updateProgress()
        });
    } 

    addTaskBtn.addEventListener('click', (event) => 
    {
        event.preventDefault()
        addTask(categoryName)
    })
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            // console.log('bbbb',categoryName)
            addTask(categoryName)
        }
    })
};
