import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
    <a href = "${largeImageURL}" class = "gallery-link">
    <img src = "${webformatURL}" alt = "${tags}"/>
    <div class="info-wrapper"> 
    <p>likes: ${likes}</p>
    <p>views: ${views}</p>
    <p>comments: ${comments}</p>
    <p>downloads: ${downloads}</p>
    </div>
    </a>
  </li>`
    )
    .join('');
  galleryContainer.innerHTML = markup;
  lightbox.refresh();
}
export function clearGallery() {
  galleryContainer.innerHTML = '';
}
export function showLoader() {
  loader.classList.remove('hidden');
}
export function hideLoader() {
  loader.classList.add('hidden');
}
