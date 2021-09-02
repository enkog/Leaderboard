const addScore = async (data) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/J2wkBYJ3V6UdPezPYpkl/scores';

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
};
export default addScore;
