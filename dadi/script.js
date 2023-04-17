/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto
*/

// Generatore di numero casuale

let userNumber = Math.floor((Math.random() * 6) + 1);

console.log(userNumber);

let computerNumber = Math.floor((Math.random() * 6) + 1);

console.log(computerNumber);

// Confrontare i numeri ottenuti e stabilire il vincitore

if (userNumber > computerNumber){
    alert('Complimenti il tuo numero è vincente! :D');
    console.log('Complimenti il tuo numero è vincente! :D');
} else if (userNumber < computerNumber){
    alert('Siamo spiacenti ma il tuo numero è perdente! :c');
    console.log('Siamo spiacenti ma il tuo numero è perdente! :c');
} else if (userNumber == computerNumber) {
    alert('Oh no, è pareggio!');
    console.log('Oh no, è pareggio!');
}
