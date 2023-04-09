import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const makeGallery = (gallery) => {
  const imagesToAdd = gallery
    .map(
      (img) => `<li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</li>`
    )
    .join("");

  return imagesToAdd;
};

galleryList.insertAdjacentHTML("beforeend", makeGallery(galleryItems));

let instance;

const onClickImg = (evt) => {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) return;

  instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);

  instance.show();
};

galleryList.addEventListener("click", onClickImg);

const onEcsPress = (evt) => {
  if (evt.code === "Escape") instance.close();
};

galleryList.addEventListener("keydown", onEcsPress);
