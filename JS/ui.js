import { playCompletionSound, playCongratulationsSound } from "./sound.js";
import { emptyImage, todoContainer, progressBar, progressNumbers } from "./domElements.js";

export const toggleEmptyState=(taskList)=>{
    emptyImage.style.display= taskList.children.length===0 ? 'block': 'none'
    todoContainer.style.width= taskList.children.length > 0 ? '100%': '50%'
    // if(taskList.children.length===0) 
    // { 
    //     document.getElementById('heading').style.visibility= 'hidden'
    //     document.getElementsByClassName('stat-container')[0].style.visibility= 'hidden'
    //     document.getElementsByClassName('input-area')[0].style.visibility= 'hidden'
    // }
    // console.log(taskList.length)
}

export const updateProgress=(taskList,checkCompletion=true,playSound=true, play=false)=>{
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


export const updateHeading = (categoryName) => {
    const newHeading = document.createElement('h1');
    newHeading.innerText = `To-Do List\n${categoryName}`;
    newHeading.id = 'heading';
    document.getElementById('heading').replaceWith(newHeading);
};
