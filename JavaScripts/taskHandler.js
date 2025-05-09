import { inputBox, list } from "./domElements.js"
import { saveTasksToLocalStorage } from "./storage.js";
import { updateProgress } from "./ui.js";
// import { selectedCategory } from "./ui";

export let editing=false, idx=0;

export const addTask=(selectedCategory, text="",completed=false)=>{
    let taskText=inputBox.value
    if(taskText==undefined) return;
    taskText=taskText.trim()
    if(taskText==='') return 

    if(editing) 
    {
        // add updated task text, 
        console.log(list.children[idx])
        const listItem=list.children[idx]
        const span=listItem.querySelector('span');
        span.innerText=taskText;
        editing = false;
    }
    else 
    {
        addItems(selectedCategory,taskText,completed)
    }
    inputBox.value=""
    saveTasksToLocalStorage(selectedCategory)
    updateProgress()
}

// create an list item and add update, delete event.
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
        // input.checked=completed
    })
    console.log('dd',input.checked)

    const text=document.createElement('span')
    text.innerText=taskText

    const div=document.createElement('div')

    const updateBtn=document.createElement('button')
    updateBtn.innerText='Update'
    updateBtn.id='update'
    updateBtn.addEventListener('click',(event)=>{
        event.preventDefault()
        if(!input.checked) 
        {
            inputBox.value=text.innerText
            editing=true
            idx=Array.from(list.children).indexOf(listItem)
        }
        
    })

    const deleteBtn=document.createElement('button')
    deleteBtn.innerText='Delete'
    deleteBtn.id='delete'
    deleteBtn.addEventListener('click',()=>{
        let idx2=Array.from(list.children).indexOf(listItem)
        if(editing && (idx==idx2)) editing=false
        listItem.remove()
        saveTasksToLocalStorage(selectedCategory)
        updateProgress()
    })

    div.append(updateBtn)
    div.append(deleteBtn)
    listItem.append(input)
    listItem.append(text)
    // listItem.append(div)
    listItem.append(updateBtn)
    listItem.append(deleteBtn)

    list.append(listItem)
    // create li element, add update, delete event and insert
}

