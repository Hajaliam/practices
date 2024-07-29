// ✌ :))
let data = [
    {id:1 , name: "Man" , price: 34 , imageUrl: "images/1.png"},
    {id:2 , name: "Woman" , price: 87  , imageUrl: "images/2.png"},
    {id:3 , name: "Sport", price: 55 , imageUrl: "images/3.png"},
    // {id:4 , name: "Boot", price: 90 , imageUrl: "images/4.png"}
]
let btn = document.querySelector('button')
btn.addEventListener('click',function(){
    history.back()
})
window.addEventListener('load',function(){

    let descriptionElem = document.querySelector(".desc")
    let image = document.querySelector("img")
    let locationSearch = location.search
    let locationSearchParam = new URLSearchParams(locationSearch)
    let targetId = locationSearchParam.get('id')
    console.log(targetId);
     let target = data.find(function(data){
        return data.id == targetId
    })
    console.log(target);
    descriptionElem.firstElementChild.innerHTML = target.name
    image.src = target.imageUrl
})


