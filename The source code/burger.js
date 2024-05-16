document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('burger').addEventListener('click', () => {
		document.querySelector('.menu').classList.toggle('open')
		document.querySelector('.main').classList.toggle('open')
	})
})
