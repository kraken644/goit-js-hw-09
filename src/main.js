import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// ===== Task 1: Gallery =====

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Vibrant Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/24/21/20/flower-4226693__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/24/21/20/flower-4226693_1280.jpg',
    description: 'White Daisy',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/04/18/30/mandarin-duck-4178259__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/04/18/30/mandarin-duck-4178259_1280.jpg',
    description: 'Mandarin Duck',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/05/26/13/48/hamburger-1417579__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/05/26/13/48/hamburger-1417579_1280.jpg',
    description: 'Hamburger',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2017/03/11/17/42/olgica-habjanovic-2135479__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2017/03/11/17/42/olgica-habjanovic-2135479_1280.jpg',
    description: 'Olgica Habjanovic',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/03/26/09/54/chain-690088__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/03/26/09/54/chain-690088_1280.jpg',
    description: 'Chain',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg',
    description: 'Startup',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/11/15/22/52/bled-3818715__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/11/15/22/52/bled-3818715_1280.jpg',
    description: 'Bled',
  },
];

const galleryEl = document.querySelector('.gallery');

if (galleryEl) {
  galleryEl.insertAdjacentHTML(
    'beforeend',
    images
      .map(
        ({ preview, original, description }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img class="gallery-image" src="${preview}" alt="${description}" />
          </a>
        </li>`
      )
      .join('')
  );
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

// ===== Task 2: Feedback Form =====

const STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };

const formEl = document.querySelector('.feedback-form');

if (formEl) {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    formEl.elements.email.value = formData.email ?? '';
    formEl.elements.message.value = formData.message ?? '';
  }

  formEl.addEventListener('input', ({ target }) => {
    const { name, value } = target;
    if (name === 'email' || name === 'message') {
      formData[name] = value.trim();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  });

  formEl.addEventListener('submit', e => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
    formEl.reset();
  });
}
