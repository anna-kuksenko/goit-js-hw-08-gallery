import images from "./gallery-items.js";
const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const overlay = document.querySelector(".lightbox__overlay");
const imageModal = document.querySelector(".lightbox__image");
const closeLightbox = document.querySelector('button[data-action="close-lightbox"]');

function createGallery(images) {
  const createItems = images.map((image) => {
    const item = document.createElement("li");
    item.classList.add("gallery__item");

    const link = document.createElement("a");
    link.href = image.original;
    link.classList.add("gallery__link");
    item.append(link);

    const creatImage = document.createElement("img");
    creatImage.classList.add("gallery__image");
    creatImage.src = image.preview;
    creatImage.alt = image.description;
    creatImage.dataset.source = image.original;
    link.append(creatImage);

    return item;
  });
  return createItems;
}
gallery.append(...createGallery(images));

function onOpenModal() {
  event.preventDefault();
  lightbox.classList.add("is-open");
  imageModal.src = event.target.dataset.source;
}

function onCloseModal() {
  lightbox.classList.remove("is-open");
  imageModal.src = "";
}

gallery.addEventListener("click", onOpenModal);
overlay.addEventListener("click", onCloseModal);
closeLightbox.addEventListener("click", onCloseModal);



