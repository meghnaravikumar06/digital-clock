let is24HourFormat = true;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = "";

    // Toggle between day and night mode based on time
    if (hours >= 6 && hours < 18) {
        document.body.classList.remove("night");
        document.body.classList.add("day");
    } else {
        document.body.classList.remove("day");
        document.body.classList.add("night");
    }

    // Update clock hands' position
    updateClockArms(hours, minutes, seconds);

    if (!is24HourFormat) {
        period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
    }

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds} ${period}`;
}

function updateClockArms(hours, minutes, seconds) {
    // Calculate degrees for each clock arm
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // 360/12 hours
    const minuteDeg = minutes * 6; // 360/60 minutes
    const secondDeg = seconds * 6; // 360/60 seconds

    // Apply rotation to the clock arms
    document.querySelector(".hour").style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector(".second").style.transform = `rotate(${secondDeg}deg)`;
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
