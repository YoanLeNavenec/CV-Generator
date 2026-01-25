//Header script here//
const InputName = document.querySelector('#Name');
const PreviewName = document.querySelector('#Preview-Name');

InputName.addEventListener('input', function(){
  PreviewName.textContent = this.value;
});

const InputObjective = document.querySelector('#Objective');
const PreviewObjective = document.querySelector('#Preview-Objective');

InputObjective.addEventListener('input', function(){
  PreviewObjective.textContent = this.value;
});

const InputEmail = document.querySelector('#Email');
const PreviewEmail = document.querySelector('#Preview-Email');

InputEmail.addEventListener('input', function(){
  PreviewEmail.textContent = this.value;
});

const InputPhone = document.querySelector('#Phone');
const PreviewPhone = document.querySelector('#Preview-Phone');

InputPhone.addEventListener('input', function(){
  PreviewPhone.textContent = this.value;
});

const InputAdress = document.querySelector('#Adress');
const PreviewAdress = document.querySelector('#Preview-Adress');

InputAdress.addEventListener('input', function(){
  PreviewAdress.textContent = this.value;
});

//Script for the body here//

