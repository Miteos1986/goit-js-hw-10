
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

startBtn.addEventListener("click", (options) => {
    userSelectedDate = setInterval (() => {
        console.log(`interval, ${userSelectedDate}`);
    }, 1000);
} )

let userSelectedDate = 0;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(userSelectedDate = selectedDates[0]);
      if (userSelectedDate < Date.now()) {iziToast.error({
                message: 'Please choose a date in the future'
    });
startBtn.disable = true;
    } else {startBtn.disable = false}
  },
};

flatpickr(input, options);
