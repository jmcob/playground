const time = document.getElementById("itemQuantity");
const minuteTimer = time.value * 60000; //minuteTimer = time en millisecondes
// const minuteTimer = 3000;

const remainingTime = document.getElementById("remainingTime");
const button = document.getElementById("button");
button.addEventListener("click", () => {
        setTimeout(alertFunc, minuteTimer);
        document.body.style.background = "midnightblue";
        remainingTime.innerHTML =
                "Vous avez choisi de prier " +
                time.value +
                " minute(s). <br><br>le " +
                new Date().toLocaleTimeString +
                ".<br><br> Ce message disparaitra au terme du temps imparti !";
});

function alertFunc() {
        remainingTime.style.color = "orangered";
        document.body.style.background = "mistyrose";
        remainingTime.innerHTML =
                "Terminé! Vous avez prié " + time.value + " minute(s)";
        new Audio("hey.ogg").play();
}
