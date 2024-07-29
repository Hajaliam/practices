let contextMenu = document.getElementById("contextMenu")

document.body.addEventListener('contextmenu',function(event){
    event.preventDefault()
    contextMenu.style.top = event.pageY
    contextMenu.style.left = event.pageX
    contextMenu.style.display = 'block'
    contextMenu.style.position = 'absolute'
})
document.body.addEventListener('click',function(event){
    contextMenu.style.display = 'none'
})
document.body.addEventListener('keydown',function(event){
    if(event.keyCode == 27){
        contextMenu.style.display = 'none'
    }
})