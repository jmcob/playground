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
        'Premier mystère douloureux, l\'agonie de notre Seigneur : <br><br>" Père, si tu le veux, éloigne de moi cette coupe ; cependant, que soit faite non pas ma volonté, mais la tienne." Luc 22,42',
        `Deuxième mystère douloureux, la flagellation de Jésus : <br><br>"Alors Pilate fit saisir Jésus pour qu’il soit flagellé." Jean 19,01`,
        `Troisième mystère douloureux, couronnement d'épines de notre Seigneur : <br><br> "Les soldats tressèrent avec des épines une couronne qu'ils lui posèrent sur la tête" Jean 19,02`,
        `Quatrième mystère douloureux, le chemin de Croix : <br><br>"Et lui-même, portant sa croix, sortit en direction du lieu dit Le Crâne (ou Calvaire), qui se dit en hébreu Golgotha." Jean 19,17`,
        `Cinquième mystère douloureux, la mort de Jésus : <br><br> "Après cela, sachant que tout, désormais, était achevé pour que l’Écriture s’accomplisse jusqu’au bout, Jésus dit : « J’ai soif. »" Jean 19,28`,
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

const button = document.getElementById("button");
const mystere = document.getElementById("mystere");
const dizaine = document.getElementById("dizaine");

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
