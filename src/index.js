import './style.css';
import sendUser from './api/scores.js';
import getData from './api/data.js';

const list = document.querySelector('.container');
const refresh = document.querySelector('.refresh');

const name = document.querySelector('.name');
const score = document.querySelector('.scores');
const submit = document.querySelector('.btn');

// Display Data
const display = (scores) => {
  scores.forEach((score) => {
    list.innerHTML += `<li class="list-item">${score.user}:${score.score}</li>`;
  });
};

// submit Data

submit.addEventListener('click', (e) => {
  e.preventDefault();
  sendUser(name.value, score.value);
  name.value = '';
  score.value = '';
});

// refresh
refresh.addEventListener('click', () => {
  list.innerHTML = '';
  getData(display);
});

getData(display);
