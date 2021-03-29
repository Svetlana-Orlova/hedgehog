  'use strict';

  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');


  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  const slider = document.querySelector('.slider');
  const sliderSlides = slider.querySelector('.slider-slides');
  const listElems = slider.querySelectorAll('li');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');

  let count = 1;
  let position = 0;
  let width = 0;

  if (window.innerWidth < 1920) {
    width = 585;
  } else {
    width = 598;
  }

  prev.addEventListener ('click', () => {
    position += width;
    position = Math.min(position, 0);
    sliderSlides.style.marginLeft = position + 'px';
  });

  next.addEventListener ('click', () => {
    position -= width;
    position = Math.max(position, -width * (listElems.length-count));
    sliderSlides.style.marginLeft = position + 'px';
  });
