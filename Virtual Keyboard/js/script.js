const keys = document.querySelectorAll("li")
const h1Elem = document.querySelector(".title")
let s,newS,finalString,d,inner,fInner
let array = []
 document.addEventListener('keyup',function(i){
 s = i.key
 if(s!='Backspace'){
    h1Elem.innerHTML += s
 }else if(s == 'Backspace'){
   inner= h1Elem.innerHTML.toString()
    h1Elem.innerHTML = inner.slice(0,-1)
 }
 newS =  s.toUpperCase()
 keys.forEach(function(i){
    if(i.id == newS){
        i.classList.add('hit')
        i.addEventListener('animationend',function(){
            i.classList.remove('hit')
        })
       
        
    }

 })
 })
 