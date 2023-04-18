/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto
*/

// Generatore di numero casuale per utente e pc


const btnGenera = document.getElementById("genera");

btnGenera.addEventListener("click" , function(){

const eleGrid = document.querySelector('.grid');

let userNumber = Math.floor((Math.random() * 6) + 1);
eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${'Il tuo numero è: ' + userNumber}</div>`
console.log(userNumber);

let computerNumber = Math.floor((Math.random() * 6) + 1);
eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${'Il numero del computer è: ' + computerNumber}</div>`
console.log(computerNumber);

// Confrontare i numeri ottenuti e stabilire il vincitore

if (userNumber > computerNumber){
    eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${'Complimenti il tuo numero è vincente! :D'}</div>`
    console.log('Complimenti il tuo numero è vincente! :D');
} else if (userNumber < computerNumber){
    eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${'Siamo spiacenti ma il tuo numero è perdente! :c'}</div>`
    console.log('Siamo spiacenti ma il tuo numero è perdente! :c');
} else if (userNumber == computerNumber) {
    eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${'Oh no, è pareggio!'}</div>`
    console.log('Oh no, è pareggio!');
}
})