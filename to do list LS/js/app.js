const $ = document
const addBtn = $.querySelector("#addButton")
const clearBtn = $.querySelector("#clearToDo")
let completeBtn = $.querySelectorAll(".btn-success")
let deleteBtn = $.querySelectorAll(".btn-remove")
const todoInput = $.querySelector("#itemInput")
const mainUL = $.querySelector("#todoList")
let dataArray = []

///////////////////new Todo Li create//////////////////////////////////////////
let newTodo,
    newLabel,
    newCompleteBtn,
    newDeleteBtn
//////////////////// multi btn event listeners//////////////////////////////////


///////////////////single btn event listeners///////////////////////////////////
addBtn.addEventListener('click', addTodoHandler)
addBtn.addEventListener('click', deleteBtnUpdater)
addBtn.addEventListener('click', completeBtnUpdater)
clearBtn.addEventListener('click', removeTodoListHandler)
todoInput.addEventListener('keyup', function (event) {
    if (event.keyCode == 13) {
        addTodoHandler()
        deleteBtnUpdater()
        completeBtnUpdater()
        todoInput.value = ''
    }
})
//////////////////functions/////////////////////////////////////////////////////
function addTodoHandler() {
    newTodo = $.createElement('li')
    newLabel = $.createElement('label')
    newCompleteBtn = $.createElement('button')
    newDeleteBtn = $.createElement('button')
    newCompleteBtn.setAttribute('class', 'btn btn-success')
    newCompleteBtn.innerHTML = 'Complete'
    newDeleteBtn.setAttribute('class', 'btn btn-danger')
    newDeleteBtn.innerHTML = 'Delete'
    newTodo.setAttribute('class', 'completed well')
    newTodo.append(newLabel, newCompleteBtn, newDeleteBtn)
    newLabel.innerHTML = todoInput.value
    mainUL.appendChild(newTodo)
    let newObj = { name: todoInput.value, status: "notComplete" }
    dataArray.push(newObj)
    let loclData = JSON.stringify(dataArray)
    localStorage.setItem('todos', loclData)

}
function removeTodoListHandler() {
    $.querySelectorAll('.well').forEach(function(li){
        li.remove()
    })
    localStorage.clear()
}
function deleteBtnUpdater() {
    deleteBtn = $.querySelectorAll(".btn-danger")
    deleteBtn.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            let index = dataArray.findIndex(function (i) {
                return i.name == event.target.previousSibling.previousSibling.innerHTML
            })
            dataArray.splice(index, 1)
            localStorage.setItem('todos', JSON.stringify(dataArray))
            event.target.parentElement.remove()

        })
    })
}

function completeBtnUpdater() {
    completeBtn = $.querySelectorAll(".btn-success")
    completeBtn.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            let objName = event.target.previousSibling.innerHTML
            let selectedObjIndex = dataArray.findIndex(function (e) {
                return e.name == objName
            })
            let isComplete = dataArray[selectedObjIndex].status
            if (isComplete === 'notComplete') {
                event.target.parentElement.className = 'uncompleted well'
                dataArray[selectedObjIndex].status = 'completed'
                btn.innerHTML = 'Completed'
            } else {
                event.target.parentElement.className = 'completed well'
                dataArray[selectedObjIndex].status = 'notComplete'
                btn.innerHTML = 'Not Completed'
            }
            localStorage.setItem('todos', JSON.stringify(dataArray))
        })
    })
}
////////////////////////////getting data from localStorage////////////////////
let array = localStorage.getItem('todos')
let finalArray = JSON.parse(array)
window.addEventListener('load', function () {
    if (finalArray != undefined) {
        dataArray = finalArray

    }
    if (finalArray != null) {
        finalArray.forEach(function (elem) {
            newTodo = $.createElement('li')
            newLabel = $.createElement('label')
            newCompleteBtn = $.createElement('button')
            newDeleteBtn = $.createElement('button')
            newCompleteBtn.setAttribute('class', 'btn btn-success')
            newCompleteBtn.innerHTML = 'Completed'
            newDeleteBtn.setAttribute('class', 'btn btn-danger')
            newDeleteBtn.innerHTML = 'Delete'
            if (elem.status === 'completed') {
                newTodo.setAttribute('class', 'uncompleted well')
            } else {
                newTodo.setAttribute('class', 'completed well')
            }
            newTodo.append(newLabel, newCompleteBtn, newDeleteBtn)
            newLabel.innerHTML = elem.name
            mainUL.appendChild(newTodo)
        })
        ////////////////////////////////////////////////
        dataArray.forEach(function (event) {
            let htmlElem = $.querySelectorAll("label")
            let btnStatus = $.querySelectorAll(".btn-success")
            if (event.status === 'notComplete') {
                htmlElem.forEach(function (i) {
                    if (i.innerHTML == event.name) {
                        i.nextElementSibling.innerHTML = 'Not Completed'
                    } 
                })
            } 
        })
        ////////////////////////////////////////////////////
        deleteBtnUpdater()
        completeBtnUpdater()
    }

})

