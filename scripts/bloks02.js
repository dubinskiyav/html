document.onmousemove = moveTip;
function moveTip(e) {
	floatTipStyle = document.getElementById("floatTip").style;
	w = 250; // Ширина слоя
    x = e.pageX; // Координата X курсора
    y = e.pageY; // Координата Y курсора
    floatTipStyle.left = x + 'px';
	// Положение от верхнего края окна браузера
	floatTipStyle.top = y + 20 + 'px';
}
function toolTip(msg) {
	floatTipStyle = document.getElementById("floatTip").style;
	document.getElementById("floatTip").left = 50;
	if (msg) {
		// Выводим текст подсказки
		document.getElementById("floatTip").innerHTML = msg;
		floatTipStyle.display = "block"; // Показываем слой
	} else { 
		floatTipStyle.display = "none"; // Прячем слой
	}
}