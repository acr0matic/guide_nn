const tour = document.getElementById('tour');
if (tour) {
  const modal = document.getElementById('modal-tour');
  const items = tour.querySelectorAll('.tour__item');


  if (modal) {
    const close = modal.querySelectorAll('.modal__close, .modal__swipe');
    const title = modal.querySelector('.modal__title');
    const content = modal.querySelector('.modal__text');
    const images = modal.querySelector('.gallery__slider .swiper-wrapper');
    const additional = modal.querySelector('.modal__additional ');

    items.forEach(item => {
      item.addEventListener('click', () => {
        if (isTablet) {
          document.body.classList.toggle('disable-scroll');
        }

        title.innerHTML = item.querySelector('.tour__title').innerHTML;
        content.innerHTML = item.querySelector('.tour__content .content').innerHTML;
        images.innerHTML = item.querySelector('.tour__content .gallery').innerHTML;
        additional.innerHTML = item.querySelector('.tour__content .info').innerHTML;
        lazyLoadInstance.update();

        gallery.slideTo(0);

        MicroModal.show(modal.id, modalParams);
      });
    });
  }
}