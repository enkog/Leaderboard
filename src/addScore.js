async function addScore(data) {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AxewAR6mMlFD5bRkqxdb/scores';

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
}
