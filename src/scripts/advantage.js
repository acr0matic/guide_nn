const advantage = document.getElementById('advantage');

if (advantage) {
  const number = advantage.querySelectorAll('.advantage__digit');

  const ScrollHandle = () => Scroll(advantage, number, this);
  let isDone = false;

  window.addEventListener('DOMContentLoaded', ScrollHandle);
  window.addEventListener('scroll', ScrollHandle);

  const Scroll = (wrapper, number, handler) => {
    const isReach = (window.innerHeight + window.scrollY) >= wrapper.offsetTop;
    if (isReach && !isDone) {
      number.forEach(item => {
        const value = item.dataset.value;

        const options = {
          duration: 3,
          separator: ' ',
          enableScrollSpy: true,
        };

        const count = new countUp.CountUp(item, value, options);
        count.start();
      });

      window.removeEventListener('scroll', handler);
      isDone = true;
    }
  }
}