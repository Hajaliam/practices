let dataList = [
    {name:'Album 1' , id:1 , src:"Images/Album 1.png" , price:12.99},
    {name:'Album 2' , id:2 , src: "Images/Album 2.png" , price:14.99}
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
         let newCartRow = document.createElement("div")
         newCartRow.className = 'cart-row'
         let newCartItem = document.createElement("div")
         newCartItem.className = 'cart-item cart-column'
         let newImg = document.createElement("img")
         newImg.className = 'cart-item-image'
         newImg.style.cssText = 'width : 100 , height : 100'
         newImg.src = dataList[indexOfTrg].src
         let newSpan = document.createElement("span")
         newSpan.className = 'cart-item-title'
         newSpan.innerHTML = dataList[indexOfTrg].name
         let newPriceSpan = document.createElement("span")
         newPriceSpan.className = "cart-price cart-column"
         newPriceSpan.innerHTML = "$"+dataList[indexOfTrg].price
         let newCountDiv = document.createElement("div")
         newCountDiv.className = "cart-quantity cart-column"
         let newInput = document.createElement("input")
         newInput.type = 'number'
         newInput.id = dataList[indexOfTrg].id
         newInput.className = "cart-quantity-input"
         newInput.value = '1'
         let newBtn = document.createElement("button")
         newBtn.className = "btn btn-danger"
         newBtn.type = "button"
         newBtn.innerHTML = 'REMOVE'
         newCartItem.append(newImg,newSpan)
         newCountDiv.append(newInput,newBtn)
         newCartRow.append(newCartItem,newPriceSpan,newCountDiv)
         cardItems.appendChild(newCartRow)
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