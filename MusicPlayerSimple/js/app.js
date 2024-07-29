const audios = document.querySelectorAll("audio")
const musicDiv = document.querySelectorAll(".main-music")
const icons = document.querySelectorAll("i")
let targetDataName
icons.forEach(function(i){
    i.addEventListener('click',function(j){
        targetDataName = j.target.dataset.name 
        audios.forEach(function(j){
            if (j.dataset.name === targetDataName){
                audios.forEach(function(e){
                    e.pause()
                })
                j.currentTime = 0
                j.play()
            }
        })
       
    
    })
})
