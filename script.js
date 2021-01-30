const sithData = [
  {
    id: 1,
    name: 'Darth Sidious',
    homePlanet: 'Naboo',
    ships: 'Lambda Shuttle',
    image: './images/dark-sidious.png',
    url: 'https://starwars.fandom.com/wiki/Darth_Sidious',
  },
  {
    id: 2,
    name: 'Darth Maul',
    homePlanet: 'Dathomir',
    ships: 'Scimitar',
    image: './images/dark-maul.png',
    url: 'https://starwars.fandom.com/wiki/Maul',
  },
  {
    id: 3,
    name: 'Count Dooku',
    homePlanet: 'Serenno',
    ships: 'Solar Sailer',
    image: './images/dark-dooko.png',
    url: 'https://starwars.fandom.com/wiki/Dooku',
  },
  {
    id: 4,
    name: 'Darth Vadar',
    homePlanet: 'Tatooine',
    ships: 'Executor',
    image: './images/dark-vader.png',
    url: 'https://starwars.fandom.com/wiki/Anakin_Skywalker',
  },
];

const jediData = [
  {
    id: 5,
    name: 'Master Yoda',
    homePlanet: 'Dogobah',
    ships: 'Jedi Starfighter',
    image: './images/light-yoda.png',
    url: 'https://starwars.fandom.com/wiki/Yoda',
  },
  {
    id: 6,
    name: 'Qui-Gon Jinn',
    homePlanet: 'Coruscant',
    ships: 'Delta-7 light interceptor',
    image: './images/light-quigon.png',
    url: 'https://starwars.fandom.com/wiki/Qui-Gon_Jinn',
  },
  {
    id: 7,
    name: 'Obi-Won Kenobi',
    homePlanet: 'Stewjon',
    ships: 'Delta-7B',
    image: './images/light-obiwan.png',
    url: 'https://starwars.fandom.com/wiki/Obi-Wan_Kenobi',
  },
  {
    id: 8,
    name: 'Luke Skywalker',
    homePlanet: 'Tatooine',
    image: './images/light-luke.png',
    ships: 'X-wing starfighter',
    url: 'https://starwars.fandom.com/wiki/Luke_Skywalker',
  },
];

const DARK_SIDE = 'dark';
const LIGHT_SIDE = 'light';

const toggleSwitch = document.querySelectorAll('input[type="checkbox"]');
const nav = document.getElementById('nav');
const hero = document.getElementById('hero');
const force = document.getElementById('force');
const characters = document.getElementById('jedi');
const landingTitle = document.getElementById('landing-title');
const toggleText = document.querySelectorAll('#toggle-text');

// Sith or Jedi Images
function imageMode(color) {
  const isSith = color === DARK_SIDE ? true : false;
  if (isSith) {
    hero.style.backgroundImage = "url('./images/dark-banner.png')";
    document.body.style.backgroundColor = '#000000';
  } else {
    hero.style.backgroundImage = "url('./images/light-banner.png')";
    document.body.style.backgroundColor = '#f4f4f4';
  }
}

function toggleBtnText(isSith) {
  toggleText.forEach((text) =>
    isSith
      ? (text.textContent = 'Dark Side')
      : (text.textContent = 'Light Side')
  );
}

function textMode(color) {
  const isSith = color === DARK_SIDE ? true : false;
  document.getElementById('jedi-nav').textContent = isSith ? 'Sith' : 'Jedi';
  landingTitle.textContent = isSith
    ? 'Give in to your anger!'
    : 'May the force be with you';
  toggleBtnText(isSith);
  const darkQuote = `
    <p class="quote-title sith" id="quote-title">The Force</p>
      <h3 class="quote sith" id="quote">
        The dark side of the Force is a pathway to many abilities some consider to be
        <span class="unnatural">unnatural</span>
      </h3>
      <p class="author sith" id="author">- Chancellor Palpatine</p>
  `;

  const lightQuote = `
    <p class="quote-title" id="quote-title">The Force</p>
      <h3 class="quote" id="quote">
        The Force is what gives a Jedi his power. It's an energy field created
        by all living things. It surrounds us and penetrates us;
        <span class="binds-quote">it binds the galaxy together.</span>
      </h3>
      <p class="author" id="author">- Obi-Wan Kenobi</p>
  `;
  isSith ? force.classList.add('bg-sith') : force.classList.remove('bg-sith');
  force.innerHTML = isSith ? darkQuote : lightQuote;
}

function characterMode(color) {
  if (color === DARK_SIDE) {
    const sithList = sithData.map(
      (sith, i) =>
        `<div class="sith-card ${i % 2 === 0 ? 'row-reverse' : ''}">
          <div class="sith-info">
            <h2 class="sith-name">${sith.name}</h2>
            <a href=${sith.url} class="btn-sith" target="_blank">READ BIO</a>
            <div class="sith-info-group">
              <p>Home Planet</p>
              <p>${sith.homePlanet}</p>
            </div>
            <div class="sith-info-group">
              <p>Star Ship</p>
              <p>${sith.ships}</p>
            </div>
          </div>
          <div class="sith-img-container">
            <img src=${sith.image} alt=${sith.name} id=image${sith.id} />
          </div>
        </div>`
    );
    characters.innerHTML = sithList;
  } else {
    const jediList = jediData.map(
      (jedi, i) =>
        `<div class="jedi-card ${i % 2 !== 0 && 'row-reverse'}">
          <div class="jedi-info">
            <h2 class="jedi-name">${jedi.name}</h2>
            <a href=${jedi.url} class="btn-bio" target="_blank">READ BIO</a>
            <div class="jedi-info-group">
              <p class="jedi-title">Home Planet</p>
              <p>${jedi.homePlanet}</p>
            </div>
            <div class="jedi-info-group">
              <p>Star Ships</p>
              <p>${jedi.ships}</p>
            </div>
          </div>
          <div class="jedi-img-container">
            <img src=${jedi.image} alt=${jedi.name} id="image"${jedi.id} />
          </div>
        </div>`
    );
    characters.innerHTML = jediList;
  }
}

function toggleForce(color) {
  if (color === DARK_SIDE) {
    imageMode(DARK_SIDE);
    textMode(DARK_SIDE);
    characterMode(DARK_SIDE);
    toggleSwitch.forEach((toggler) => (toggler.checked = true));
  } else {
    imageMode(LIGHT_SIDE);
    textMode(LIGHT_SIDE);
    characterMode(LIGHT_SIDE);
    toggleSwitch.forEach((toggler) => (toggler.checked = false));
  }
}

function switchTheme(event) {
  if (event.target.checked) {
    toggleForce(DARK_SIDE);
  } else {
    toggleForce(LIGHT_SIDE);
  }
}

function onLoad() {
  const random = Math.ceil(Math.random() * 2);
  return random === 1 ? toggleForce(LIGHT_SIDE) : toggleForce(DARK_SIDE);
}

// Event Listener
toggleSwitch.forEach((toggler) => {
  toggler.addEventListener('change', switchTheme);
});

// start app
onLoad();
