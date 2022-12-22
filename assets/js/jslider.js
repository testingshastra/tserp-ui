const optionRow = document.querySelector('.container-carousel');
const optionItems = document.querySelectorAll('.optionItem');

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

// ? ----- ----- Right arrow Event Listener ----- -----
arrowRight.addEventListener('click', () => {
	optionRow.scrollLeft += optionRow.offsetWidth;

	const activeArrow = document.querySelector('.indicadores .activo');
	if(activeArrow){
		activeArrow.classList.add('activo');
		activeArrow.classList.remove('activo');
	}
});

// ? ----- ----- Left arrow Event Listener ----- -----
arrowLeft.addEventListener('click', () => {
	optionRow.scrollLeft -= optionRow.offsetWidth;

	const activeArrow = document.querySelector('.indicadores .activo');
	if(activeArrow){
		activeArrow.classList.add('activo');
		activeArrow.classList.remove('activo');
	}
});