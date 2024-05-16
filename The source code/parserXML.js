// Функция для выполнения AJAX запросов
function loadXMLDoc(filename, callback) {
	var xhttp
	if (window.XMLHttpRequest) {
		// Код для современных браузеров
		xhttp = new XMLHttpRequest()
	} else {
		// Код для более старых версий IE
		xhttp = new ActiveXObject('Microsoft.XMLHTTP')
	}
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			callback(this.responseXML)
		}
	}
	xhttp.open('GET', filename, true)
	xhttp.send()
}

// Загрузка XML из файла data.xml
loadXMLDoc('data.xml', function (xml) {
	// Получаем title, description и weight-text из XML
	const title = xml.querySelector('title').textContent
	const descriptions = Array.from(xml.querySelectorAll('description'))
		.map(desc => `<p class="description">${desc.textContent}</p>`)
		.join('<br>')
	const weightText = xml.querySelector('weight-text').textContent

	// Создаем HTML контент
	const htmlContent = `
        <h2 class="title">${title}</h2>
        ${descriptions}
        <span class="weight-text">${weightText}</span>
    `

	// Отображаем HTML контент на странице
	document.getElementById('xmlData').innerHTML = htmlContent
})
