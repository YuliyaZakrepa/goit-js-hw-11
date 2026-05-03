import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  const delay = Number(elements.delay.value);
  const checkbox = elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (checkbox === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(data => {
      console.log(
        `✅ Fulfilled promise in ${delay}ms`,
        iziToast.success({
          message: `Fulfilled promise in ${delay}ms`,
          position: 'topCenter',
          messageSize: '20',
          color: 'green',
        })
      );
    })
    .catch(error => {
      console.log(
        `❌ Rejected promise in ${delay}ms`,
        iziToast.error({
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topCenter',
          messageSize: '20',
          color: 'red',
        })
      );
    });
  event.target.reset();
}
