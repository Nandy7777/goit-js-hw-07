import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);
const galleryImages = createGallleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryImages);

function createGallleryItems(galleryItems) {  
  return galleryItems
    .map(({ preview, original, description }) => {
        return `<li><a class="gallery__item" href="${original}">
                <img class="gallery__image"
                src="${preview}" 
                alt="${description}" />
                </a></li>`;
        })
      .join(``);
};

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250,
});


console.log(galleryItems);
