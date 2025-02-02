let is24HourFormat = true;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = "";

    if (!is24HourFormat) {
        period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
    }

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds} ${period}`;
}

document.getElementById("toggleFormat").addEventListener("click", () => {
    is24HourFormat = !is24HourFormat;
    document.getElementById("toggleFormat").innerText = is24HourFormat
        ? "Switch to 12-hour format"
        : "Switch to 24-hour format";
    updateClock();
});

setInterval(updateClock, 1000);
updateClock();