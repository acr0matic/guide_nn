const header = document.getElementById('header');
const hero = document.getElementById('hero');

if (header) {
  let isReach = false;

  const heroHeight = hero.offsetHeight;
  const logo = header.querySelector('.header__logo');

  const mobile = header.querySelector('.mobile-menu');
  const mobileNav = mobile.querySelectorAll('.nav__link');
  const burger = header.querySelector('.header__burger');

  burger.addEventListener('click', () => Menu());
  mobileNav.forEach(link => link.addEventListener('click', () => Menu()));

  window.addEventListener('scroll', () => {
    isReach = heroHeight <= (window.scrollY + 500);

    if (isReach) logo.classList.add('header__logo--visible');
    else logo.classList.remove('header__logo--visible');
  });

  function Menu() {
    mobile.classList.toggle('mobile-menu--open');
    burger.firstElementChild.classList.toggle('is-active')
    document.body.classList.toggle('disable-scroll');

    if (!logo.classList.contains('header__logo--visible') || !isReach) {
      logo.classList.toggle('header__logo--visible');
    }
  }
}


