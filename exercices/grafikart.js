// function est premier

function estPremier(nombre) {
  for (var i = 2; i < nombre; i++) {
    if (nombre % i === 0) {
      return false;
    }
  }
  return true;
}

function multiplie(a, b) {
  if (b === undefined) {
    b = 1;
  }
  return a * b;
}

//moyenne
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
  {
    nom: "Samantha",
    moyenne: 13,
  },
];
function afficheQuiALaMoyenne(eleves) {
  for (var i = 0; i < eleves.length; i++) {
    var eleve = eleves[i];
    if (eleve.moyenne >= 10) {
      console.log(eleve.nom + " a la moyenne");
    }
  }
}
afficheQuiALaMoyenne(classA);
// 10mn function video
