import { initializeDomElements } from "./JavaScripts/domElements.js";
import { addListener } from "./JavaScripts/listener.js";
import { loadTasksFromLocalStorage } from "./JavaScripts/storage.js";
import { selectedCategory, updateProgress } from "./JavaScripts/ui.js";


document.addEventListener('DOMContentLoaded',()=>{
    initializeDomElements()
    addListener()
    loadTasksFromLocalStorage(selectedCategory)
    updateProgress()
})