import { galleryItems } from "./gallery-items.js";
// Change code below this line
const contaiter = document.querySelector(".gallery");
const markup = galleryItems.map(
  ({ preview, description, original }) =>
    `<li class="gallery__item"><a class="gallery__link"  href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li> `
);
contaiter.insertAdjacentHTML("beforeend", markup.join(" "));
contaiter.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const galleryID = evt.target.dataset.source;
  const descriptionID = evt.target.getAttribute("alt");
  const instance = basicLightbox.create(`
    <div class="modal"> 
    <img src="${galleryID}" alt="${descriptionID}">
    </div>
`);
  instance.show();
  contaiter.addEventListener("keydown", onKey);
  function onKey(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
