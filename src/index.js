// // // Your code here

// const characters = document.getElementById('character-bar');
// let span;
// let currentId = 0
// const imageElement = document.getElementById('image')

// // Fetch characters data
// const charactersData = () => { 
//   fetch('http://localhost:3000/characters')
//   .then(response => response.json())
//   .then(data => data.map(character => {
//     span = document.createElement('span')
//     characters.appendChild(span)
//     span.innerText = character.name
//     span.addEventListener('click', ()=>{
//       const nameElement = document.getElementById('name');
//       currentId = character.id
//       nameElement.innerText = character.name
//       imageElement.src = character.image;
//       const voteCountElement = document.getElementById('vote-count');
//       voteCountElement.innerText = character.votes
//       const forms = document.getElementById('votes-form')
//       forms.addEventListener('submit', (event)=> {
//         event.preventDefault()
//         const vote = parseInt(event.target.children[0].value)
//         const votes = character.votes + vote
//         fetch(`http://localhost:3000/characters/${currentId}`,
//         {
//           method: 'PATCH',
//           headers: {'content-type':'application/json'},
//           body: JSON.stringify({
//             votes: votes
//           })
//         })
//         .then(response => response.json)
//         .then(data => votes.innerText = data.votes)
  
//       })
//       const voteReset = document.getElementById('reset-btn')
//        voteReset.addEventListener('click', ()=>{
//         fetch(`http://localhost:3000/characters/${currentId}`, {
//           method: 'PATCH',
//           headers: {'content-type':'application/json'},
//           body: JSON.stringify({  
//             votes: 0
//            }) 
//         })
//         .then(response => response.json)
//         .then(data => votes.innerText = data.votes)
//        })
//                 const addCharacterForm = document.getElementById('character-form');
//           addCharacterForm.addEventListener('submit', event => {
//             event.preventDefault();
//             const nameInput = document.getElementById('name');
//             const imageInput = document.getElementById('image-url');
//             const character = {
//               name: nameInput.value,
//               image: imageInput.value,
//               votes: 0
//             };

//             fetch('http://localhost:3000/characters', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(character)
//             })
//               .then(response => response.json())
//               .then(data => console.log(data));
              
//           });
               

//             })
//     })  
//          )};




// // Call the characterData function to initiate the process
// charactersData();
