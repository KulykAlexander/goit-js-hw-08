// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
// const galleryList = document.createElement('ul');
// gallery.append(galleryList);

const galleryCards = galleryItems
  .map(
    card => `<li>
<a class="gallery__item" href="${card.original}" target="_self">
  <img
    class="gallery__image"
    src="${card.preview}"
    alt=${card.description}
  />
</a>
</li>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryCards);
const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
