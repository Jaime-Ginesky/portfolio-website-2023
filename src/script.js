const toggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementById("theme");
let darkMode = localStorage.getItem("dark-mode");


// Function to create Dark/Light Mode button
const enableDarkMode = () => {
    theme.classList.add("dark-mode-theme");
    toggleBtn.classList.remove("dark-mode-toggle");
    localStorage.setItem("dark-mode", "enabled");
    toggleBtn.innerHTML = `Light`;
}
const disableDarkMode = () => {
    theme.classList.remove("dark-mode-theme");
    toggleBtn.classList.add("dark-mode-toggle");
    localStorage.setItem("dark-mode", "disabled");
    toggleBtn.innerHTML = `Dark`;
}

if (darkMode === "enabled") {
    enableDarkMode();
}

toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

  // Function to create a card
  function createCard(title, description, link) {
    const card = document.createElement('div');
    card.classList.add('container','imgCard','contentC', 'content', 'card:hover','dark-mode-theme');
    // Add your desired card class here
    
    const contentElement = document.createElement('content');
    contentElement.classList.add('contentC::before','card:hover','content');

    const titleElement = document.createElement('h6');
    titleElement.textContent = title;
    // titleElement.classList.add('h6');
    titleElement.classList.add('h6','contentC','imgC');
    
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    descriptionElement.classList.add('p')
    // descriptionElement.classList.add('imgCard','content','contentC');

    const linkElement = document.createElement('a');
    linkElement.href = link;
    linkElement.classList.add('button', 'glow-button');
    linkElement.target = '_blank';
    linkElement.textContent = 'GO';

    contentElement.appendChild(descriptionElement);
    contentElement.appendChild(linkElement);

    
    card.appendChild(titleElement);
    card.appendChild(contentElement);

    return card;
  }

  // Populate the cards with specific information
  const weatherCard = createCard(
    'Weather App',
    'Find current weather in your current location or search any city. Search also includes weather conditions and forecast. Built with Javascript.',
    'https://goofy-goldstine-7355dd.netlify.app/'
  );
  document.getElementById('weather-card').appendChild(weatherCard);

  const robofriendsCard = createCard(
    'RoboFriends',
    'For each name entered into search, a new RoboFriend avatar is created and attached to that person. Built with React.',
    'https://upbeat-bohr-d8d654.netlify.app/'
  );
  document.getElementById('robofriends-card').appendChild(robofriendsCard);

  const dictionaryCard = createCard(
    'Dictionary App',
    'Find definitions, synonyms, pronunciation, with sentence examples, audio and images. Built with React.',
    'https://magical-sunshine-e3e2c8.netlify.app/'
  );
  document.getElementById('dictionary-card').appendChild(dictionaryCard);

