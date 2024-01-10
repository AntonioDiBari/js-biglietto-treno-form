# CALCOLO BIGLIETTO DEL PREZZO DEL TRENO

## TRACCIA

```plaintext
cartella/repo: js-biglietto-treno-form

Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale (cioè il biglietto) andranno quindi stampati in pagina. Il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo.
BONUS:
Visualizzare il biglietto solo dopo che l'utente ha cliccato sul bottone.
```

## SVOLGIMENTO

- Inizializzo una costante per il prezzo unitario di 1 km, due costanti per la percentuale di sconto
- Dichiaro una variabile prezzo che andrò man mano a "modellare"
- Inizializzo una costante per il nome (così da rendere più carino l'output) con una input nel form
- Inizializzo la costante per il numero di km che si vogliono percorrere con una input nel form
- Inizializzo la costante per la fascia d' età del passeggero con una input nel form
- Controllo se i valori inseriti dall' utente per i km sono accettabili, solo se corretti procedo
- Calcolo il prezzo del biglietto moltiplicando i km desiderati per la tariffa al km e lo applico alla variabile prezzo (qui lordo, senza sconto)
- Gestisco la scontistica da applicare in base alla fascia d'età modificando sempre la stessa variabile del prezzo (rendendolo netto)
- Arrotondo e rendo visibile la parte decimale che mi interessa (Decimi e Centesimi)
- Stampo il nome ed il prezzo finale , al netto di eventuale sconto, con elementi presenti nell'HTML
