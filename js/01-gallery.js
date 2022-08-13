import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`); 
const galleryImages = createGallleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryImages);

galleryContainer.addEventListener(`click`, onGalleryContainerClick);

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

function onGalleryContainerClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains(`gallery__image`)) {
        return;
    }
    console.log(evt.target.dataset.source);

    // const currentActiveImg = document.querySelector(`.gallery__item.is-active`);
    // if (currentActiveImg) {
    //   currentActiveImg.classList.remove(`is-active`);
    // }

    // const swatchEl = evt.target;
    // const parentImg = swatchEl.closest(`.gallery__item`);
    // parentImg.classList.add(`is-active`);

    const selectedImage = evt.target.getAttribute("data-source");
    const instance = basicLightbox.create(`
    <img src="${selectedImage}"  width="800" height="600">`);
    instance.show();
    
    const visible = basicLightbox.visible();
    console.log(visible);
}

console.log(galleryItems);
