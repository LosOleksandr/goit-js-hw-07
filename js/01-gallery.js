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

const galleryEls = document.querySelectorAll(".gallery__image");

galleryEls.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    //!

    if (!event.target.classList.contains("gallery__image")) {
      return;
    }

    //!

    // if (event.target.nodeName !== "IMG") {
    //   return;
    // }

    const intance = basicLightbox.create(
      `<img src="${event.target.dataset.source}">`
    );

    intance.show();

    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") intance.close();
    });
  });
});
