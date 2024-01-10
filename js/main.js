// //INIZIALIZZAZIONE COSTANTI
// const resultPrice = document.getElementById("prezzoBiglietto");

// const tariffa = 0.21;
// console.log("Tariffa €" + tariffa);

// const scontoUnder = 20;
// console.log("Sconto Under 18 %" + scontoUnder);

// const scontoOver = 40;
// console.log("Sconto Over 65 %" + scontoOver);

// let prezzo;
// //INIZIALIZZAZIONE COSTANTI TRAMITE PROMPT ALL'UTENTE + RELATIVI CONTROLLI

// const distanza = prompt(
//   "Quanti km vorreste percorrere con la nostra compagnia ferroviaria?",
//   "30"
// ).trim();
// console.log("Distanza inserita km" + distanza);

// const age = parseInt(prompt("Quanti anni ha ?", "24").trim());
// console.log("Anni inseriti " + age);

// if (isNaN(distanza) || isNaN(age) || distanza < 0 || age < 1 || age > 110) {
//   alert("Dati inseriti errati!!");
// } else {
//   //CREAZIONE DEL PREZZO
//   prezzo = tariffa * distanza;
//   console.log("Prezzo lordo €" + prezzo);
//   // APPLICAZIONE DEGLI SCONTI
//   if (age < 19) {
//     prezzo = prezzo - (prezzo * scontoUnder) / 100;
//     console.log("Prezzo scontato €" + prezzo);
//   } else if (age > 64) {
//     prezzo = prezzo - (prezzo * scontoOver) / 100;
//     console.log("Prezzo scontato €" + prezzo);
//   }
// }
// // ARROTONDAMENTO E PARTE DECIMALE INTERESSATA
// prezzo = prezzo.toFixed(2);
// console.log("Prezzo finale €" + prezzo);

// //STAMPO IN OUTPUT IL PREZZO FINALE TRAMITE ELEMENTO HMTL
// resultPrice.innerText = "Il prezzo del tuo biglietto è: € " + prezzo;
