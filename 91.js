//moyenne

var afficheQuiALaMoyenne = function (eleves) {
  for (var i = 0; i < eleves.length; i++);

  var eleve = eleves[i];
  if (eleve.moyenne >= 10) {
    console.log(eleve.nom + " a la moyenne");
  }
};
var classA = [
  {
    nom: "Marc",
    moyenne: 15,
  },
  {
    nom: "Marion",
    moyenne: 8,
  },
  {
    nom: "Antoine",
    moyenne: 4,
  },
];
afficheQuiALaMoyenne(classA);
