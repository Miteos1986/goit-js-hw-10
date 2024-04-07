// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('button[data-start]');
const input = document.querySelector('#datetime-picker');

const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

let userSelectedDate;
userSelectedDate = startBtn.disabled = true;

const options = {
  class: 'modalError',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      iziToast.error({
        transitionIn: 'bounceInLeft',
        maxWidth: '302',
        title: 'Error',
        titleColor: 'white',
        titleSize: '16',
        message: 'Please choose a date in the future',
        position: 'topRight',
        backgroundColor: 'red',
        messageColor: 'white',
        messageSize: '16',
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      userSelectedDate = selectedDates[0];
    }
  },
};

flatpickr(input, options);

startBtn.addEventListener('click', event => {
  startBtn.disabled = true;
  input.disabled = true;
  const timerInterval = setInterval(() => {
    const currentTime = Date.now();
    const diff = userSelectedDate - currentTime;

    updClockFace(convertMs(diff));
    console.log(diff);
    if (diff <= 1000) {
      clearInterval(timerInterval);
    }
  }, 1000);
});

function updClockFace({ days, hours, minutes, seconds }) {
  timerDays.textContent = days;
  timerHours.textContent = hours;
  timerMinutes.textContent = minutes;
  timerSeconds.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
