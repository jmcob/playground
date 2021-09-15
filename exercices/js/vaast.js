// sw-itch case

// var lang = "en";

// switch (lang) {
//   case "fr":
//     console.log("bonjour");
//     break;
//   case "en":
//     console.log("hello");
//     break;
//   case "de":
//     console.log("guuten tag");
//     break;
//   case "it":
//     console.log("buongiorno");
//     break;
//   default:
//     console.log("bonjour");
//     break;
// }

// //boucle while
// let n = 0;

// while (n < 10) {
//   console.log(n);
//   n++;
// }

// boucle for
var listePrenom = ["Jean", "Jacques", "Clémence", "Adrien", "Marie"];
for (let prenom of listePrenom) {
  console.log(prenom);
}

// functions
function afficherHeure() {
  var date = new Date();
  console.log(date);
}

afficherHeure();

// fonctions avec paramêtre
function direBonjour(prenom) {
  console.log("Bonjour " + prenom);
}

direBonjour("Aurore");
direBonjour("Jean-Maxime");
direBonjour("Aurélien");

// DOM

var element = document.querySelector(".test");
console.log(element);
