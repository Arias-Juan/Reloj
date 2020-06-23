function actualizarHora() {
	let fecha = new Date(),
		horas = fecha.getHours(),
		ampm,
		minutos = fecha.getMinutes(),
		segundos = fecha.getSeconds(),
		diaSemana = fecha.getDay(),
		dia = fecha.getDate(),
		mes = fecha.getMonth(),
		anio = fecha.getFullYear();

	let pHoras = document.getElementById('horas'),
		pAMPM = document.getElementById('ampm'),
		pMinutos = document.getElementById('minutos'),
		pSegundos = document.getElementById('segundos'),
		pDiaSemana = document.getElementById('diaSemana'),
		pDia = document.getElementById('dia'),
		pMes = document.getElementById('mes'),
		pAnio = document.getElementById('anio');

	let semana = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes' ];

	pDiaSemana.innerText = semana[diaSemana];

	pDia.textContent = dia;
	pDia.innerHTML = dia;
	let meses = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abrl',
		'Mayo',
		'Junio',
		'Julio',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre'
	];
	pMes.innerText = meses[mes];

	pAnio.innerText = anio;
    
	if (horas >= 12) {
		horas = horas - 12;
		ampm = 'PM';
	} else {
		ampm = 'AM';
	}

	if (horas == 0) {
		horas = 12;
	}

	if (horas < 10) {
		horas = '0' + horas;
	}
	if (minutos < 10) {
		minutos = '0' + minutos;
	}
	if (segundos < 10) {
		segundos = '0' + segundos;
	}

	pHoras.innerText = horas;
	pMinutos.innerText = minutos;
	pSegundos.innerText = segundos;
	pAMPM.innerText = ampm;
}

window.setInterval(actualizarHora, 1000);