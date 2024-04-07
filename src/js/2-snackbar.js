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
    setTimeout(() => {
        if (form.state.value === "fulfilled") {
            resolve(delay);
        } else { reject(delay);
        }
    }, delay);
    });

promise
 .then((delay) => {
    iziToast.show({
        position: 'topRight',
                titleColor: "white",
        titleSize: '18px',
        backgroundColor: '#59a10d',
        messageColor:"white",
        messageSize: '16px',
        title: 'OK',
        message: `✅ Fulfilled promise in ${delay}ms`
    })
})
.catch((delay) => {
    iziToast.show({
        position: 'topRight',
        titleColor: "white",
        titleSize: '18px',
        backgroundColor: '#b54657',
        messageColor:"white",
        messageSize: '16px',
        title: `Error`,
        message: `❌ Rejected promise in ${delay}ms`

})
})
form.reset();
};