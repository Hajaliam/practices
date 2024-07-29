const btn = document.querySelectorAll(".btn")
btn.forEach(function(btn){
    btn.addEventListener('click',function(i){
        // console.log(i.target.dataset.color);
        document.documentElement.style.setProperty("--theme-color",i.target.dataset.color)
    })
})