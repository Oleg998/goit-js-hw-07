import { galleryItems } from "./gallery-items.js";
// Change code below this line
const container = document.querySelector(".gallery");
let instance;
const markup = galleryItems.map(
  ({ preview, description, original }) =>
    `<li class="gallery__item"><a class="gallery__link"  href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li> `
);
container.insertAdjacentHTML("beforeend", markup.join(" "));
container.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const galleryID = evt.target.dataset.source;
  const descriptionID = evt.target.getAttribute("alt");
  instance = basicLightbox.create(
    `<img src="${galleryID}" alt="${descriptionID}"> `,
    {
      onShow: () => {
        container.addEventListener("keydown", onKey);
      },
      onClose: () => {
        container.removeEventListener("keydown", onKey);
      },
    }
  );
  instance.show();
}

function onKey(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}
