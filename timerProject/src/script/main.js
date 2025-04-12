let j = jQuery.noConflict()
j(document).ready(function(){
    let playPauseBtn = j("#icon")
    const inputTime = j("#number")
    let interval , timerSec , timerMin , timer  ,pauseBtn , playBtn
    play()
    function plyaPauseUpdater() {playPauseBtn.click(function(){
        
        j(this).fadeOut()
        j(this).toggleClass("fa-play")
        playBtn = j(".fa-play")
        play()
        j(this).toggleClass("fa-pause")
        pauseBtn = j(".fa-pause")
        pause()
        j(this).fadeIn()
        
    })
}
plyaPauseUpdater()

    j(inputTime).css("width",j(".watch").css("width"))
    j(window).on("resize",function(){
        j(inputTime).css("width",j(".watch").css("width"))
    })
   ////////////////time///////////// 
//    console.log(startTime);
function eventUpdater(){
    pause()
    play()
}
function play(){
    playBtn = j(".fa-play")
    j(playBtn).off("click").on("click",function(){
        // console.log("I am running from playBtn");
        // pause()
        if(j("#number").val()){

            let startTime = Date.now()
            interval = j(inputTime).val() * 60 * 1000
         
            timer = setInterval(function(){
                let elpased = Date.now() - startTime
                let remainingSecond = (interval - elpased)/1000
                remainingSecond = Math.floor(remainingSecond)
                timeShow(Math.floor(remainingSecond/60),Math.floor(((remainingSecond/60 - Math.floor(remainingSecond/60))*60)+0.5))
                if(remainingSecond == 0){clearInterval(timer)}
            },1000)
        }
    })
}
function timeShow(minute,second){
    // console.log(minute,":",second);
    j(".sec").text(function(){
        timerSec = second
        if(second >= 10){
            return second
        }else{
            return "0"+second
        }
    })
    j(".min").text(function(){
        timerMin = minute
        if(minute >= 10){
            return minute
        }else if(minute != 0){
            return "0"+minute}
        else{
                return "00"
            }
       
    })
               
    
}
function pause(){
    pauseBtn = j(".fa-pause")
    pauseBtn.off("click").on("click",function(){
        clearInterval(timer)
        let reaminingTime = timerMin + (timerSec / 60)
        j("#number").val(Math.floor(reaminingTime*100)/100)
        // console.log("I am running from pauseBtn");
    })
    plyaPauseUpdater()
}

})
