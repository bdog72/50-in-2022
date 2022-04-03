//
//

const jokeEl = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJoke = () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  jokeBtn.addEventListener('click', generateJoke);

  fetch('https://icanhazdadjoke.com/', config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
};

generateJoke();
