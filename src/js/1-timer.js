
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector("button[data-start]")
const input = document.querySelector("#datetime-picker")

const days = document.querySelector("[data-days]")
const hours = document.querySelector("[data-hours]")
const minutes = document.querySelector("[data-minutes]")
const seconds = document.querySelector("[data-seconds]")






let userSelectedDate;


const options = {
    class: "modalError",
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < Date.now()) {iziToast.error({
        
        transitionIn: "bounceInLeft",
        maxWidth: "302",
                title: "Error",
                titleColor: "white",
                titleSize: "16",
                message: 'Please choose a date in the future',
                position: "topRight",
                backgroundColor: "red",
                messageColor: "white",
                messageSize: "16"
    });
startBtn.disable = true;
    } else {
        startBtn.disable = false;
        userSelectedDate = selectedDates[0];
    
    }
  },
  
};

flatpickr(input, options);

startBtn.addEventListener("click", event => {
    setTimeout(() => {
    const currentTime = Date.now();
    const diff = userSelectedDate - currentTime;
    updClockFace(convertMs(diff));
    }, 1000)
    });
  

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
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
    
  } 
 function addLeadingZero(value) {
    return String(value).padStart(2,"0");
}