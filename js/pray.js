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
    new Date() +
    ".<br><br> Ce message disparaitra au terme du temps imparti !";
});

function alertFunc() {
  remainingTime.style.color = "orangered";
  document.body.style.background = "mistyrose";
  remainingTime.innerHTML =
    "Terminé! Vous avez prié " + time.value + " minute(s)";
  new Audio("hey.ogg").play();
}

// Create a reference for the Wake Lock.
let wakeLock = null;

// create an async function to request a wake lock
try {
  wakeLock = await navigator.wakeLock.request("screen");
  statusElem.textContent = "Wake Lock is active!";
} catch (err) {
  // The Wake Lock request has failed - usually system related, such as battery.
  statusElem.textContent = `${err.name}, ${err.message}`;
}

// The wake lock sentinel.
let wakeLock = null;

// Function that attempts to request a screen wake lock.
const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request();
    wakeLock.addEventListener("release", () => {
      console.log("Screen Wake Lock released:", wakeLock.released);
    });
    console.log("Screen Wake Lock released:", wakeLock.released);
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
};

// Request a screen wake lock…
await requestWakeLock();
// …and release it again after 5s.
window.setTimeout(() => {
  wakeLock.release();
  wakeLock = null;
}, 5000);
