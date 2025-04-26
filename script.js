document.addEventListener('DOMContentLoaded',(event)=>{
    const taskInput=document.getElementById('task-input')
    const addTaskBtn=document.getElementById('add-task-btn')
    const taskList=document.getElementById('task-list')
    const emptyImage=document.getElementsByClassName('empty-image')[0]
    
    const toggleEmptyState=()=>{
        emptyImage.style.display= taskList.children.length===0 ? 'block': 'none'
    }

    const addtask=(event)=>{
        event.preventDefault()
        const taskText=taskInput.value.trim()
        if(!taskText) 
        {
            return
        }

        const li=document.createElement('li')
        li.innerHTML=`
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        `
        
        taskList.appendChild(li)
        taskInput.value=''
        toggleEmptyState()
    }

    addTaskBtn.addEventListener('click',addtask)
    taskInput.addEventListener('keypress',(event)=>{
        if(event.key==='Enter')
        {
            addtask(event)
        }
    })

})