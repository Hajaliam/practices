let flag = true
document.querySelector(".changeButton").addEventListener('click', function () {
    document.querySelector("#converter").value = ''
    document.querySelector(".result").innerHTML = ''
    if (flag) {
        document.querySelector("#convert__Title").innerHTML = 'Converter <span class="F">°F</span> to <span class="C">°C'
        document.title = "SalzLearn| Js | °F to °C"
        document.querySelector("#converter").placeholder = '°F'
        flag = false
    } else {
        document.querySelector("#convert__Title").innerHTML = 'Converter <span class="C">°C</span> to <span class="F">°F'
        document.title = "SalzLearn| Js | °C to °F"
        document.querySelector("#converter").placeholder = '°C'
        flag = true
    }
})
    document.querySelector(".resetButton").addEventListener('click', function () {
    document.querySelector("#converter").value = ''
    document.querySelector(".result").innerHTML = ''

})
document.querySelector(".convertButton").addEventListener('click', function () {
    let inpNum = Number(document.querySelector("#converter").value)
    if ( inpNum != undefined && inpNum != NaN) {
        if (flag) {
            let result = (inpNum * (9 / 5)) + 32
            document.querySelector(".result").innerHTML = "The result is " + result
        } else {
            let result = (inpNum - 32) * (5 / 9)
            document.querySelector(".result").innerHTML = "The result is " + result
        }
    } else if (inpNum == NaN || inpNum == undefined) {
        document.querySelector(".result").innerHTML = "Please enter a correct value !"
    }
})