//
//

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
  return container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
  return container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
  return container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
  return container.classList.remove('hover-right');
});
