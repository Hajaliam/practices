
const wrapperDiv = document.querySelector(".search-input")
const input = document.querySelector("input")
const autocomBox = document.querySelector(".autocom-box")
let liTags ;
let inputValue,targetArray = null
input.addEventListener('keyup',function(){
    if(input.value.length == 0 ){
        wrapperDiv.className = 'search-input'
    }else{
        autocomHandler()
    }
})
function autocomHandler(){
    inputValue = input.value.toLowerCase()
    targetArray = suggestions.filter(function(i){
        return i.toLowerCase().includes(inputValue)
    })
    autocomBox.innerHTML=''
    if(targetArray.length == 0 ){
        autocomBox.insertAdjacentHTML('afterbegin',
        '<li>'+input.value+'</li>')
    }else{
        targetArray.forEach(function(i){
            autocomBox.insertAdjacentHTML('beforeend',
            '<li>'+i+'</li>')
        })
        liTags = document.querySelectorAll('li')
        liTags.forEach(function(i){
            i.addEventListener('click',function(i){
              input.value = i.target.textContent
              wrapperDiv.classList.remove('active')
            })
        })
    }
    wrapperDiv.classList.add('active')
    
}
