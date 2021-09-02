async function renderList() {
  const ul = document.querySelector('.scores-listing');
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AxewAR6mMlFD5bRkqxdb/scores';
  const response = await fetch(url);
  const scores = await response.json();

  scores.result.forEach((e) => {
    const li = document.createElement('li');
    li.className = 'list-item p-2';
    li.textContent = `${e.user}: ${e.score}`;
    ul.appendChild(li);
  });
}
export default renderList;
