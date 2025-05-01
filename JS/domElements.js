let taskInput, addTaskBtn, taskList, todoContainer, progressBar, progressNumbers, categoryContainer

export const initializeDomElements = () => {
    taskInput=document.getElementById('task-input')
    addTaskBtn=document.getElementById('add-task-btn')
    taskList=document.getElementById('task-list')
    todoContainer=document.getElementsByClassName('todo-container')[0]
    progressBar=document.getElementById('progress')
    progressNumbers=document.getElementById('numbers')
    categoryContainer=document.querySelector('.category-container')
};

export { taskInput, addTaskBtn, taskList, todoContainer, progressBar, progressNumbers, categoryContainer }
