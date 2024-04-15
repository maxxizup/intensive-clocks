let timerId = null; // переменная, которая будет хранить ID таймера

const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
	// Проверяем, не запущен ли уже таймер
	if (timerId === null) {
		timerId = setInterval(updateClock, 1000); // Запускаем таймер и сохраняем его ID
	}
});


const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
	// Проверяем, запущен ли таймер
	if (timerId !== null) {
		clearInterval(timerId); // Останавливаем таймер
		timerId = null; // Сбрасываем ID таймера
	}
});


function updateClock() {
	const clock = document.getElementById('clock');
	// НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
	const now = new Date();
	const hours = now.getHours()
	const minutes = now.getMinutes()
	const seconds = now.getSeconds()
	clock.textContent = hours + ':' + minutes + ':' + seconds;
}