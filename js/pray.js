const time = document.getElementById("itemQuantity");
const minuteTimer = time.value * 60000; //minuteTimer = time en millisecondes
const remainingTime = document.getElementById("remainingTime");
const button = document.getElementById("button");
button.addEventListener("click", () => {
  remainingTime.innerHTML =
    "Vous avez choisi de prier " +
    time.value +
    " minute(s) à " +
    new Date() +
    ". Ce mesage disparaitra au terme du temps imparti !";
});
function setTime() {
  setTimeout(alertFunc, minuteTimer);
}
function alertFunc() {
  remainingTime.style.color = "orangered";
  remainingTime.innerHTML =
    "Terminé! Vous avez prié " + time.value + " minute(s)";
}
