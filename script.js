const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('.login');
const btnButton = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const contador = document.querySelector('#counter');
const form = document.querySelector('#evaluation-form');
let name = document.querySelector('#input-name').value;
let lastName = document.querySelector('#input-lastname').value;
let Email = document.querySelector('#input-email').value;
let house = document.querySelector('#house').value;
const family = document.querySelectorAll('#labelFamily input');
const contentInputs = document.querySelectorAll('#labelContent input');
const rateInputs = document.querySelectorAll('#labelRate input');
let selectedRate = '';
let selectedFamily = '';
const selectedContent = [];
let selectedString = '';
let textAreaValue = '';

let count = 500;
const strong = document.createElement('strong');
strong.innerText = count;
contador.appendChild(strong);

function familyChecked() {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      selectedFamily = family[index].value;
    }
  }
}

function contentChecked() {
  for (let index = 0; index < contentInputs.length; index += 1) {
    if (contentInputs[index].checked) {
      selectedContent.push(contentInputs[index].value);
    }
  }
  selectedString = selectedContent.toString().replaceAll(',', ', ');
}

function rate() {
  for (let index = 0; index < rateInputs.length; index += 1) {
    if (rateInputs[index].checked) {
      selectedRate = rateInputs[index].value;
    }
  }
}

function readValues() {
  name = document.querySelector('#input-name').value;
  lastName = document.querySelector('#input-lastname').value;
  Email = document.querySelector('#input-email').value;
  house = document.querySelector('#house').value;
  textAreaValue = document.querySelector('#textarea').value;
}

function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', login);

agreement.onchange = function () {
  btnButton.disabled = !this.checked;
};

function counter() {
  count = textArea.maxLength - textArea.value.length;
  strong.innerText = count;
}

textArea.addEventListener('input', counter);

function data(e) {
  e.preventDefault();
  familyChecked();
  contentChecked();
  rate();
  readValues();
  const content = document.createElement('div');
  form.innerHTML = `Nome: ${name} ${lastName}<br><br><br>
  Email: ${Email}<br><br><br>
  Casa: ${house}<br><br><br>
  Família: ${selectedFamily}<br><br><br>
  Matérias: ${selectedString}<br><br><br>
  Avaliação: ${selectedRate}<br><br><br>
  Observações: ${textAreaValue}`;
  form.appendChild(content);
}

btnButton.addEventListener('click', data);
