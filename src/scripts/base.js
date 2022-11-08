const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isMobile = window.matchMedia('(max-width: 576px)').matches;

const scrollParams = {
  speed: 500,
  speedAsDuration: true,
  offset: 115,
}