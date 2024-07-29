let datalist = [
    {country :  "Iran" , cities: ["Tehran","Zanjan","Isfahan"] },
    {country :  "USA" , cities: ["San diego","Texas","San francisco"] },
    {country :  "Canada" , cities: ["Torento","Vancouver","Burnaby"] }
]

let userCountryInput = document.getElementById("country")
let userSelectedCountry = userCountryInput.addEventListener('change', function(){
     userSelectedCountry = userCountryInput.value
    let uscIndex = datalist.findIndex(function(data){
        return data.country == userSelectedCountry 
    }) 
    document.getElementById("city").innerHTML = ""
    let uscc = datalist[uscIndex].cities
    // let optionData = document.createElement("option")
    uscc.forEach(function(c){
    document.getElementById("city").innerHTML += '<option>'+c+'</option>'+'<br>'
   })
   
})

