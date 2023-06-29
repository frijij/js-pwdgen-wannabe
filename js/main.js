/* TESTO DELL'ESERCIZIO:

Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
Infine scrivi sulla console nomecognomecolorepreferito21
BONUS:
Al posto del 21 finale, chiedete all'utente 2 numeri e concatenate al posto del 21 finale, il primo numero diviso il secondo.
Mostrare la password generata sulla vostra pagina HTML sbizzarrendosi con il layout e volendo potete usare Bootstrap
Fare un layout responsive
CONSIGLIO: Osservate il comportamento di let e var come si comporta sul codice. Mi raccomando alla fine USATE SEMPRE LET!
*/

// INIZIO

//Chiedere informazioni dell'utente: nome, cognome, colore preferito
let userName = prompt("Qual è il tuo nome?");
let userSurname = prompt("Qual è il tuo cognome?");
let userFavColor = prompt("Qual è il tuo colore preferito?");

//Creare variabile per password generata: nomecognomecolorepreferito21
let generatedPW = `${userName+userSurname+userFavColor+21}`;

//Generare password in console: nomecognomecolorepreferito21
console.log(generatedPW);

//BONUS

//Chiedere all'utente due numeri da sostituire al 21


//Mostrare la pw su html


//Fare layout responsive 

