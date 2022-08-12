import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`); 
const galleryImages = createGallleryItems(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryImages);

function createGallleryItems(galleryItems) {  
  return galleryItems
    .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
                </div>`;
        })
      .join(``);
    
    
};

galleryContainer.addEventListener(`click`, onGalleryContainerClick);
function onGalleryContainerClick(evt) {
    evt.preventDefault();
    console.log(evt.target.dataset.source);

    
}

const instance = basicLightbox.create(`
    <img src="${original}" width="800" height="600">
    `);

instance.show();

console.log(galleryItems);
