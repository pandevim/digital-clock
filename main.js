

const date = new Date()

const mdy = document.getElementById( 'date' )
mdy.innerHTML = `${date.toString().slice(4, 7)} ${date.getDate()}, ${date.getFullYear()}`

const day = document.getElementById( date.toString().slice(0, 3) )
day.setAttribute( 'class', 'focus' )

const meridiem = document.getElementById( 'meridiem' )
meridiem.innerHTML = `${date.toLocaleTimeString().slice(-2)}`

const digits = document.getElementById( 'digits' )
const progress = document.getElementById( 'progress' )

setInterval( digits => {

	let current = new Date()
	let hours = current.getHours()
	let minutes = current.getMinutes()
	let seconds = current.getSeconds()

	if ( hours == 0 ) hours = 12
	if ( hours > 12 ) hours = hours - 12

	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;

	this.digits.innerHTML = `${hours}:${minutes}`
	this.progress.setAttribute( 'value', seconds )

}, 1000)





