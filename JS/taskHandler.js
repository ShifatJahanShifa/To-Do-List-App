import { saveTasksToLocalStorage } from './storage.js';
import { updateProgress, toggleEmptyState } from './ui.js';
// import { categoryName } from './listener.js'
import { taskList, taskInput } from './domElements.js'

let editing = false, idx = 0;

// export const initializeTaskHandler = (list, input) => {
//     taskList = list;
//     taskInput = input;
// };

const categories=['📚 Study','💼 Work','🏃‍♂️ Health','🛒 Shopping','🎯 Personal Goals',
    '🧹 Chores','💰 Finance','🧑‍🤝‍🧑 Social','🎮 Entertainment','✈️ Travel']

export const addTask = (categoryName,text, completed = false, playSound = true) => {
    const taskText = text || taskInput.value.trim();
    if (!taskText) return;
    if(!categories.includes(categoryName)) 
    {
        alert('select a category first')
        return
    }
    console.log('cat',categoryName)
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" class="checkbox" ${completed ? 'checked' : ''}>
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="del-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;

    console.log('value of completion', completed)

    setupTaskEvents(li,categoryName)

    if (editing) 
    {
        taskList.children[idx].replaceWith(li);
        editing = false;
    } 
    else 
    {
        taskList.appendChild(li);
    }

    taskInput.value = '';
    toggleEmptyState(taskList);
    updateProgress(taskList, false, false, playSound);
    saveTasksToLocalStorage(taskList, categoryName);
};

const setupTaskEvents = (li,categoryName) => {
    const checkbox = li.querySelector('.checkbox');
    const editBtn = li.querySelector('.edit-btn');
    const delBtn = li.querySelector('.del-btn');

    checkbox.addEventListener('change', () => {
        const isChecked = checkbox.checked;
        li.classList.toggle('completed', isChecked);
        toggleTaskState(editBtn, isChecked);
        updateProgress(taskList, true, true, true);
        saveTasksToLocalStorage(taskList, categoryName);
    });

    editBtn.addEventListener('click', () => {
        if (!checkbox.checked) {
            taskInput.value = li.querySelector('span').textContent;
            idx = Array.from(taskList.children).indexOf(li);
            editing = true;
        }
    });

    delBtn.addEventListener('click', () => {
        li.remove();
        toggleEmptyState(taskList);
        updateProgress(taskList);
        saveTasksToLocalStorage(taskList, categoryName);
    });

    if (checkbox.checked) {
        toggleTaskState(editBtn, true);
    }
};

const toggleTaskState = (editBtn, completed) => {
    if (completed) {
        editBtn.disabled = true;
        editBtn.style.opacity = '0.5';
        editBtn.style.pointerEvents = 'none';
    } else {
        editBtn.disabled = false;
        editBtn.style.opacity = '1';
        editBtn.style.pointerEvents = 'auto';
    }
};
