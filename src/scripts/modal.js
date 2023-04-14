const tour = document.getElementById('tour');
if (tour) {
  const modal = document.getElementById('modal-tour');
  const items = tour.querySelectorAll('.tour__item');

  if (modal) {
    const close = modal.querySelector('.modal__swipe');
    const form = modal.querySelector('form');
    const title = modal.querySelector('.modal__title');
    const content = modal.querySelector('.modal__text');
    const images = modal.querySelector('.gallery__slider .swiper-wrapper');
    const additional = modal.querySelectorAll('.modal__additional ');

    const modalGallery = modal.querySelector('.modal__gallery');
    const button = modal.querySelector(".modal__action .button");

    function ShowForm() {
      button.parentNode.classList.add('hidden');
      title.parentNode.classList.add('hidden');
      modalGallery.classList.remove('modal__gallery--offset');
    }

    function HideForm() {
      button.parentNode.classList.remove('hidden');
      title.parentNode.classList.remove('hidden');
      modalGallery.classList.add('modal__gallery--offset');
    }

    button.addEventListener('click', () => {
      ShowForm();
      modalSlider.slideTo(1);
    });

    close.addEventListener('click', () => {
      MicroModal.close('modal-tour', modalParams)
      document.body.classList.remove('disable-scroll');
    });

    items.forEach(item => {
      item.addEventListener('click', () => {
        HideForm();
        modalSlider.slideTo(0);

        if (isTablet) document.body.classList.add('disable-scroll');

        title.innerHTML = item.querySelector('.tour__title').innerHTML.replace(/\n/g, "");
        content.innerHTML = item.querySelector('.tour__content .content').innerHTML;
        images.innerHTML = item.querySelector('.tour__content .gallery').innerHTML;
        additional.forEach(block => {
          block.innerHTML = item.querySelector('.tour__content .info').innerHTML;
        });

        lazyLoadInstance.update();
        gallery.slideTo(0);

        form.dataset.subject = title.innerHTML;
        currentModal = modal.id;
        MicroModal.show(currentModal, modalParams);
      });
    });
  }
}