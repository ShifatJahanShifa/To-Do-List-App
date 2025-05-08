import { initializeDomElements } from "./JavaScripts/domElements.js";
import { addListener } from "./JavaScripts/listener.js";
import { loadTasksFromLocalStorage } from "./JavaScripts/storage.js";
import { selectedCategory, updateProgress } from "./JavaScripts/ui.js";


document.addEventListener('DOMContentLoaded',()=>{
    initializeDomElements()
<<<<<<< HEAD
=======
    updateProgress()
>>>>>>> 3f9786a90fb334a59a408f2773f338fd19fdd3fc
    addListener()
    loadTasksFromLocalStorage(selectedCategory)
    updateProgress()
})