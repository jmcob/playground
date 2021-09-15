//DOM
var element = document.getElementById("test");

for (let i = 0; i < 5; i++) {
  var span = document.createElement("span");
  span.setAttribute("class", "content-" + [i]);
  span.innerHTML = "Exercices de Vaast en JS " + i;
  element.appendChild(span);
}

const hello = ["Bonjour", "Au revoir"];
for (const element of hello) {
  console.log(element);
  console.log(hello);
}
element.innerHTML = hello.map((el) => {
  return `<p>${el}</p>`;
});

// se renseigner sur les .map dans les tableaux
// cela fait une copie du tableau
// mike codeur veille / je suis un dev blog
// 'join' pour la virgule
