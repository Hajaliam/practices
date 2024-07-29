const hour = document.querySelector("#hour")
const minute = document.querySelector("#minute")
const second = document.querySelector("#seconds")

setInterval(function () {
    let liveTime = new Date()
    let stringHour = JSON.stringify(liveTime.getHours())
    let stringMinutes = JSON.stringify(liveTime.getMinutes())
    let stringSeconds = JSON.stringify(liveTime.getSeconds())
    if (stringHour.length < 2) {

        hour.innerHTML = '0' + stringHour
    } else {
        hour.innerHTML = stringHour

    }
    if (stringMinutes.length < 2) {

        minute.innerHTML = '0' + stringMinutes
    } else {
        minute.innerHTML = stringMinutes

    }
    if (stringSeconds.length < 2) {

        second.innerHTML = '0' + stringSeconds
    } else {
        second.innerHTML = stringSeconds

    }
}, 1000)