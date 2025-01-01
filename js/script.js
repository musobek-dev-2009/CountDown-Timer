// script.js
function startCountdown(targetDate) {
  const countdownElement = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
  };

  function updateTimer() {
    const now = new Date();
    const remainingTime = targetDate - now;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      document.querySelector('.countdown').innerHTML = '<h2>Time is up!</h2>';
      return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);

    countdownElement.days.textContent = String(days).padStart(2, '0');
    countdownElement.hours.textContent = String(hours).padStart(2, '0');
    countdownElement.minutes.textContent = String(minutes).padStart(2, '0');
    countdownElement.seconds.textContent = String(seconds).padStart(2, '0');
  }

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
}

// Countdown tugash sanasini kiriting
const targetDate = new Date('2025-12-31T23:59:59');
startCountdown(targetDate);
