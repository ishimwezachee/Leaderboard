import './style.css';

const list = document.querySelector('.container');
const refresh = document.querySelector('.refresh');


const nameField = document.querySelector('.name');
const scoreField = document.querySelector('.scores');
const submit = document.querySelector('.btn')

// const sendData = async ()=>{
//   const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',{
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({"name": "Football" })
//     });

//     const content = await data.json();
//     console.log(content);
// }

// sendData()

// send the user and scores 
const sendScores = async ()=>{
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a693dn4AamOZ5GxAOLyY/scores/',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"user":nameField.value, "score":scoreField.value})
    });
    const content = await data.json();
    console.log(content);
}

submit.addEventListener('click',(e)=>{
  e.preventDefault();
  sendScores();
  nameField.value="";
  scoreField.value="";
});

// Get Posted Data 
// get the users from the database; 
const getData = async(callback)=>{
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a693dn4AamOZ5GxAOLyY/scores/'
const data = await fetch(url);
const content = await data.json();
console.log(content.result)
callback(content.result)
}

const display = scores=>{
  scores.forEach((score) => {
  list.innerHTML += `<li>${score.user}:${score.score}</li>`;
  });
}


// refresh 

getData(display);


