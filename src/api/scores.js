const sendUser = async (user, score) => {
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VrOSS4macDzbJhG8RSlo/scores/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const content = await data.json();
  console.log(content);
};

export default sendUser;