import { initializeDomElements } from './JS/domElements.js'
import { attachEventListeners, categoryName } from './JS/listener.js'
import { toggleEmptyState , updateHeading} from './JS/ui.js'
import { taskInput, addTaskBtn, taskList, categoryContainer } from './JS/domElements.js'
import { loadTasksFromLocalStorage } from './JS/storage.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeDomElements()
    // toggleEmptyState(taskList)
    updateHeading(categoryName)
    attachEventListeners(taskList, taskInput, addTaskBtn, categoryContainer)
    loadTasksFromLocalStorage(categoryName)
});
