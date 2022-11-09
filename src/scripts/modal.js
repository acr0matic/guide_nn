const tour = document.getElementById('tour');
if (tour) {
  const modal = document.getElementById('modal-tour');
  const items = tour.querySelectorAll('.tour__item');


  if (modal) {
    const close = modal.querySelectorAll('.modal__close, .modal__swipe');
    const title = modal.querySelector('.modal__title');

    items.forEach(item => {
      item.addEventListener('click', () => {
        if (isTablet) {
          document.body.classList.toggle('disable-scroll');
        }

        title.innerHTML = item.querySelector('.tour__title').innerHTML;
        gallery.slideTo(0);

        MicroModal.show(modal.id, modalParams);
      });
    });
  }
}