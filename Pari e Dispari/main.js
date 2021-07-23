// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var pariDispari = prompt('inserisci pari o dispari');
console.log(pariDispari);

var numeroGiocatore = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log(numeroGiocatore);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}
var numeroRandomcomputer = numeroRandom(1, 5);
console.log(numeroRandomcomputer);


// Sommiamo i due numeri
function sommaNumeri(num1, num2) {
    var risultato = num1 + num2;
    return risultato;
}
var sommaNumeriGioco = sommaNumeri(numeroGiocatore, numeroRandomcomputer);
console.log(sommaNumeriGioco);


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariOdispari(num) {
    if (num % 2 == 0) {

        return 'pari';
    }
    return 'dispari';
}
var risultato = pariOdispari(sommaNumeriGioco);
console.log(risultato);

// Dichiariamo chi ha vinto.
function vincitore() {
    if (pariDispari != risultato) {
        return 'Hai perso'
    }
    return 'HAI VINTO!'
}
var fineGioco = vincitore();
console.log(fineGioco);