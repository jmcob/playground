// définition d'un entier entre un et 10 random
var valueR = Math.floor(Math.random() * 10) + 1;
console.log(valueR);

// log est la zone de réponse, click la zone du bouton
var log = document.getElementById("log");
var click = document.getElementById("click");

// evenement "click" puis condition switch case : si la valeur de l'utilisateur est comparable a la valeur Random, alors ...
click.addEventListener("click", () => {
  var valueU = document.getElementById("number").value;
  switch (true) {
    case valueU > valueR:
      log.innerHTML =
        valueU + " est au dessus de la bonne valeur, try again, you must !";
      break;
    case valueU < valueR:
      log.innerHTML =
        valueU + " est au dessous de la bonne valeur, try again !";
      break;
    case valueU == valueR:
      log.innerHTML = "congrats! c'était " + valueR;
      break;
    default:
      log.innerHTML = "doesn't work";
  }
});
