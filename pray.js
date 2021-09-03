var timeMin
var time
var remain
var remaining
var innerRemaining
var timeS

var timer = function () {
  timeMin = window.prompt("Combien de minutes de prière ?");
  time = timeMin * 60000;
  timeS = (timeMin / 60)

  window.setTimeout(function() {
    new Audio("aujourdhui.m4a").play();}, parseInt(time, 10));
  
  remain = document.getElementById("remain");
    remain.innerHTML += "Vous avez choisi de prier " + timeMin + " minute(s) à " + new Date() +". Une musique viendra vous réveiller !";
    
// tentative pour afficher le timer dans la console.
  // while (parseInt(timeS, 10) > 0) { 
  //   timeS--;
  //   window.setTimeout(function() {;
  //         console.log(timeS);}, 1000)
  //   }
}
