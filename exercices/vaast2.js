//DOM

var span = document.createElement("span");
span.setAttribute("class", "content");
span.innerHTML = "Exercices de Vaast en JS";

var element = document.getElementById("test");
element.appendChild(span);
