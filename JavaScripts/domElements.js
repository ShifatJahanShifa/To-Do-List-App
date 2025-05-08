let categoryName, inputBox, submitButton, list, form, progressNumber

export const initializeDomElements=()=>{
    categoryName=document.getElementById('category')
    progressNumber=document.getElementById('progress-number')
    form=document.getElementById('form')
    inputBox=document.getElementById('input-box')
    submitButton=document.getElementById('submit-button')
    list=document.getElementById('list-items')
}

export {categoryName, progressNumber, form, inputBox, submitButton, list}