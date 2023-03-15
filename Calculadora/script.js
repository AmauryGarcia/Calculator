function addToInput(value) {
	document.getElementById('input').value += value;
}

function clearInput() {
	document.getElementById('input').value = '';
}

function deleteChar() {
	var input = document.getElementById('input').value;
	document.getElementById('input').value = input.substring(0, input.length - 1);
}

function calculate() {
	var input = document.getElementById('input').value;
	var result = eval(input);
	document.getElementById('input').value = result;
}
