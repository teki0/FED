var project = document.querySelector('fieldset:nth-of-type(3)');
project.classList.add('ontzichtbaar');


var stage = document.querySelector('fieldset:nth-of-type(4)');
stage.classList.add('ontzichtbaar');

document.querySelector('input[type="radio"][name="aanmelden"]:nth-of-type(1)').onclick = function() {
	project.classList.add('zichtbaar');
	stage.classList.remove('zichtbaar');
}

document.querySelector('input[type="radio"][name="aanmelden"]:nth-of-type(2)').onclick = function() {
	project.classList.remove('zichtbaar');
	stage.classList.add('zichtbaar');
}
