let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')

document.body.addEventListener('keydown', function (event) {
	
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
	document.getElementById("starter-text").innerHTML = event.keyCode
	title = event.keyCode
	document.getElementById("keyCode").innerHTML = event.keyCode
	locationKey.innerHTML = event.location
	document.getElementById("key").innerHTML = event.key
	document.getElementById("which").innerHTML=event.which
	document.getElementById("code").innerHTML=event.code
	if(event.keyCode == 32){
		document.getElementById("key").innerHTML= 'Space'

	}
})