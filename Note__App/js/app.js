
let colorInputs = document.querySelectorAll(".color-box")
let listedDiv = document.querySelectorAll(".card") ;
const containerDiv = document.querySelector("#listed") ;
let finalColor ;
///////////////Color Selection/////////////////////////////
colorInputs.forEach(function(color){
    color.addEventListener('click',function(event){
        
        let target = event.target
        document.getElementById("input-field").style.backgroundColor = target.style.backgroundColor
        finalColor = target.style.backgroundColor
    })
})
//////////////Add Note/////////////////////////////////////
function addNote(){
    let newDiv = document.createElement("div")
    let newP = document.createElement("p")
    let mainDiv = document.getElementById("listed")
    newDiv.style.backgroundColor = finalColor
    newP.innerHTML = document.getElementById("input-field").value 
    newDiv.className = 'card shadow-sm rounded'
    newP.className = 'card-text p-3'
    newDiv.appendChild(newP)
    mainDiv.appendChild(newDiv)
    listedDiv = document.querySelectorAll(".card")
    document.getElementById("input-field").value = ''
    // remove()
    
}
document.getElementById("btn-save").addEventListener("click", addNote)
document.getElementById("btn-delete").addEventListener("click", function(){
    document.getElementById("input-field").value = ''
    document.getElementById("input-field").style.backgroundColor = '#fff'

})
// let updateList = function(){
//     listedDiv.forEach(function(i){
//         i.addEventListener("click", function(j){
//             let selectedDiv = i
//             selectedDiv.remove()
//         })
//     })
// }
document.body.addEventListener('keyup',function(event){
    if(event.keyCode == 13){
        addNote()
    }
})
containerDiv.addEventListener('click',function(event){
    console.log(event.target.tagName);
    if(event.target.tagName === "P"){
        event.target.parentElement.remove()

    }
})
// remove()
// function remove(){
//     listedDiv.forEach(function(i){
//         i.addEventListener("click", function(j){
//             let selectedDiv = i
//             selectedDiv.remove()
//         })
//     })
// }