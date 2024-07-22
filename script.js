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
const inputLength = document.createElement('input');
app.appendChild(inputLength);
inputLength.placeholder = 'Length of your password';
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