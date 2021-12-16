const time = document.getElementById("itemQuantity");
const remainingTime = document.getElementById("remainingTime");
const chosenTime = document.getElementById("chosenTime");
const button = document.getElementById("button");
const form = document.getElementById("form");

button.addEventListener("click", () => {
        let minuteTimer = time.value * 60000; //minuteTimer = time in ms
        let ms = 0;
        let seconds = 0;
        let minutes = 0;

        // for the timer
        // setInterval(() => {
        //         ms += 1000;
        //         seconds = ms / 1000;
        //         if ((seconds = 60)) {
        //                 minutes++;
        //                 seconds = 0;
        //         }
        // }, 1000);

        // message :
        chosenTime.innerHTML =
                "Vous avez choisi de prier " + time.value + " minute(s).";

        // aesthetics and final function
        setTimeout(alertFunc, minuteTimer);
        document.body.style.background = "midnightblue";
        document.body.style.color = "orangered";
        form.style.display = "none";
});
function alertFunc() {
        document.body.style.background = "green";
        remainingTime.innerHTML =
                "Terminé! Vous avez prié " + time.value + " minute(s)";
        new Audio("hey.ogg").play();
}
