'use strict'

const search = document.querySelector('.box');


function openSearch() {
	search.classList.toggle('_open');
}

document.addEventListener("click", function (e) {
	if (e.target.closest('.search__button')) {
		openSearch();
	}
	if (!e.target.closest('.search__button')&& !e.target.closest('.form') && search.classList.contains('_open')) {
		openSearch();
	}
});

document.addEventListener('keyup', function (e) {
	if (e.code === 'Escape') {
		search.classList.remove('_open');
	}
});



//==========================================================
const inputItem = document.querySelector('.input__item');
const inputLimit = inputItem.getAttribute('maxlength');
const inputCounter = document.querySelector('.input__counter span');
inputCounter.innerHTML = inputLimit;

inputItem.addEventListener("keyup", inputSetCounter);
inputItem.addEventListener("keydown", function (event) {
	if (event.repeat) inputSetCounter();
});

function inputSetCounter() {
	const inputCounterResult = inputLimit - inputItem.value.length;
	inputCounter.innerHTML = inputCounterResult;
}