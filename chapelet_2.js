const mysteres = [
  "Agonie",
  "Flagellation",
  "Couronnement d'épines",
  "Chemin de Croix",
  "Mort de Jésus",
];

const dizaines = [
  "Notre Père",
  'Premier "Je vous salue Marie"',
  'Deuxième "Je vous salue Marie"',
  'Troisième "Je vous salue Marie"',
  'Quatrième "Je vous salue Marie"',
  'Cinquième "Je vous salue Marie"',
  'Sixième "Je vous salue Marie"',
  'Septième "Je vous salue Marie"',
  'Huitième "Je vous salue Marie"',
  'Neuvième "Je vous salue Marie"',
  'Dernier "Je vous salue Marie" de la dizaine',
  "Gloire au Père",
];

let button = document.getElementById("button");
let mystere = document.getElementById("mystere");
let dizaine = document.getElementById("dizaine");

let inc = 0;
let ave = 0;
mystere.innerHTML = "";

button.addEventListener("click", () => {
  ave++;
  if (ave == 12) {
    ave = 0;
    inc++;
    if (inc == mysteres.length) {
      inc = 0;
    }
  }
  mystere.innerHTML = mysteres[inc];
  dizaine.innerHTML = dizaines[ave];
});

/* Dans le cas où tu souhaiterais que ce soit le texte du bouton qui change, il faudrait changer lignes 10 et 17 les text.innerHTML par button.innerHTML */
