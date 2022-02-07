//mi richiamo gli elementi del DOM da modificare
const testo = document.getElementById("testo");
const box = document.getElementById("box");

//All'avvio della pagina faccio partire il gioco
updatePage();

//Inserisco un timer per far scomparire i numeri e passare alla fase 2
setTimeout(domandaNumeri, 3000);












let answers = [];
let finalResult = [];
const match = array1.filter(element => array2.includes(element));

function domandaNumeri() {
    //resetto i valori presenti sullo schermo
    testo.innerHTML = "Inserisci i 5 numeri appena visti";
    box.innerHTML = "";

    //lascio il tempo di leggere la frase e poi faccio partire i prompt
    setTimeout(function() {

        //Per cinque volte chiedo un numero e lo aggiungo all'array answers
        for (i=0; i<5; i++) {

            answers += prompt("Inserisci un numero");

        }

        //mostro poi i risultati sullo schermo
        testo.innerHTML = `Hai indovinato ${finalResult.length} numeri`;
        box.innerHTML = finalResult;

    }, 1000);
    
}






//funzione di inizio gioco
function updatePage() {

    let arrayNumbers = [];

    //Inserisco casualmente 5 numeri all'aggiornarsi della pagina
    for (i=0; i<5; i++) {
        box.innerHTML += randomNumber(0, 100) + ` `;
        arrayNumbers.push(box);
        console.log(box);
    }

    //Inserisco il testo dentro l'h1
    testo.innerHTML = "Osserva i seguenti numeri per 30 secondi";

    return arrayNumbers;
}

//Funzione per mostrare un numero random compreso tra 2 numeri definiti in precedenza
function randomNumber(min, max) {
    let numero;
    numero = parseInt(Math.floor(Math.random() * (max - min + 1) + min));
    return numero;
}