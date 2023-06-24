# Flatacuties

Today you'll be building an app for voting for the cutest animal! You will be
using a local API and building out the frontend for our app, Flatacuties.

## Demo

Use this gif as an example of how the app should work.

![Demo](assets/demo.gif)

> To view in VSCode, right click on the README.md file and select "Open Preview".

## Setup

Run this command to get the backend started:

```sh
json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/characters](http://localhost:3000/characters)

Then, open the `index.html` file on your browser to run the application.

Write your code in the `src/index.js` file. The base URL for your API will be
[http://localhost:3000](http://localhost:3000).

## Deliverables

// Get character bar and detailed info elements
const characterBar = document.getElementById('character-bar');
const detailedInfo = document.getElementById('detailed-info');

// Function to create a character element
function createCharacterElement(character) {
  const characterElement = document.createElement('span');
  characterElement.textContent = character.name;
  characterElement.addEventListener('click', () => displayCharacterDetails(character));
  return characterElement;
}

// Function to display character details
function displayCharacterDetails(character) {
  detailedInfo.innerHTML = `
    <p id="name">${character.name}</p>
    <img id="image" src="${character.image}" alt="${character.name}" />
    <h4>Total Votes: <span id="vote-count">${character.votes}</span></h4>
    <form id="votes-form">
      <input type="text" placeholder="Enter Votes" id="votes" name="votes" />
      <input type="submit" value="Add Votes" />
    </form>
    <button id="reset-btn">Reset Votes</button>
  `;

  // Add event listener to the votes form
  const votesForm = document.getElementById('votes-form');
  votesForm.addEventListener('submit', handleVotesFormSubmit);

  // Add event listener to the reset button
  const resetButton = document.getElementById('reset-btn');
  resetButton.addEventListener('click', resetVotes);
}

// Function to handle form submission for adding votes
function handleVotesFormSubmit(event) {
  event.preventDefault();
  const votesInput = document.getElementById('votes');
  const votes = parseInt(votesInput.value, 10);
  const voteCount = document.getElementById('vote-count');
  voteCount.textContent = parseInt(voteCount.textContent, 10) + votes;
  votesInput.value = '';
}

// Function to reset votes
function resetVotes() {
  const voteCount = document.getElementById('vote-count');
  voteCount.textContent = '0';
}

// Function to fetch characters and display them
function fetchAndDisplayCharacters() {
  fetch('/characters')
    .then(response => response.json())
    .then(characters => {
      characters.forEach(character => {
        const characterElement = createCharacterElement(character);
        characterBar.appendChild(characterElement);
      });
    });
}

// Add event listener to character form for bonus deliverable
const characterForm = document.getElementById('character-form');
if (characterForm) {
  characterForm.addEventListener('submit', handleCharacterFormSubmit);
}

// Function to handle form submission for adding a new character
function handleCharacterFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const imageInput = document.getElementById('image-url');
  const character = {
    name: nameInput.value,
    image: imageInput.value,
    votes: 0
  };

  // Add the new character to the character bar
  const characterElement = createCharacterElement(character);
  characterBar.appendChild(characterElement);

  // Display the new character's details
  displayCharacterDetails(character);

  // Reset the form fields
  nameInput.value = '';
  imageInput.value = '';
}

// Fetch and display characters on page load
fetchAndDisplayCharacters();


    ```txt
    PATCH /characters/:id

    Request Headers: {
      Content-Type: application/json
    }

    Request Body: {
      "votes": 100
    }
    ----

    Example Response: {
      "id": 1,
      "name": "Mr. Cute",
      "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
      "votes": 100
    }
    ```

2. When a user adds a new character to the page using the character form, in
   addition to having the character show up on the page, it should **also** be
   saved to the server. You will need to make a request that follows this
   structure:

    ```txt
    POST /characters

    Request Headers: {
      Content-Type: application/json
    }

    Request Body: {
      "name": "Character Name",
      "image": "https://example.com/my-image.gif",
      "votes": 0
    }

    ----

    Example Response: {
      "id": 6,
      "name": "Character Name",
      "image": "https://example.com/my-image.gif",
      "votes": 0
    }
    ```
# Flatacuties
