import axios from 'axios';

export function getImagesByQuery(query) {
  const API_KEY = '55684410-10358821b17bf14561ffe1031';
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return axios('https://pixabay.com/api/', { params }).then(resolve => {
    return resolve.data;
  });
}
