import { initializeDomElements } from './JS/domElements.js'
import { attachEventListeners, categoryName } from './JS/listener.js'
import { updateHeading } from './JS/ui.js'
import { loadTasksFromLocalStorage } from './JS/storage.js';


document.addEventListener('DOMContentLoaded', () => {
    initializeDomElements()
    updateHeading(categoryName)
    attachEventListeners()
    loadTasksFromLocalStorage(categoryName)
});
