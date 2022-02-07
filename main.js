//mi richiamo gli elementi del DOM da modificare
const testo = document.getElementById("testo");
const box = document.getElementById("box");

//Inserisco un timer per far scomparire i numeri e passare alla fase 2
setTimeout(domandaNumeri, 3000);

//inizio gioco
let arrayNumbers = []; //creo un'array dove inserire i numeri random

//Inserisco casualmente 5 numeri all'aggiornarsi della pagina
for (i=0; i<5; i++) {

    let numeroCasuale = randomNumber(0, 100);
    box.innerHTML += numeroCasuale + ` `;
    arrayNumbers.push(numeroCasuale);
    console.log(arrayNumbers);

}

//Inserisco il testo dentro l'h1
testo.innerHTML = "Osserva i seguenti numeri per 30 secondi";



//funzione per gestire la fase 2
function domandaNumeri() {

    //resetto i valori presenti sullo schermo
    testo.innerHTML = "Inserisci i 5 numeri appena visti";
    box.innerHTML = "";

    //raccolgo i numeri inseriti
    let answers = [];

    //lascio il tempo di leggere la frase e poi faccio partire i prompt
    setTimeout(function() {

        //Per cinque volte chiedo un numero e lo aggiungo all'array answers
        for (i=0; i<5; i++) {

            let risposta = parseInt(prompt("Inserisci un numero"));
            answers.push(risposta);
            console.log(answers);
        }

        //Controllo se i numeri inseriti corrispondono ai numeri random
        let finalResult = trovaMatch(arrayNumbers, answers);
        console.log(finalResult);

        //mostro poi i risultati sullo schermo
        testo.innerHTML = `Hai indovinato ${finalResult.length} numeri`;
        box.innerHTML = finalResult;

    }, 1000);

}





//Funzione per trovare coincidenze tra 2 array
function trovaMatch(array1, array2) {

    let matches = [];

    for (let i=0; i<array1.length; i++) {

        for (let j=0; j<array2.length; j++) {

            if (array1[i] === array2[j]) matches.push(array1[i]);
        }
    }

    return matches;
}

//Funzione per mostrare un numero random compreso tra 2 numeri definiti in precedenza
function randomNumber(min, max) {
    let numero;
    numero = parseInt(Math.floor(Math.random() * (max - min + 1) + min));
    return numero;
}