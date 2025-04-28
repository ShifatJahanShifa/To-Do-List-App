let taskInput, addTaskBtn, taskList, emptyImage, todoContainer, progressBar, progressNumbers, categoryContainer

export const initializeDomElements = () => {
    taskInput=document.getElementById('task-input')
    addTaskBtn=document.getElementById('add-task-btn')
    taskList=document.getElementById('task-list')
    emptyImage=document.getElementsByClassName('empty-image')[0]
    todoContainer=document.getElementsByClassName('todo-container')[0]
    progressBar=document.getElementById('progress')
    progressNumbers=document.getElementById('numbers')
    categoryContainer=document.querySelector('.category-container')
};

// document.addEventListener('DOMContentLoaded', initializeDomElements);

export { taskInput, addTaskBtn, taskList, emptyImage, todoContainer, progressBar, progressNumbers, categoryContainer }
