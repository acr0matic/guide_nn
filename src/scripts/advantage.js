const advantage = document.getElementById('advantage');

if (advantage) {
  const number = advantage.querySelectorAll('.advantage__digit');

  number.forEach(item => {
    const value = item.dataset.value;

    const options = {
      duration: 3,
      separator: ' ',
      enableScrollSpy: true,
      scrollSpyOnce: true,
    };

    new countUp.CountUp(item, value, options);
  });
}