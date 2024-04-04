// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit)




function handleSubmit (event) {
    event.preventDefault();
  

    const promise = new Promise((resolve, reject) =>{
    const delay = Number(form.delay.value)
        if (form.state.value === "fulfilled") {
            setTimeout(() => resolve(delay), delay)
        } else if (form.state.value === "rejected") {
            setTimeout(() => reject(delay), delay)
        }
    })

promise
 .then((delay) => {
    iziToast.show({
               message: `✅ Fulfilled promise in ${delay}ms`
    })
})
.catch((delay) => {
    iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`

})
})
form.reset();
};