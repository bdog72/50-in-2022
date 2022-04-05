//
//

const toggleBtns = document.querySelectorAll('.faq-toggle');

console.log(toggleBtns);

toggleBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    button.parentNode.classList.toggle('active');
  });
});
