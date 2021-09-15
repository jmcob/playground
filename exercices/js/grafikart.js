// function est premier

var estPremier = function (nombre) {
  for (var i = 2; i < nombre; i++) {
    if (nombre % i === 0) {
      return false;
    }
  }
  return true;
};

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
var classB = [
  {
    nom: "Maxime",
    moyenne: 17,
  },
  {
    nom: "Stanislas",
    moyenne: 7,
  },
  {
    nom: "Aurore",
    moyenne: 1,
  },
  {
    nom: "Chloé",
    moyenne: 16,
  },
];
function quiALaMoyenne(eleves) {
  var moyennes = [];
  for (var i = 0; i < eleves.length; i++) {
    var eleve = eleves[i];
    if (eleve.moyenne >= 10) {
      moyennes.push(eleve);
    }
  }
  return moyennes;
}
// pikachu

var pikachu = {
  crier: function () {
    console.log("PIKACHU");
  },
};

// découpe phrase

var phrase =
  "Mon âme exalte le Seigneur, exulte mon esprit en Dieu, mon Sauveur ! Il s’est penché sur son humble servante ; désormais tous les âges me diront bienheureuse. Le Puissant fit pour moi des merveilles ; Saint est son nom ! Sa miséricorde s’étend d’âge en âge sur ceux qui le craignent. Déployant la force de son bras, il disperse les superbes. Il renverse les puissants de leurs trônes, il élève les humbles. Il comble de biens les affamés, renvoie les riches les mains vides. Il relève Israël son serviteur, il se souvient de son amour, de la promesse faite à nos pères, en faveur d’Abraham et sa descendance à jamais.";

var mots = phrase.toLowerCase().split(" ");
var compteur = {};
for (var i = 0; i < mots.length; i++) {
  var mot = mots[i];
  if (compteur[mot] === undefined) {
    compteur[mot] = 1;
  } else {
    compteur[mot]++;
  }
}
console.log(compteur);

// ernier exemple functions

var eleve1 = {
  nom: "Jean",
  note: [15, 16, 18],
};
var eleve1 = {
  nom: "Marc",
  note: [8, 20, 18],
};
// estMeilleur(eleve1, eleve2);
function moyenne(notes) {
  var somme = 0;
  for (var i = 0; i < notes.length; i++) {
    somme = somme + notes[i];
  }
  return somme / notes.length;
}
console.log(moyenne(eleve1.notes));
