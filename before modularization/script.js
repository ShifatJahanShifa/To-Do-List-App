import { playCompletionSound, playCongratulationsSound } from "./sound.js"


document.addEventListener('DOMContentLoaded',()=>{
    const taskInput=document.getElementById('task-input')
    const addTaskBtn=document.getElementById('add-task-btn')
    const taskList=document.getElementById('task-list')
    const emptyImage=document.getElementsByClassName('empty-image')[0]
    const todoContainer=document.getElementsByClassName('todo-container')[0]
    const progressBar=document.getElementById('progress')
    const progressNumbers=document.getElementById('numbers')
    const category=document.querySelector('.category-container')
    const arr=category.querySelectorAll('li')
    let editing=false,idx=0, categoryName='';

    const selection=(event)=>{
        const li=event.target
        categoryName=li.textContent;
        console.log('hello')
        const newh1=document.createElement('h1')
        newh1.innerText=`To-Do List
        ${categoryName}`
        newh1.id='heading'
        document.getElementById('heading').replaceWith(newh1)
        taskList.innerHTML = '';
        loadTasksFromLocalStorage()
    }

    for (let index = 0; index < arr.length; index++) {
        arr[index].addEventListener('click', selection)
        
    }


    const toggleEmptyState=()=>{
        emptyImage.style.display= taskList.children.length===0 ? 'block': 'none'
        todoContainer.style.width= taskList.children.length > 0 ? '100%': '50%'
    }
    
    const updateProgress=(checkCompletion=true,playSound=true, play=false)=>{
        const totalTask=taskList.children.length
        const completedTask=taskList.querySelectorAll('.checkbox:checked').length
        
        progressBar.style.width=totalTask ? `${(completedTask/totalTask)*100}%` : '0%'
        progressNumbers.textContent=`${completedTask}/${totalTask}`
        
        console.log('w',completedTask, totalTask)
        // setTimeout(()=>{},500)
        if((completedTask && totalTask) &&(completedTask===totalTask)) 
        {
            if(playSound&&play)
            {
                playCongratulationsSound()
                confetti()
            }
            
        } 
        else 
        {
            if(playSound&&play)
            {
                playCompletionSound()
            }
        }
    }

    const saveTaskToLocalStorage=()=>{
        const tasks=Array.from(taskList.querySelectorAll('li')).map((li)=>({
            text: li.querySelector('span').textContent,
            completed: li.querySelector('.checkbox').checked
        }))

        localStorage.setItem(categoryName,JSON.stringify(tasks))
    }

    const loadTasksFromLocalStorage=()=>{
        const savedTasks=JSON.parse(localStorage.getItem(categoryName)) || []
        savedTasks.forEach(({text,completed})=> addTask(text,completed, false))
        toggleEmptyState()
        updateProgress(false,false)
    }

    const addTask=(text, completed=false, checkCompletion=true)=>{
        // event.preventDefault()
        const taskText=text || taskInput.value.trim()
        if(!taskText) 
        {
            return
        }

        console.log(completed, taskText)

        const li=document.createElement('li')
        li.innerHTML=`
        <input type="checkbox" class="checkbox" ${completed ? 'checked':''}>
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="edit-btn">
            <i class="fa-solid fa-pen-to-square"></i></button>
            <button class="del-btn">
            <i class="fa-solid fa-trash"></i></button>
        `
        
        const checkbox=li.querySelector('.checkbox')
        const editbtn=li.querySelector('.edit-btn')
        const deletebtn=li.querySelector('.del-btn')

        const set=()=> 
        {
            li.classList.add('completed')
            editbtn.disabled=true
            // deletebtn.disabled=true 
            editbtn.style.opacity='0.5'
            // deletebtn.disabled='0.5'
            editbtn.style.pointerEvents='none'
            // deletebtn.style.pointerEvents='none'
        }
        if(completed) 
        {
            set()
        }

        const reset=()=>{
            editbtn.disabled=false
            deletebtn.disabled=false
            editbtn.style.opacity='1'
            deletebtn.disabled='1'
            editbtn.style.pointerEvents='auto'
            deletebtn.style.pointerEvents='auto'
        }

        checkbox.addEventListener('change',(event)=>{
            const isChecked=checkbox.checked
            li.classList.toggle('completed',isChecked)
            // completed= isChecked 
            console.log('isChecked',isChecked)
            if(!isChecked) 
            {
                reset()
            }
            else 
            {
                set()
            }
            updateProgress(true,true,true)
            saveTaskToLocalStorage()
        })

        editbtn.addEventListener('click',()=>{
            if(!checkbox.checked) 
            {
                taskInput.value=li.querySelector('span').textContent
                // li.remove()
                idx=Array.from(taskList.children).indexOf(li)
                editing=true
                // might change later
                // toggleEmptyState()
                // updateProgress()
                // saveTaskToLocalStorage()
            }
        })

        deletebtn.addEventListener('click',()=>{
            li.remove()
            toggleEmptyState()
            updateProgress()
            saveTaskToLocalStorage()
        })

        if(editing) 
        {
            taskList.children[idx].replaceWith(li)
            editing=false;
        }
        else taskList.appendChild(li)
        taskInput.value=''
        toggleEmptyState()
        updateProgress(false,false,true)
        saveTaskToLocalStorage()
    }

    const updateTask=()=>{

    }

    addTaskBtn.addEventListener('click',(event)=> {
        // if(editing) 
        // {
        //     editing=false
        //     updateTask()
        // }
        // else 
        // {
        // }
        addTask()
    })

    taskInput.addEventListener('keypress',(event)=>{
        if(event.key==='Enter')
        {
            event.preventDefault()
            addTask() 
            // if(editing) 
            // {
            //     editing=false;
            //     updateTask()
            // }
            // else 
            // {
            //     addTask()
            // }
        }
    })

    loadTasksFromLocalStorage()

})