// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// ___________________________________
// 1) DEFINIRE IN HTML UN BOTTONE CON ID
// 2) ALL'EVENTO CLICK ASSOCIAMO UN CODICE CHE GENERA LA GRIGLIA

// GENERARE UNA GRIGLIA
// _________________________________
// 1) DEFINIRE UN CONTENITORE CON DOMENSIONI FISSE
// 2) CONTIAMO DA 1 A 100 E PER OGNI CICLO :
// A) INSERIRE LE CELLE NEL CONTENITORE CON DIMENSIONI FISSE
// I) LA LARGHEZZA DELLA CELLA LE VALUTIAMO CON IL CALC
// II) L'ALTEZZA DELLA CELLA LE VALUTIAMO CON IL ASPET RATIO

// B) ASSOCIAMO L'INDICE ALLA SINGOLA CELLA

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const button = document.getElementById("pulsante");
const grid = document.getElementById("griglia");

button.addEventListener("click", function () {
  generaGriglia();
});

function generaGriglia(index) {
  for (let index = 1; index <= 100; index++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerText = index;

    cell.addEventListener("click", function () {
      cell.classList.add("aqua");
      console.log(index);
    });

    grid.append(cell);
  }
}

function genetaCella(indice) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerText = indice;

  cell.addEventListener("click", function () {
    cell.classList.add("aqua");
    console.log(indice);
    return cell;
  });
}
