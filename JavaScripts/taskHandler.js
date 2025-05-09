import { inputBox, list, form } from "./domElements.js"
import { saveTasksToLocalStorage } from "./storage.js";
import { updateProgress } from "./ui.js";

let editing=false, idx=0;

export const addTask=(selectedCategory,completed=false)=>{
    let taskText=inputBox.value
    if(taskText==undefined) return;
    taskText=taskText.trim()
    if(taskText==='') return 

    if(editing) 
    {
        const listItem=list.children[idx]
        const span=listItem.querySelector('span');
        span.innerText=taskText;
        editing = false;
        inputBox.value=""
        saveTasksToLocalStorage(selectedCategory)   
    }
    else 
    {
        addItems(selectedCategory,taskText,completed)
        inputBox.value=""
        saveTasksToLocalStorage(selectedCategory)   
        updateProgress()
    }    
}


export const addItems=(selectedCategory,taskText,completed)=>{
    const listItem=document.createElement('li')
    listItem.className='task-list'

    const input=document.createElement('input')
    input.type='checkbox'
    input.className='list-item'
    input.checked=completed
    input.addEventListener('change',()=>{
        completed=input.checked
        saveTasksToLocalStorage(selectedCategory)
        updateProgress()
    })

    const text=document.createElement('span')
    text.innerText=taskText

    const updateBtn=document.createElement('button')
    updateBtn.innerText='Update'
    updateBtn.className='update'
    updateBtn.addEventListener('click',()=>{
        if(!input.checked) 
        {
            inputBox.value=text.innerText
            editing=true
            idx=Array.from(list.children).indexOf(listItem)
        }
        
    })

    const deleteBtn=document.createElement('button')
    deleteBtn.innerText='Delete'
    deleteBtn.className='delete'
    deleteBtn.addEventListener('click',()=>{
        let idx2=Array.from(list.children).indexOf(listItem)
        if(editing && (idx==idx2)) editing=false
        listItem.remove()
        saveTasksToLocalStorage(selectedCategory)
        updateProgress()
    })

  
    listItem.appendChild(input)
    listItem.appendChild(text)
    listItem.appendChild(updateBtn)
    listItem.appendChild(deleteBtn)

    list.append(listItem)
}

