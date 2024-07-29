const userTitle = document.getElementById("title")
const userAuthor = document.getElementById("author")
const userPubYear = document.getElementById("year")
const tbody = document.getElementById("book-list")
const addBtn = document.querySelector(".btn")
let localData = []


userPubYear.addEventListener('keyup',function(event){
    if(event.keyCode == 13){
        userPubYear.blur()
        addHandler()
    }
})
addBtn.addEventListener('click',function(event){
    event.preventDefault()
    addHandler()
})
window.addEventListener('load',loader)



function addHandler(){
   let name = userTitle.value  
   userTitle.value = ''
   let author = userAuthor.value 
   userAuthor.value = ''  
   let year = userPubYear.value  
   userPubYear.value = ''
   localS(name,author,year)
   let newTR = document.createElement('tr')
   let newTitle = document.createElement('th')
   newTitle.innerHTML = name
   let newAuthor = document.createElement('th')
   newAuthor.innerHTML = author
   let newYear = document.createElement('th')
    newYear.innerHTML = year
   newTR.append(newTitle,newAuthor,newYear)
   tbody.appendChild(newTR)

}

function localS(name , author , year){
    let obj = {name:name , author:author ,year : year}
    localData.push(obj)
    localData = JSON.stringify(localData)
    localStorage.setItem('data',localData)
}
function loader(){
    let loadedData = localStorage.getItem('data')
    loadedData = JSON.parse(loadedData)
    if(loadedData!= null ){
        domLoader(loadedData)
    }
} 
function domLoader(loadedData){
    localData = loadedData
    loadedData.forEach(function(i){
        let newTR = document.createElement('tr')
        let newTitle = document.createElement('th')
        newTitle.innerHTML = i.name
        let newAuthor = document.createElement('th')
        newAuthor.innerHTML = i.author
        let newYear = document.createElement('th')
         newYear.innerHTML = i.year
        newTR.append(newTitle,newAuthor,newYear)
        tbody.appendChild(newTR)
    })
}
