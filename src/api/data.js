const getData = async (callback) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VrOSS4macDzbJhG8RSlo/scores/';
  const data = await fetch(url);
  const content = await data.json();
  callback(content.result);
};

export default getData;