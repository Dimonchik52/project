// Получаем элементы для сортировки
const select = document.getElementById('sort-by')
const carContainer = document.getElementById('car-container')
const cars = Array.from(carContainer.getElementsByClassName('car'))

// Функция для сортировки массива объектов по указанному полю
function sortByField(array, field, ascending) {
	const modifier = ascending ? 1 : -1
	array.sort((a, b) => {
		if (a[field] < b[field]) return -1 * modifier
		if (a[field] > b[field]) return 1 * modifier
		return 0
	})
}

// Функция для обновления отображения списка автомобилей
function updateCarList(cars) {
	carContainer.innerHTML = ''
	cars.forEach(car => {
		carContainer.appendChild(car)
	})
}

// Обработчик изменения выбора в селекте
select.addEventListener('change', event => {
	const value = event.target.value
	let field, ascending
	switch (value) {
		case 'price-asc':
			field = 'price'
			ascending = true
			break
		case 'price-desc':
			field = 'price'
			ascending = false
			break
		case 'name-asc':
			field = 'name'
			ascending = true
			break
		case 'name-desc':
			field = 'name'
			ascending = false
			break
		default:
			return
	}

	// Получаем массив объектов для сортировки
	const carsData = cars.map(car => {
		const name = car.querySelector('.description h2').textContent
		const price = parseFloat(
			car.querySelector('.car-cost').textContent.split(' ')[1]
		)
		return { element: car, name, price }
	})

	// Сортируем и обновляем отображение
	sortByField(carsData, field, ascending)
	updateCarList(carsData.map(car => car.element))
})
