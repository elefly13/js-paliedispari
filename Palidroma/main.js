// Chiedere all’utente di inserire una parola

var parolaUtente = prompt("Inserisci una parola");
console.log(parolaUtente);

// Creare una funzione per capire se la parola inserita è palindroma

//trasformo la parola stringa in un array di lettere separate con .split
var composizioneArrayParola = parolaUtente.split("");
console.log(composizioneArrayParola);


//inverto l'array creato
var composizioneArrayParolaInversa = composizioneArrayParola.reverse("");
console.log(composizioneArrayParolaInversa);

//riunisco la nuova composizione di lettere invertite

var parolaUtenteInvertita = composizioneArrayParolaInversa.join("");
console.log(parolaUtenteInvertita);

//ora confronto la parola utente con la parola invertita

if (parolaUtente != parolaUtenteInvertita) {
    console.log("La parola non è palindroma");
}
else {
    console.log("La parola è palindroma");
}


