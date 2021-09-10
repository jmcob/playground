const introduction = [
  "Je crois en Dieu",
  "Premier 'Notre Père'",
  'Premier "Je vous salue Marie" d\'intro',
  'Deuxième "Je vous salue Marie" d\'intro',
  'Troisième "Je vous salue Marie" d\'intro',
  "Gloire au Père",
];

const mysteres = [
  "Introduction du chapelet",
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

let intro = 0;
let inc = 0;
let ave = 0;
mystere.innerHTML = "";

button.addEventListener("click", () => {
  if (ave == dizaines.length) {
    ave = 0;
    inc++;
    if (inc == mysteres.length) {
      inc = 0;
    }
  }
  mystere.innerHTML = mysteres[inc];
  if (inc == 0) {
    dizaine.innerHTML = introduction[intro];
    intro++;
    if (intro == introduction.length) {
      inc++;
      ave = -1;
    }
  } else {
    dizaine.innerHTML = dizaines[ave];
  }
  ave++;
});

/* Dans le cas où tu souhaiterais que ce soit le texte du bouton qui change, il faudrait changer lignes 10 et 17 les text.innerHTML par button.innerHTML */
