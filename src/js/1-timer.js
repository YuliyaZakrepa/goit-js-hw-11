import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const btnStart = document.querySelector('button[data-start]');
const input = document.querySelector('#datetime-picker');
const secs = document.querySelector('span[data-seconds]');
const mns = document.querySelector('span[data-minutes]');
const hours = document.querySelector('span[data-hours]');
const days = document.querySelector('span[data-days]');

btnStart.addEventListener('click', handleClick);
btnStart.disabled = true;

let userSelectedDate = null;
let setIntervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0].getTime();
    const currentTime = Date.now();
    if (userSelectedDate <= currentTime) {
      btnStart.disabled = true;
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topCenter',
        messageSize: '20',
        color: 'blue',
      });
      return;
    } else {
      btnStart.disabled = false;
    }
  },
};
flatpickr('#datetime-picker', options);

function addTextContent(obj) {
  secs.textContent = String(obj.seconds).padStart(2, '0');
  mns.textContent = String(obj.minutes).padStart(2, '0');
  hours.textContent = String(obj.hours).padStart(2, '0');
  days.textContent = String(obj.days).padStart(2, '0');
}

function handleClick() {
  btnStart.disabled = true;
  input.disabled = true;
  setIntervalId = setInterval(() => {
    const currentTime = Date.now();
    const delta = userSelectedDate - currentTime;
    if (delta <= 0) {
      clearInterval(setIntervalId);
      input.disabled = false;
      days.textContent = '00';
      hours.textContent = '00';
      mns.textContent = '00';
      secs.textContent = '00';
      iziToast.success({
        message: 'Time is over',
        position: 'topCenter',
        messageSize: '20',
        color: 'green',
      });

      return;
    }
    const object = convertMs(delta);
    addTextContent(object);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
