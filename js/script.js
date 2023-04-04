//Chiedi all’utente il suo nome,poi chiedi il suo cognome, poi chiedi il suo colore preferito. Infine scrivi sulla pagina nomecognomecolorepreferito23

/*
    Chiedere all'utente il nome con un prompt e mettere il valore nella variabile name1.
    Chiedere all'utente il cognome con un prompt e mettere il valore nella variabile surname.
    Chiedere all'utente il suo colore preferito con un prompt e mettere il valore nella variabile color.
    creare variable password addizionando name1 + surname + color + "23" 
    inserire variabile password nello span con id "insicurissima"

    Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/



// Richiesta nome
const name1 = prompt('Come ti chiami?');

// Richiesta cognome
const lastName = prompt('Qualè il tuo cognome?');

// Richiesta colore preferito
const favcolor = prompt('Qual è il tuo colore preferito');

const currentYear = 23;


// "Calcolo" password
const password = name1 + lastName + favcolor + currentYear

const eleSpan = document.getElementById('insicurissima').innerHTML = password
