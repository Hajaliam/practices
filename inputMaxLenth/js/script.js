let input = document.querySelector("input")
input.addEventListener('keyup',function(){
    let num = input.value.length
    document.querySelector(".counter").innerHTML = 19-num
})