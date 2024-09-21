const countdownElement = document.getElementById('countdown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const rsvpButton = document.getElementById('rsvp-button');

// Set the date of your birthday (year, month (0-11), day, hour, minute)
const birthdayDate = new Date(2025, 1, 8, 20, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = birthdayDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    daysElement.innerHTML = days.toString().padStart(2, '0');
    hoursElement.innerHTML = hours.toString().padStart(2, '0');
    minutesElement.innerHTML = minutes.toString().padStart(2, '0');
    secondsElement.innerHTML = seconds.toString().padStart(2, '0');

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Feliz Aniversário!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

rsvpButton.addEventListener('click', () => {
    alert('Top! Te espero lá');
});

window.onload = function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
};