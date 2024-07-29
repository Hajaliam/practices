let mainNAv = document.getElementById("mainNav")
let logo =document.querySelector("img")
function scrollHandler(event){
   if(document.documentElement.scrollTop != 0){
    mainNAv.className = "bg-black txt-white a"
    logo = document.querySelector("img")
    logo.style.height = '64px'
   }else{
    mainNAv.className = ''
    logo.style.height = '86px'
   }
}