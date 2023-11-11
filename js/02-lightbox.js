import { galleryItems } from './gallery-items.js';
// Change code below this line
const contaiter = document.querySelector(".gallery");
const markup = galleryItems.map(
  ({ preview, description, original }) =>
    `<li class="gallery__item"><a class="gallery__link"  href="${original}"><img class="gallery__image" src="${preview}"  alt="${description}"></a></li> `
);
contaiter.insertAdjacentHTML("beforeend", markup.join(" "));


    const gallery= new SimpleLightbox(".gallery__link" , {
        captionsData: "alt",
        captionPosition:  "bottom",
        captionDelay : 250
    });


