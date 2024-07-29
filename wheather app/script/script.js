let base = "pics/";
let bgarray = ["1","2","3","4","5","6"]
let randomBG = Math.floor(Math.random()*6)

document.body.style.backgroundImage = "url("+base+bgarray[randomBG]+".jpg)"
let database = [
    { name : 'zanjan' , wheather : 'Windy' , deg : '9 deg'},
    { name : 'tehran' , wheather : 'Sunny' , deg : '12 deg'}
]
document.getElementById("btn").addEventListener('click',function(){
    let inpCity = document.getElementById("search__box").value
    let finalIndex = database.findIndex(function(input){return input.name == inpCity})
    document.querySelector(".howIsWheather").innerHTML = "Wheather is "+database[finalIndex].wheather
    document.querySelector(".degree").innerHTML = database[finalIndex].deg

})
//  document.getElementById("btn").addEventListener('click',function(){
//  })