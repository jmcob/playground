// définition d'un entier entre un et 10 random
const valueR = Math.floor(Math.random() * 10) + 1;
console.log(valueR);

// log est la zone de réponse, click la zone du bouton, input la zone de texte
const log = document.getElementById("log");
const click = document.getElementById("click");
const input = document.getElementById("number");
var i = 1;

// Pour que la touche entrée trigger la fonction click
input.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "Enter":
      click.click();
      break;
    default:
      return;
  }
});

// evenement "click" puis condition switch case : si la valeur de l'utilisateur est comparable a la valeur Random, alors ...
click.addEventListener("click", () => {
  const valueU = document.getElementById("number").value;
  switch (true) {
    case valueU > valueR:
      log.innerHTML =
        valueU + " est au dessus de la bonne valeur, try again, you must !";
      i++;
      break;
    case valueU < valueR:
      log.innerHTML =
        valueU + " est au dessous de la bonne valeur, try again !";
      i++;
      break;
    case valueU == valueR:
      log.innerHTML = "congrats! c'était " + valueR + " en " + i + " essais.";
      break;
    default:
      log.innerHTML = "doesn't work";
  }
});
