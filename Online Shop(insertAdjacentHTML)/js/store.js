let dataList = [
    {name:'Album 1' , id:1 , src:"Images/Album_1.png" , price:12.99},
    {name:'Album 2' , id:2 , src: "Images/Album_2.png" , price:14.99}
]
const cardItems = document.querySelector(".cart-items")
const addToCartBtn = document.querySelectorAll(".shop-item-button")
/////////////////////add to card button fnc//////////////////////
addToCartBtn.forEach(function(i){
    i.addEventListener('click',function(i){
         let targetItem = i.target.parentElement.previousElementSibling.previousElementSibling.innerHTML
         let indexOfTrg = dataList.findIndex(function(i){
            return i.name == targetItem
         })
         cardItems.insertAdjacentHTML("beforeend",
         '<div class="cart-row">'+
         '<div class="cart-item cart-column">'+
             '<img class="cart-item-image" src='+dataList[indexOfTrg].src+' width="100" height="100">'+
             '<span class="cart-item-title">'+dataList[indexOfTrg].name+'</span>'+
         '</div>'+
         '<span class="cart-price cart-column">$'+dataList[indexOfTrg].price+'</span>'+
         '<div class="cart-quantity cart-column">'+
             '<input class="cart-quantity-input" id="'+dataList[indexOfTrg].id+'" type="number" value="1">'+
             '<button class="btn btn-danger" type="button">REMOVE</button>'+
         '</div>'+
       '</div>')
         deleteItem()
         totlatCalc(dataList[indexOfTrg].price)
        // calcHandler()
         inputUpdater()

    })
})
//////////////////////////delete btn fnc///////////////////////////
let deleteBtn
function deleteItem(){
    deleteBtn = document.querySelectorAll(".btn-danger")
    deleteBtn.forEach(function(i){
        i.addEventListener('click',function(i){
            i.target.parentElement.parentElement.remove();
            calcHandler()
            
        })
    })
}
/////////////////////////total price fncs/////////////////////////
let totalViewer = document.querySelector(".cart-total-price")
let totalCost = 0 

function totlatCalc(price = 0){
    // let count = document.querySelector("")
    totalCost += price
    totalViewer.innerHTML = "$"+totalCost
}


///////////////////////count input listeners////////////////
let countinputs 
function inputUpdater(){
    countinputs = document.querySelectorAll(".cart-quantity-input")
    countinputs.forEach(function(i){
        i.addEventListener('change',calcHandler)
    })
}
let pureCost 
function calcHandler(){
    countinputs = document.querySelectorAll(".cart-quantity-input")
    pureCost = 0
    countinputs.forEach(function(i){
        
        let count = i.value
        let trgPrice = dataList.find(function(j){
            return i.id == j.id
        }).price
        pureCost += count*trgPrice
    })
    totalViewer.innerHTML ="$"+ pureCost
}
window.addEventListener('load',function(){
    inputUpdater()
    deleteItem()
})