import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/06/24/16/17/forest-4296305__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/06/24/16/17/forest-4296305_1280.jpg',
    description: 'A forest path in summer',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/11/18/15/16/mountain-4635428__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/11/18/15/16/mountain-4635428_1280.jpg',
    description: 'Misty mountain valley at sunrise',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/29/04/17/beach-1867271__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/29/04/17/beach-1867271_1280.jpg',
    description: 'Ocean coast at golden hour',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg',
    description: 'Tropical island and clear water',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2017/06/20/19/22/fuchs-2424369__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2017/06/20/19/22/fuchs-2424369_1280.jpg',
    description: 'Red fox in the grass',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2020/01/20/18/37/lake-4781585__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2020/01/20/18/37/lake-4781585_1280.jpg',
    description: 'Mirror lake with mountains',
  },
];

const galleryElement = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `
  )
  .join('');

galleryElement.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
