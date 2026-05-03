import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/loader.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('input');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const text = input.value.trim().toLocaleLowerCase();
  if (text.length === 0) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      messageColor: '#FFFFFF',
      maxWidth: 432,
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(text)
    .then(data => {
      if (data.hits.length > 0) {
        createGallery(data.hits);
      } else {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
          messageColor: '#FFFFFF',
          maxWidth: 432,
        });
      }
    })
    .catch(error => {
      iziToast.error({
        message: 'Error fetching data!',
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#FFFFFF',
        maxWidth: 432,
      });
    })
    .finally(() => {
      event.target.reset();
      hideLoader();
    });
}
