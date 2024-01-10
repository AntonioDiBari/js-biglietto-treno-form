//INIZIALIZZAZIONE COSTANTI
const resultPrice = document.getElementById("prezzo-biglietto");

const tariffa = 0.21;
console.log("Tariffa €" + tariffa);

const scontoUnder = 20;
console.log("Sconto Under 18 %" + scontoUnder);

const scontoOver = 40;
console.log("Sconto Over 65 %" + scontoOver);

let prezzo;
//INIZIALIZZAZIONE COSTANTI TRAMITE INPUT DALL'UTENTE + RELATIVI CONTROLLI

const nameInput = document.querySelector("#user-name");

const distanzaInput = document.querySelector("#distanza");

const ageRangeInput = document.querySelector("#age-range");

const createButton = document.getElementById("create");

createButton.addEventListener("click", function () {
  const user = nameInput.value.trim();
  console.log("Nome utente: " + user);

  const distanza = distanzaInput.value.trim();
  console.log("Distanza inserita km " + distanza);

  const ageRange = ageRangeInput.value;
  console.log("La fascia d'età inserita è " + ageRange);

  if (distanza <= 0) {
    alert("Dati inseriti errati!!");
  } else {
    //CREAZIONE DEL PREZZO
    prezzo = tariffa * distanza;
    console.log("Prezzo lordo €" + prezzo);
    // APPLICAZIONE DEGLI SCONTI
    if (ageRange == "minorenne") {
      prezzo = prezzo - (prezzo * scontoUnder) / 100;
      console.log("Prezzo scontato €" + prezzo);
    } else if (ageRange == "over65") {
      prezzo = prezzo - (prezzo * scontoOver) / 100;
      console.log("Prezzo scontato €" + prezzo);
    }
  }

  // ARROTONDAMENTO E PARTE DECIMALE INTERESSATA
  prezzo = prezzo.toFixed(2);
  console.log("Prezzo finale €" + prezzo);

  //STAMPO IN OUTPUT IL PREZZO FINALE TRAMITE ELEMENTO HMTL
  resultPrice.innerText = "Il prezzo del tuo biglietto è: € " + prezzo;
});
