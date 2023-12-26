const toggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementById("theme");
let darkMode = localStorage.getItem("dark-mode");


// Function to create Dark/Light Mode button
const enableDarkMode = () => {
    theme.classList.add("dark-mode-theme");
    toggleBtn.classList.remove("dark-mode-toggle");
    localStorage.setItem("dark-mode", "enabled");
    toggleBtn.innerHTML = `LIGHT THEME`;
}
const disableDarkMode = () => {
    theme.classList.remove("dark-mode-theme");
    toggleBtn.classList.add("dark-mode-toggle");
    localStorage.setItem("dark-mode", "disabled");
    toggleBtn.innerHTML = `DARK THEME`;
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

  // Function to create a card for project menu
  function createCard(title, description, link) {
    const card = document.createElement('article');
    card.classList.add('container','card','dark-mode-theme');
    // Add your desired card class here
    
    const contentElement = document.createElement('contentC');
    contentElement.classList.add('contentC::before','card:hover','content');

    const titleElement = document.createElement('contentC');
    titleElement.textContent = title;
    // titleElement.classList.add('h6');
    titleElement.classList.add('contentC','imgC','p');
    
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    descriptionElement.classList.add('p');
    // descriptionElement.classList.add('imgCard','content','contentC');

    const linkElement = document.createElement('a');
    linkElement.href = link;
    linkElement.classList.add('button', 'glow-button');
    linkElement.target = '_blank';
    linkElement.textContent = 'GO';

    contentElement.appendChild(descriptionElement);
    descriptionElement.appendChild(linkElement);

    titleElement.appendChild(contentElement);
    // titleElement.appendChild(linkElement);
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

  // const robofriendsCard = createCard(
  //   'RoboFriends',
  //   'For each name entered into search, a new RoboFriend avatar is created and attached to that person. Built with React.',
  //   'https://upbeat-bohr-d8d654.netlify.app/'
  // );
  // document.getElementById('robofriends-card').appendChild(robofriendsCard);

  const dictionaryCard = createCard(
    'Dictionary App',
    'Find definitions, synonyms, pronunciation, with sentence examples, audio and images. Built with React.',
    'https://magical-sunshine-e3e2c8.netlify.app/'
  );
  document.getElementById('dictionary-card').appendChild(dictionaryCard);

  const ecommCard = createCard(
    'E-Commerce',
    'Functional e-commerce website with signup/log-in page for customer purchasing accounts. Built with React.',
    'https://nositeyet.netlify.app/'
  ); 
  document.getElementById('e-comm-card').appendChild(ecommCard);


   // Lightbox
 lightbox.option({
  resizeDuration: 300,
  wrapAround: true,
  disableScrolling: true,
  albumLabel: "%1 / %2",
});
