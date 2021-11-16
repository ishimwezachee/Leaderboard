import './style.css';
import scores from './scores.js';

const list = document.querySelector('.container');

scores.forEach((score) => {
  list.innerHTML += `<li>${score.name}:${score.scores}</li>`;
});