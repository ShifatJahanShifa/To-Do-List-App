
# ToDoList App 📝

I have developed this ToDoList app after my javascript training at Cefalo. I have tried to apply the knowledge as much as I can to this project.   

The **ToDoList App** is a web application built using HTML, CSS and Javascript. We can perform **CRUD** operation here. We can create todo lists based on some category, read the created todos category wise, update the added todos, mark the todo task as done and delete the todo task. 


## Documentation

**DOM Manipulation**   

DOM (Document Object Model) Manipulation refers to the process of dynamically interacting with and modifying the structure, content, and style of a web page using JavaScript.

The usecase in my project:  
The **To-Do List App** heavily relies on DOM Manipulation to perform some tasks such as:  
- Dynamically adding new tasks to the task list by creating `<li>` element.
- Update the progress bar based on the number of completed and total tasks.
- Update the edited task text.
- Remove tasks from the DOM when the **Delete** button is clicked.

Example: (taskHandler.ts)
```
const listItem=document.createElement('li')
listItem.className='task-lists'
...
list.appendChild(listItem); // Adds the task to the DOM(tasklist)
```


**Event Handling**

Event Handling refers to the process of capturing and responding to user interactions with HTML elements(e.g., clicks, keypresses) on the web page.

The usecase in my project:  
The app uses event handling to make it interactive and responsive to user actions. Such as-
- Click Events: For adding tasks, deleting tasks, and selecting categories.
- Change Events: For updating the state of tasks (e.g., marking them as completed).

Example: (listener.js)
```
 submitButton.addEventListener('click', (event) => 
    {
        event.preventDefault()
        addTask(category)
    })
```

**Arrow Function**

Arrow functions are a concise way to write functions in JavaScript. They use the `=>` syntax and do not bind their own this context.

The usecase in my project: 
Arrow functions simplify the code and make it more readable. I have used arrow functions syntax in every places where i have functions such as-
- Event handler function. 
- Functions to store and retrieve data to local storage. 
- Task adding function.
- Progress updating function.

Example: (script.js)
```
document.addEventListener('DOMContentLoaded',()=>{
    initializeDomElements()
    addListener()
    loadTasksFromLocalStorage(selectedCategory)
    updateProgress()
})
```
**Module** 

Modules are a way to organize and encapsulate code into separate files, making it reusable and maintainable. In JavaScript, modules support both **commonJS** and **ESM** approach. 

The usecase in my project: 
The app is modularized to achieve separation of concerns and improve maintainability. In my project, I have used **ESM** approach for modularization which uses `export` and `import` statement. 
- domElements.js: Handles DOM element references.
- listener.js: Manages event listeners.
- taskHandler.js: Handles task-related logic (e.g., adding, editing, deleting tasks).
- storage.js: Manages saving and loading tasks from local storage.
- ui.js: Updates the UI (progress number).

Example: 
```
import { initializeDomElements } from "./JavaScripts/domElements.js";
import { addListener } from "./JavaScripts/listener.js";
```

**Local Storage**

Local Storage is a web storage API that allows us to store key-value pairs in the browser. The data persists even after the browser is closed. We can store upto 5mb data per origin using localStorage. 

The usecase in my project:
I have used Local Storage to save tasks so that they persist across browser sessions. Tasks are saved based on their category and their state (e.g., completed or not).  
Example: (storage.js)
```
localStorage.setItem(categoryName, JSON.stringify(tasks));
const savedTasks = JSON.parse(localStorage.getItem(categoryName)) || [];
```








## Technology

```
HTML, CSS, Javascript
```



## Installation

clone the project:  

```bash
git clone https://github.com/ShifatJahanShifa/To-Do-List-App.git
```

## Run Locally

```
Open the HTML file in any of your favorite browsers (like Chrome, firefox, Microsoft Edge etc)
```





## Deployment

Github Page Link: [ToDoList App](https://shifatjahanshifa.github.io/To-Do-List-App/)


## Authors

- [@ShifatJahanShifa](https://www.github.com/ShifatJahanShifa)


