// const characters = document.getElementById('character-bar');
// const imageElement = document.getElementById('image');
// let currentId = 0;

// // Fetch characters data
// const fetchCharactersData = () => {
//   fetch('http://localhost:3000/characters')
//     .then(response => response.json())
//     .then(data => {
//       data.forEach(character => {
//         const span = document.createElement('span');
//         span.innerText = character.name;
//         span.addEventListener('click', () => {
//           displayCharacterData(character);
//         });
//         characters.appendChild(span);
//       });
//     });
// };

// // Display character data
// const displayCharacterData = (character) => {
//   const nameElement = document.getElementById('name');
//   const voteCountElement = document.getElementById('vote-count');

//   currentId = character.id;
//   nameElement.innerText = character.name;
//   imageElement.src = character.image;
//   voteCountElement.innerText = character.votes;

//   const forms = document.getElementById('votes-form');
//   forms.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const vote = parseInt(event.target.children[0].value);
//     const votes = character.votes + vote;

//     updateCharacterVotes(currentId, votes)
//       .then(data => {
//         voteCountElement.innerText = data.votes;
//       });
//   });

//   const voteReset = document.getElementById('reset-btn');
//   voteReset.addEventListener('click', () => {
//     updateCharacterVotes(currentId, 0)
//       .then(data => {
//         voteCountElement.innerText = data.votes;
//       });
//   });
// };

// // Update character votes
// const updateCharacterVotes = (characterId, votes) => {
//   return fetch(`http://localhost:3000/characters/${characterId}`, {
//     method: 'PATCH',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify({ votes: votes })
//   })
//     .then(response => response.json());
// };

// // Add character form submission
// const addCharacterForm = document.getElementById('character-form');
// addCharacterForm.addEventListener('submit', event => {
//   event.preventDefault();
//   const nameInput = document.getElementById('name');
//   const imageInput = document.getElementById('image-url');
//   const character = {
//     name: nameInput.value,
//     image: imageInput.value,
//     votes: 0
//   };

//   createCharacter(character)
//     .then(data => {
//       console.log(data);
//     });
// });

// // Create new character
// const createCharacter = (character) => {
//   return fetch('http://localhost:3000/characters', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(character)
//   })
//     .then(response => response.json());
// };

// // Call the fetchCharactersData function to initiate the process
// fetchCharactersData();
