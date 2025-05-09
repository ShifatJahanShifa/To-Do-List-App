let categoryNames, inputBox, submitButton, list, progressNumber

export const initializeDomElements=()=>{
    categoryNames=document.getElementById('category')
    progressNumber=document.getElementById('progress-number')
    inputBox=document.getElementById('input-box')
    submitButton=document.getElementById('submit-button')
    list=document.getElementById('list')
}

export {categoryNames, progressNumber, inputBox, submitButton, list}