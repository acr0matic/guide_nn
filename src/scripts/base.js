const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isMobile = window.matchMedia('(max-width: 576px)').matches;
const isTablet = window.matchMedia('(max-width: 991px)').matches;

const scrollParams = {
  speed: 500,
  speedAsDuration: true,
  offset: 115,
}

const modalParams = {
  awaitCloseAnimation: true,
  disableFocus: true,
}

let currentModal = null;