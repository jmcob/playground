function chapelet() {
  var mysteres = [
    "Agonie",
    "Flagellation",
    "Couronnement d'épines",
    "Chemin de Croix",
    "Mort de Jésus",
  ];
  // nombre de grains = g
  var g;

  // préambule du chapelet
  alert("Je crois en Dieu...");
  alert("Premier Notre Père");
  for (ave = 1; ave < 4; ave++) {
    alert("Je vous salue Marie " + ave);
  }

  // Boucles dizaines
  for (m = 0; m < mysteres.length; m++) {
    alert(
      "Gloire au Père, puis nouveau mystère douloureux : " +
        mysteres[m] +
        ", nouveau Notre Père !"
    );
    for (g = 1; g < 11; g++) {
      alert(mysteres[m] + ", grain numéro " + g);
    }
  }

  // Message de fin
  var felicitations = document.getElementById("felicitations");
  felicitations.innerHTML = `Merci d'avoir prié avec nous ce chapelet !`;
}
