import './style.css';
import renderList from './renderList.js';
import addScore from './addScore.js';

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const data = { user: `${name}`, score: parseInt(`${score}`, 10) };
  addScore(data);
});