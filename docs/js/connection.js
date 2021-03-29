'use strict';

const links = document.querySelectorAll('.consulting');
const popup = document.querySelector('.connection');
const closeButton = popup.querySelector('.close-button');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.classList.add('connection-show');
  });
}

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.remove('connection-show');
});

window.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    if (popup.classList.contains('connection-show')) {
      evt.preventDefault();
      popup.classList.remove('connection-show');
    }
  }
});
