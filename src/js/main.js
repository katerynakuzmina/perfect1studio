window.addEventListener('DOMContentLoaded', () => {
    //slider
    const prev = document.querySelector('.sliders__arrows_prev'),
          next = document.querySelector('.sliders__arrows_next'),          
          slides = document.querySelectorAll('.slide'),
          slidesField = document.querySelector('.sliders__inner'),
          wrapper = document.querySelector('.sliders__wrapper'),
          width = window.getComputedStyle(wrapper).width;

    let offset = 0;

    const slideWidth = +width.slice(0, width.length - 2) / 3; // Ширина одного слайда
    const maxOffset = slideWidth * (slides.length - 3); // Максимальное смещение

    prev.style.display = 'none';

    next.addEventListener('click', () => {
      offset += slideWidth;
      prev.style.display = 'block';
      slidesField.style.transform = `translateX(-${offset}px)`;

      if (offset >= maxOffset) {
        next.style.display = 'none';
      }
    });

    prev.addEventListener('click', () => {
      offset -= slideWidth;
      next.style.display = 'block';
      slidesField.style.transform = `translateX(-${offset}px)`;

      if (offset <= 0) {
        prev.style.display = 'none';
      }
    });

    /* prev.style.display = 'none';

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
            prev.style.display = 'none';
        } else {
            offset += +width.slice(0, width.length - 2);
            prev.style.display = 'block';
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    }) */
});