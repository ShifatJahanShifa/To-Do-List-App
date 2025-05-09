
# ToDoList App 📝

The **ToDoList App** is a web application built using HTML, CSS and Javascript. I have developed this ToDoList app after my javascript training at Cefalo. I have tried to apply the knowledge as much as I can to this project.   


## Features 
- Creation of todo lists based on some categories
- Viewing the created todo tasks based on categories
- Updatation of the created todo tasks
- Marking the todo tasks as completed 
- Deletion of the todo tasks
- Viewing the progress based on categories

## Project Structure 
```
/To-Do-List-App
  |-- /JavaScripts                # Folder for js files (excluding main javascript file)
  |     |-- domElements.js
  |     |-- listener.js
  |     |-- storage.js
  |     |-- taskHandler.js
  |     |-- ui.js
  |     
  |-- .gitignore
  |-- index.html          # Main HTML file
  |-- README.md
  |-- script.js           # Main JS file
  |-- style.css           # CSS file
  
```
## Details

The core concepts used in my project are:     

1. **DOM Manipulation**  
2. **Event Handling**
3. **Arrow Function**
4. **Module** 
5. **Local Storage**


`script.js`  

This is the main js file of my project. In this file, I have 
- imported necessary functions from other files. ( used ESM approach for importing) 
- inititialized dom elements invoking `initializeDomElements` function.
- invoked `addListener` function for adding event listener to elements
- loaded tasks from localStorage by invoking `loadtasksFromLOcalStorage` function by passing default selected category
- updated the progress number by invoking `updateProgress` function.

``` js
document.addEventListener('DOMContentLoaded',()=>{
    initializeDomElements()
    addListener()
    loadTasksFromLocalStorage(selectedCategory)
    updateProgress()
})
``` 

`domElements.js`  
In this file, I have - 
- declared all necessary variables
- inititialized DOM elements for elements - select (holds category options), paragraph (holds progress number), input (takes user input), button (acts as form submit button), ul (holds tasks as list items)
- Exported the variables 

```js
    categoryNames=document.getElementById('category')  // select 
    progressNumber=document.getElementById('progress-number')  // paragraph
    inputBox=document.getElementById('input-box')    // input
    submitButton=document.getElementById('submit-button')    // button
    list=document.getElementById('list')   // ul
``` 


`listener.js` 

In this file, i have added event listener to the `select` and submit button element. After importing all necessary functions, variables, I have added a function named `addListener` which is responsible for adding event listener. 


The `select` element which holds the category names is stored in variable named `categoryNames`. I have added an event to this element named `change`. When the change event fires, the handler will perform some tasks. The tasks -
- fetches the value of the select element 
- removes the list items from `ul` element
- loads the stored tasks for the selected category from the local Storage.
- invokes the `updateProgress` function to update the progress number based on the loaded tasks

```js
   categoryNames.addEventListener('change',()=>{
        category=categoryNames.value;
        list.innerHTML=''
        loadTasksFromLocalStorage(category)
        updateProgress()
    })
``` 

I have added `click` event with form submit button. When the event will fire, the handler perform some tasks. Such as 
- at first prevents the event. It is necessary because generally when we click the submit button associated with form element, it will submit the form and refresh the page. I don't need this behavior in my project. That's why I have prevented this event. 
- then I have invoked `addTask` function passing with the current selected category to add the new task to the category. 


`taskhandler.js` 

This file is responsible for handling task addition to teh task list, adding update and delete event with the task. 

The `addTask` function is invoked whenever a task is added. At first, it retrieve teh task text from the input box. Task can be added in two scenarios. One is when a new task is added, the other one is when we are updating the task text and invoking the function to add the updated task text. 

It is tracked using the `editing` variable. 
If `editing` is set to true, then it will update the task text, save the tasks to local storage. 

```js
    if(editing) 
    {
        const listItem=list.children[idx]
        const span=listItem.querySelector('span');
        span.innerText=taskText;
        editing = false;
        inputBox.value=""
        saveTasksToLocalStorage(selectedCategory)
    }
``` 

Otherwise, it will invoke `additems` function. After adding the items, it will save the task to local storage and update the progress. 

```js
    else 
    {
        addItems(selectedCategory,taskText,completed)
        inputBox.value=""
        saveTasksToLocalStorage(selectedCategory)
        updateProgress()
    }
``` 

In the `addItems` function, it creates a list element, an input element with type `checkbox`, a span element for containing the task text, button for update and delete operation. 

It adds `change` event with input element. When the event fires, the updated tasks are stored in localStorage and update the progress. 

```js
input.addEventListener('change',()=>{
        completed=input.checked
        saveTasksToLocalStorage(selectedCategory)
        updateProgress()
    })
```

It adds `click` event with `update` button. When the update button is clicked, if the task is not marked as completed, it will set the input elemnt's value with the task's text which we want to update. It will also set the editing value to true and retrieve the index of the `li` element that we want to update from the `ul` elements children list. 

```js
 updateBtn.addEventListener('click',()=>{
        if(!input.checked) 
        {
            inputBox.value=text.innerText
            editing=true
            idx=Array.from(list.children).indexOf(listItem)
        }
        
    })
``` 

It also adds `click` event with `delete` button. When this event fires, it will delete the selected element. Also it detects whether we are deleting the element which we wanted to update. If it is so, then it sets teh editing to `false` ( meaning we no longer want to update element).

```js
deleteBtn.addEventListener('click',()=>{
        let idx2=Array.from(list.children).indexOf(listItem)
        if(editing && (idx==idx2)) editing=false
        listItem.remove()
        saveTasksToLocalStorage(selectedCategory)
        updateProgress()
    })
``` 

Then it will append input, span, update and delete button to the `li` element. Finally it will append the created `li` element to the `ul` element. 

```js
    listItem.appendChild(input)
    listItem.appendChild(text)
    listItem.appendChild(updateBtn)
    listItem.appendChild(deleteBtn)

    list.append(listItem)
``` 

`ui.js` 

This file contains one function, `updateProgress`. When this function is invoked, it will update the progress number of the current selected category. 

```js
export const updateProgress=()=>{
    const totalTask=list.children.length
    const completedTask=list.querySelectorAll('.list-item:checked').length
   
    progressNumber.textContent=`Completed Task: ${completedTask}/${totalTask}`
}
``` 

`storage.js` 

This file is responsible for saving the tasks to local storage and retrieving the tasks from loacl storage. 

In the `saveTasksToLocalStorage` function, it is saving the tasks in the current `ul` elements to the local stoarge where teh key is the current selected category. It is saving the task as array of objects with key text and completion.

```js

``` 

In the `loadTasksFromLocalStorage` function, it is loading the tasks from the local storage and adding each of them to the `ul` list by invoking `addItems` function.

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


