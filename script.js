const container = document.querySelector('.container');
const app = document.createElement('div');
container.appendChild(app);
app.classList.add('app');
const title = document.createElement('p');
app.appendChild(title);
title.textContent = 'Create random password with symbols';
// input frame
const inputFrame = document.createElement('div');
app.appendChild(inputFrame);
inputFrame.classList.add('inputFrame');
const inputPass = document.createElement('input');
inputPass.style.position = 'relative';
const iconCopy = document.createElement('div');
inputFrame.appendChild(iconCopy);
iconCopy.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 9.667A2.667 2.667 0 0 1 9.667 7h8.666A2.667 2.667 0 0 1 21 9.667v8.666A2.667 2.667 0 0 1 18.333 21H9.667A2.667 2.667 0 0 1 7 18.333z"/><path d="M4.012 16.737A2 2 0 0 1 3 15V5c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1"/></g></svg>';
inputFrame.appendChild(inputPass);
inputPass.placeholder = 'Enter your password';
// end input frame
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
symbolcheckbox.id = 'symbols';
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
upercasecheckbox.id = 'uppercase';
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
numbercheckbox.id = 'numbers';
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
// LENGTH PASSWORD
const updateSlider = () => {
    document.querySelector('label').innerHTML = "Password length: " + inputLength.value;
}
inputLength.addEventListener('input', updateSlider);

// GENERATE PASS 
const characters = {
    symbols : '!@#$%^&*()<>()?/',
    uppercase : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercaseLetter : 'abcdefghijklmnopqrstuvwxyz',
    numbers : '0123456789'
}
const generateButon = document.querySelector('.btn');
options = document.querySelectorAll('.frame-checkbox input');
const generatePass = () => {
    let defaultPass = "";
    let randomPassword = "";
    let passLength = inputLength.value;
    options.forEach(option => {
        if(option.checked)
        {          
            defaultPass += characters[option.id];
        }
        else{
            defaultPass += characters[2];
        }

    });
    for (let i = 0; i < passLength; i++){
        randomPassword += defaultPass[Math.floor(Math.random() * defaultPass.length)];
    }
    inputPass.value = randomPassword;
};
generateButon.addEventListener("click" , generatePass);

// COPY TO CLIPBOARD
const copyToClipboard = () => {
    navigator.clipboard.writeText(inputPass.value);
    // inputPass.value = 'COPIED';
    alert('Password copied to clipboard : ' + inputPass.value);
}
iconCopy.addEventListener('click', copyToClipboard);