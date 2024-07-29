// DOM => Document Object Model
// BOM => Browser Object Model
window.addEventListener('load',function(){

    const mainDiv = document.querySelector(".container")
    let data = [
        {id:1 , name: "Man" , price: 34 , imageUrl: "images/1.png"},
        {id:2 , name: "Woman" , price: 87  , imageUrl: "images/2.png"},
        {id:3 , name: "Sport", price: 55 , imageUrl: "images/3.png"},
        // {id:4 , name: "Boot", price: 90 , imageUrl: "images/4.png"}
    ]
    data.forEach(function(data){
      console.log(data.id);
        mainDiv.insertAdjacentHTML("beforeend",
        '<div class="product-card">'+
        '<h1>'+data.name+'</h1>'+
        '<p>Lorem ipsum, or lipsum as it is sometimes known</p>'+
        '<div class="product-pic" style="background-image: url('+data.imageUrl+');"></div>'+
        '<div class="product-info">'+
          '<div class="product-price">$'+data.price+'</div>'+
          '<a href="product.html?id='+data.id+'"class="product-button">See More</a>'+
        '</div>'+
      '</div>')
    })
})
