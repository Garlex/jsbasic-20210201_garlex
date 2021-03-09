function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const carouselInner = carousel.querySelector('.carousel__inner');
  const carouselWidth = carouselInner.offsetWidth;
  const carouselWidthMax = carouselWidth * (carouselInner.querySelectorAll('.carousel__slide').length - 2);

  let position = 0;

  carousel.addEventListener('click', function(event) {
    let button = event.target.closest('.carousel__arrow');

    if (!button) {
      return false;
    }

    let direction = (button.classList.contains('carousel__arrow_left')) ? 'left' : 'right';

    if ((direction === 'right' && position <= -carouselWidthMax) ||
        (direction === 'left' && position >= -carouselWidth)) {
      button.style.display = 'none';
    } else {
      carousel.querySelectorAll('.carousel__arrow').forEach(elem => {
        elem.style.display = '';
      });
    }

    moveSlide(carouselInner, direction, carouselWidth);
  });

  function moveSlide(elem, direction, width) {
    position = (direction === 'left') ? position += width : position -= width;

    elem.style.transform = `translate(${position}px)`;
  }
}
