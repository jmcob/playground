function oneToTen() {

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}
var valueR = generateRandomInteger(10);
var i = 1;
var valueU = window.prompt("chiffre entre 1 et 10 compris");

while (valueU != valueR) {

  if(parseInt(valueU) > valueR) {
  window.alert(valueU + " est au dessus")
  } else {
    window.alert(valueU + " est en dessous")
  }
  var valueU = window.prompt("chiffre entre 1 et 10 compris")
  i++;
}

if(valueR == valueU){
  window.alert("BRAVO! c'était " + valueR + ". Vous avez trouvé le nombre en " + i + " fois")
}
}
