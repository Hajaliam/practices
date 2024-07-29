const modal = document.querySelector(".modal")
const modalParent = document.querySelector(".modal-parent")
const btn = document.querySelector("button")
const xbtn = document.querySelector(".X")
function modalHandler(){
    modalParent.style.display = 'block'
    document.querySelector("section").style.filter = 'blur(10px)'
}
function removeModal(){
    modalParent.style.display = 'none'
    document.querySelector("section").style.filter = 'none'
}

btn.addEventListener('click', modalHandler )
xbtn.addEventListener('click', removeModal)
document.body.addEventListener('keydown', function(event){
    if(event.keyCode == 27){
        removeModal()
    }
})
