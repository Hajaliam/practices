let $ = document
let form = document.getElementById("form")
let input = $.getElementById("input")
let mainUl = $.getElementById("ul")
let trashIcon = $.querySelectorAll(".fa")
form.addEventListener('submit',function(event){
    event.preventDefault()
})


input.addEventListener('keydown',function(event){
    let newLi = $.createElement("li")
    newLi.setAttribute('class','list-group-item d-flex justify-content-between align-items-center')
    let newSpan = $.createElement('span')
    let newI = $.createElement('i')
    newI.setAttribute('class','fa fa-trash-o delete')
    if(event.keyCode == 13){
        newSpan.innerHTML = input.value
        newLi.appendChild(newSpan)
        newLi.appendChild(newI)
        mainUl.appendChild(newLi)
        input.value = ''
        trashIcon = $.querySelectorAll(".fa")
        removeFunction()
    }
})
removeFunction()

  function removeFunction()  {trashIcon.forEach(function(i){
    i.addEventListener('click',function(){
        let j = i.parentElement
        j.remove()
    })
})}