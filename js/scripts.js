var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');
var elBtn = document.querySelector('.js-btn');
var elOutput = document.querySelector('.js-output');

var fizz = 'Fizz';
var buzz = 'Buzz';
var fizzbuzz = 'FizzBuzz';


elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  if (elInput.value == 0) {
    elOutput.textContent = 'Error';
  }
  else if (elInput.value % 15 === 0) {
    elOutput.textContent = fizzbuzz;
  }
  else if(elInput.value % 3 === 0) {
    elOutput.textContent = fizz;
  }
  else if (elInput.value % 5 === 0) {
    elOutput.textContent = buzz;
  }
  else {
    elOutput.textContent = 'Error';
  }
});