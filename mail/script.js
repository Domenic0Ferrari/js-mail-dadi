/*
Chiedi all’utente la sua email
Controlla che sia nella lista di chi può accedere (array)
Stampa un messaggio appropriato sull’esito del controllo (true/false)
*/

// Fare un array con le email che possono accedere

let validEmail = ['giovanni@boolean.com' , 'domenico@boolean.com', 'vincenzo@boolean.com', 'andrea@boolean.com', 'giulia@boolean.com', 'sara@boolean.com', 'rina@boolean.com', 'romina@boolean.com'];

// Chiedere all'utente la sua email

let userEmail = prompt('Qual è la tua email?')

// Variabile che controlla l'accesso

let accesso = false;

// Controllare che la mail inserita sia nell'array

for (let i = 0; i < validEmail.length; i++){
    if(validEmail[i] == userEmail){
       accesso = true;
    }
}

// Stampa un messaggio appropriato sull’esito del controllo

if (accesso == true){
    alert('Accesso autorizzato! :D');
    console.log('Accesso autorizzato! :D');
    }
    else{
        alert('Accesso negato! :('); 
        console.log('Accesso negato! :c');
    }