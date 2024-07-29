const switchElement = document.querySelector('.switch')
let isDark = false
checkTheme()
switchElement.addEventListener('click', function () {
  // Hint: Add 'dark' class to body :))
  if(!isDark){
    document.body.className = 'dark'
    localStorage.setItem('theme','dark')
    isDark = true
  }else{
    document.body.className = ''
    localStorage.setItem('theme','light')
    isDark = false
  }
})

function checkTheme (){
  let flag = localStorage.getItem('theme')
  if(flag==="light" || flag ===null){
   document.body.className = ''
   isDark = false
  }else if(flag === "dark"){
    document.body.className = 'dark'
    isDark = true
  }
}