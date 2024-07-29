const paginationDiv = document.getElementById("pagination")
const listDiv = document.getElementById("list")
let buttons
let dataArray = [
    {name:"Alireza Doosti", id :1 },
    {name:"Mohammadamin Ahadi", id :2},
    {name:"Mohammad Rafie", id :3 },
    {name:"Erfan Ebrahimkhani", id :4 },
    {name:"Erfan Taghilou", id :5 },

    {name:"Komeil", id :6 },
    {name:"Rasool", id :7 },
    {name:"Mahdi", id :8 },
    {name:"Hossein", id :9 },
    {name:"Amir", id :10 },

    {name:"Mobin", id :11 },
    {name:"Hadi", id :12 },
    {name:"Ata", id :13 },
    {name:"Mohammadreza", id :14 },
    {name:"Alireza Ghasemi", id :15 },

    {name:"Matin Mohammady", id :16 },
    {name:"Pooya Mohammady", id :17 },
    {name:"Mohammad Khoshmaram", id :18 },
    {name:"Reza Esmaeily", id :19 },
    {name:"Akam", id :20 },

    {name:"Nima", id :21 },
    {name:"Sadra", id :22 },
]

//////////////////////ازینجا تعداد صفحه ها و پیجینیشن ها تنظیم میشه //////////////////
let curent_page = 1
let columns = 5
let rows = Math.ceil(dataArray.length/columns)

/////////////////////این تابع موقع لود صفحه رو فراخانی میکنه ///////////////////////////
function Load(){
    boxGenerating()
    usersList()
    activeBtn()
    clickEvents()
}
///////////////////این تابع به تعداد ردیف ها کلید صفحه بادی تولید میکنه////////////////
function boxGenerating(){
    let boxNum = 1
    for(let i =0;i<rows;++i){
        let newBox = document.createElement('button')
        newBox.innerHTML = boxNum
        ++boxNum
        paginationDiv.appendChild(newBox)
    }
     buttons = document.querySelectorAll("button")
}
//////////////////////تابعی برای بارگذاری محتوای دیتا بیس روی دام متناسب با تعداد ستون ها ////
function usersList(){
    let loadedUsers = curent_page*columns
    let targetArray=  dataArray.slice((loadedUsers-columns),loadedUsers)
    listDiv.innerHTML=''
    targetArray.forEach(function(i){
        
        let item = document.createElement("div")
        item.className = "item"
        item.innerHTML = i.name
        listDiv.appendChild(item)
    })

}
/////////////////اکتیو کردن دکمه صفحه انتخاب شده///////////////////////////////////
function activeBtn(){
   buttons.forEach(function(i){
    if(i.innerHTML == curent_page){
        i.classList.add("active")
    }else{
        i.classList.remove("active")
    }
   })
} 
//////////////////ست کردن ایونت کلیک روی دکمه ها ///////////////////////////////
function clickEvents(){
    buttons.forEach(function(i){
        i.addEventListener('click',function(i){
            curent_page = i.target.innerHTML
            activeBtn()
            usersList()
            
        })
    })
}
//////////////////ست کردن ایونت لود برای لود صفحه////////////////////////////////////////////////
window.addEventListener("load",Load)