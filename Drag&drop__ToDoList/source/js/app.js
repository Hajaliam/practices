//////////////////////Item selection/////////////
const modal = document.getElementById("todo_form")
const addbtn = document.getElementById("add_btn")
const todoContainer = document.querySelector(".todo-container")
const closeModalBtn = document.querySelector(".close-modal")
const addToDoBtn = document.querySelector("#todo_submit")
const noStatusDiv = document.querySelector("#no_status")
const statusDives = document.querySelectorAll(".status")
let deleteToDoBtn = document.querySelectorAll(".close")
let todoDiv = document.querySelectorAll(".todo")
let inputToDo
let newToDo
let targetElem
//////////////////////basic function load//////////////
listDragUpdater()
deleteBtnUpdater()
//////////////////////border ondragover for dives//////
statusDives.forEach(function(div){
    div.addEventListener('dragover',function(div){
        div.target.style.border = '1px solid #E0E0E0'
    })
    div.addEventListener('dragleave',function(div){
        div.target.style.border = 'none'
    })
})
//////////////////////event listeners////////////
addbtn.addEventListener('click',openModal)
closeModalBtn.addEventListener('click',closeModal)
addToDoBtn.addEventListener('click',addNewTodo)
document.getElementById("todo_input").addEventListener('keyup',function(event){
    if(event.keyCode == 13){
        addNewTodo()
    }
})

statusDives.forEach(function(div){
    div.addEventListener('drop',dropHandler)
})
statusDives.forEach(function(div){
    div.addEventListener('dragover',dragoverHandler)
})
///////////////////Id counter/////////////////////////
let idCounter = 0
///////////////////functions//////////////////////////
function openModal(){
    modal.style.top = '50%'
    todoContainer.style.filter = 'blur(2px)'
}
function closeModal(){
    modal.style.top = '-50%'
    todoContainer.style.filter = 'none'
}
function addNewTodo(){
    newToDo = document.createElement('div')
    newToDo.setAttribute('class','todo')
    newToDo.setAttribute('draggable','true')
    newToDo.setAttribute('id', ++idCounter )
    newToDo.innerHTML = document.getElementById("todo_input").value +'\n<span class="close">&times;</span>'
    noStatusDiv.appendChild(newToDo)
    closeModal()
    todoDiv = document.querySelectorAll(".todo")
    listDragUpdater()
    deleteBtnUpdater()
}
function dragStart(event){
    let id =  event.target.id
    event.dataTransfer.setData('todoElemId', id )
    
    
}
function dragoverHandler(event){
    event.preventDefault()
}
// function dragHandler(event){
//     event.preventDefault()
// }
function dropHandler(event){
    // console.log(event.dataTransfer.getData('todoElemId'));
    targetElem = document.getElementById(event.dataTransfer.getData('todoElemId'))
    event.target.appendChild(targetElem)
    event.target.style.border = 'none'
}
function listDragUpdater(){
    todoDiv.forEach(function(todoElem){
        todoElem.addEventListener('dragstart',dragStart)
    })
}
function deleteToDoHandler(event){
    event.target.parentElement.parentElement.style.border = 'none'
    event.target.parentElement.remove()
    // console.log(event.target.parentElement);
}
function deleteBtnUpdater(){
    deleteToDoBtn = document.querySelectorAll(".close")
    deleteToDoBtn.forEach(function(btn){
        btn.addEventListener('click',deleteToDoHandler)
    })
}