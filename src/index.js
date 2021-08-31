import './style.css';

const scoresArr = [
  { name: 'Nkiruka', score: 50 },
  { name: 'John', score: 150 },
  { name: 'Benjamin', score: 250 },
  { name: 'Daniel', score: 350 },
  { name: 'Seun', score: 60 },
  { name: 'James', score: 30 },
  { name: 'Arthur', score: 70 },
  { name: 'Daniella', score: 400 },
];

const renderList = (arr) => {
  const ul = document.querySelector('.scores-listing');

  arr.forEach((e) => {
    const li = document.createElement('li');
    li.className = 'list-item p-2';
    li.textContent = `${e.name}: ${e.score}`;
    ul.appendChild(li);
  });
};

renderList(scoresArr);