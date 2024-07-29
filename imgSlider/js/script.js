const $ = document;
const img = $.querySelector("img")
const prev = $.querySelector(".prev");
const next = $.querySelector(".next");
let sliderItem = $.querySelectorAll(".slider-item");
let index = 0;
// console.log(sliderItem);
let photoArray = ['image/1.jpg','image/2.png','image/3.jpg']
function prevItem() {
    index--
    if (index < 0) {
        index = photoArray.length - 1
    }
   img.src = photoArray[index]
}
function nextItem() {
  index++;
  
  if (index > photoArray.length - 1) {
    index = 0;
  }
  img.src = photoArray[index]
}

setInterval(nextItem , 4000)
prev.addEventListener("click", prevItem);
next.addEventListener("click", nextItem);
