const container = document.querySelector('.container');
const app = document.createElement('div');
container.appendChild(app);
app.classList.add('app');
const title = document.createElement('p');
app.appendChild(title);
title.textContent = 'Create random password with symbols';
const inputPass = document.createElement('input');
app.appendChild(inputPass);
inputPass.placeholder = 'Enter your password';
const valueLength = document.createElement('label');
app.appendChild(valueLength);
valueLength.textContent = `Password length: 8 `;
const inputLength = document.createElement('input');
app.appendChild(inputLength);
inputLength.type = 'range';
inputLength.value = '8';
inputLength.min="8";
inputLength.max="30";
inputLength.classList.add('pass-length');
// render frame-checkbox INCLUDE SYMBOLS
const includeSymbols = document.createElement('div');
app.appendChild(includeSymbols);
includeSymbols.classList.add('frame-checkbox');
const symbolcheckbox = document.createElement('input');
symbolcheckbox.type = 'checkbox';
includeSymbols.appendChild(symbolcheckbox);
const paraSymbols = document.createElement('p');
paraSymbols.textContent = 'Include symbols (?!@$%&*...)';
includeSymbols.appendChild(paraSymbols);
// render frame-checkbox INCLUDE UPERCASE
const includeUpercase = document.createElement('div');
app.appendChild(includeUpercase);
includeUpercase.classList.add('frame-checkbox');
const upercasecheckbox = document.createElement('input');
upercasecheckbox.type = 'checkbox';
includeUpercase.appendChild(upercasecheckbox);
const paraUpercase = document.createElement('p');
paraUpercase.textContent = 'Include Upercase';
includeUpercase.appendChild(paraUpercase);
// render frame-checkbox INCLUDE NUMBER
const includeNumber = document.createElement('div');
app.appendChild(includeNumber);
includeNumber.classList.add('frame-checkbox');
const numbercheckbox = document.createElement('input');
numbercheckbox.type = 'checkbox';
includeNumber.appendChild(numbercheckbox);
const paraNumber = document.createElement('p');
paraNumber.textContent = 'Include Number';
includeNumber.appendChild(paraNumber);
//render BUTTON 
const button = document.createElement('button');
app.appendChild(button);
button.classList.add('btn');
button.textContent = 'GENERATION';

// FEATURE
// const specialSymbols = ['!', '@', '#', '$', '%', '&', '*', '?', '+', '-', '_', '=', '(', ')', '{', '}', '[', ']', '|', '\\', '/', ':', ';', '<', '>', ',', '.', '`', '~'];
// let randomSymbols = specialSymbols[Math.floor(Math.random() * specialSymbols.length)];
// const numbers = ['0', '1', '2', '3', '4','5','6', '7', '8', '9', '0'];
// let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
// const maxLength = inputLength.maxLength ;
// button.addEventListener('click',(e) => {
//     if(inputPass.value === ''){
//         alert('Please enter your password');
//     }
//     else{

//     }
// });
// function generatePass(symbol,uppercaseLetters,lowercaseLetters,numbers) {
// const symbol = '!@#$%^&*()<>()?/';
// const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const lowercaseLetter = 'abcdefghijklmnopqrstuvwxyz';
// const numbers = '0123456789';
// }

// const passwordLenge = 12;
// const valuesymbols = true;
// const valueuppercaseLetters = true;
// const valuelowercaseLetters = true;
// const valuenumbers = true;

const updateSlider = () => {
    document.querySelector('label').innerHTML = "Password length: " + inputLength.value;
}
inputLength.addEventListener('input', updateSlider);