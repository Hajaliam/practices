const rangeVolume = document.querySelector("input")
const brightenessDiv = document.querySelector(".brightness-box")
let rangeValue
rangeVolume.addEventListener('input',function(){
  rangeValue= rangeVolume.value
  document.body.style = "filter : brightness("+rangeValue+"%)"
})