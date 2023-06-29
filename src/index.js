document.addEventListener('DOMContentLoaded', ()=> { 
  const characters = document.getElementById('character-bar');
const imageElement = document.getElementById('image');
let currentId = 0;

// Fetch characters data
const fetchCharactersData = async () => {
  try {
    const response = await fetch('http://localhost:3000/characters');
    const data = await response.json();
    data.forEach(character => {
      createCharacterElement(character);
    });
  } catch (error) {
    console.error('Error fetching characters data:', error);
  }
};

// Create character element
const createCharacterElement = (character) => {
  const span = document.createElement('span');
  span.innerText = character.name;
  span.addEventListener('click', () => {

    displayCharacterData(character);
  });
  characters.appendChild(span);
};

// Display character data
const displayCharacterData = (character) => {
  // displayCharacterData.addEventListener((event) => {
  //   event.preventDefault();
  
  const nameElement = document.getElementById('name');
  const voteCountElement = document.getElementById('vote-count');
  const voteForm = document.getElementById('votes-form');
  const voteResetBtn = document.getElementById('reset-btn');
  const removeCharacterBtn = document.getElementById('remove-btn');

  currentId = character.id;
  nameElement.innerText = character.name;
  imageElement.src = character.image;
  voteCountElement.innerText = character.votes;

  voteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const voteInput = event.target.children[0];
    const vote = parseInt(voteInput.value);
    const votes = character.votes + vote;

    updateCharacterVotes(currentId, votes)
      .then(data => {
        voteCountElement.innerText = data.votes;
        voteInput.value = '';
      })
      .catch(error => {
        console.error('Error updating character votes:', error);
      });
  });

  voteResetBtn.addEventListener('click', (event) => {
    event.preventDefault();
    updateCharacterVotes(currentId, 0)
      .then(data => {
        voteCountElement.innerText = data.votes;
      })
      .catch(error => {
        console.error('Error resetting character votes:', error);
      });
  });

  removeCharacterBtn.addEventListener('click', (event) => {
    event.preventDefault();
    removeCharacter(currentId)
      .then(() => {
        characters.removeChild(span);
        nameElement.innerText = '';
        imageElement.src = '';
        voteCountElement.innerText = '';
      })
      .catch(error => {
        console.error('Error removing character:', error);
      });
  });
// )}
};

// Update character votes
const updateCharacterVotes = async (characterId, votes) => {
  try {
    const response = await fetch(`http://localhost:3000/characters/${characterId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ votes: votes })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error updating character votes:', error);
  }
};

// Remove character
const removeCharacter = async (characterId) => {
  try {
    const response = await fetch(`http://localhost:3000/characters/${characterId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      return;
    } else {
      throw new Error('Failed to remove character');
    }
  } catch (error) {
    throw new Error('Error removing character:', error);
  }
};

// Add character form submission
const addCharacterForm = document.getElementById('character-form');
addCharacterForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const nameInput = document.querySelector('input#name');
  const imageInput = document.getElementById('image-url');
  const character = {
    name: nameInput.value,
    image: imageInput.value,
    votes: 0
  };

  try {
    const data = await createCharacter(character);
    createCharacterElement(data);
    nameInput.value = '';
    imageInput.value = '';
  } catch (error) {
    console.error('Error creating character:', error);
  }
});

// Create new character
const createCharacter = async (character) => {
  try {
    const response = await fetch('http://localhost:3000/characters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error creating character:', error);
  }
};

// Call the fetchCharactersData function to initiate the process
fetchCharactersData();
} )