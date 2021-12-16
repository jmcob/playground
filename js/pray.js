const time = document.getElementById("itemQuantity");
const remainingTime = document.getElementById("remainingTime");
const button = document.getElementById("button");
const form = document.getElementById("form");

button.addEventListener("click", () => {
        let minuteTimer = time.value * 60000; //minuteTimer = time in ms

        // for the timer
        setInterval(() => {
                minuteTimer -= 60000;
        }, 60000);

        // message :
        remainingTime.innerHTML =
                "Vous avez choisi de prier " +
                time.value +
                " minute(s). <br><br> Il reste " +
                minuteTimer / 60000 +
                " minutes !";

        // aesthetics and final function
        setTimeout(alertFunc, minuteTimer);
        document.body.style.background = "midnightblue";
        form.style.display = "none";
});
function alertFunc() {
        document.body.style.color = "orangered";
        document.body.style.background = "green";
        remainingTime.innerHTML =
                "Terminé! Vous avez prié " + time.value + " minute(s)";
        new Audio("hey.ogg").play();
}
