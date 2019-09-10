
console.log('Hello, I am imported from HTML');

function onEnrollClicked() {
  console.log('clicked!');
  let ageInput = document.getElementById('ageInput');
  let age = parseInt(ageInput.value); // '111' => 111
  let canEnter = age > 2 && age <= 6;

  let nameInput = document.getElementById('nameInput');
  let name = nameInput.value;

  let resultDiv = document.getElementById('result');
  resultDiv.textContent = name;

  if (canEnter) {
    resultDiv.textContent += ' yes, can enter!';
    document.body.style.backgroundColor = 'green';
  } else {
    resultDiv.textContent += ' can not enter :(';
    document.body.style.backgroundColor = 'red';
    if (age <= 2) {
      resultDiv.textContent += ' : child is too young';
    } else {
      resultDiv.textContent += ' : child is too old';
    }
  }
}
