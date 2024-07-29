const input = document.querySelector('input')
const addBtn = document.querySelector('.btn-add')
const todoDiv = document.querySelector('.todo_container')
let value;
addBtn.addEventListener('click',()=>{
    value = input.value
    todoDiv.insertAdjacentHTML('beforeend',`
    <div class="item">
                <h3 class="todo_title">${value}</h3>
                <div class="btns">
                    <button class="btn btn-done">Done!</button>
                    <button class="btn btn-delete">Remove</button>
                </div>
            </div>
    `)
})