const DARK_SIDE = 'dark';
const LIGHT_SIDE = 'light';

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const hero = document.getElementById('hero');
const force = document.getElementById('force');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const landingTitle = document.getElementById('landing-title');
const quoteTitle = document.getElementById('quote-title');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const toggleText = document.getElementById('toggle-text');

// Sith or Jedi Images
function imageMode(color) {
  const isSith = color === DARK_SIDE ? true : false;
  if (isSith) {
    hero.style.backgroundImage = "url('./images/dark-banner.png')";
    image1.src = `./images/dark-sidious.png`;
    image2.src = `./images/dark-maul.png`;
    image3.src = `./images/dark-dooko.png`;
    image4.src = `./images/dark-vader.png`;
  } else {
    hero.style.backgroundImage = "url('./images/light-banner.png')";
    image1.src = `./images/light-yoda.png`;
    image2.src = `./images/light-quigon.png`;
    image3.src = `./images/light-obiwan.png`;
    image4.src = `./images/light-luke.png`;
  }
}

function textMode(color) {
  const isSith = color === DARK_SIDE ? true : false;
  document.getElementById('jedi-nav').textContent = isSith ? 'Sith' : 'Jedi';
  landingTitle.textContent = isSith
    ? 'Give in to your anger!'
    : 'May the force be with you';
  toggleText.textContent = isSith ? 'Dark Side' : 'Light Side';
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
  force.classList.add('bg-sith');
  force.innerHTML = isSith ? darkQuote : lightQuote;
}

function switchTheme(event) {
  if (event.target.checked) {
    imageMode(DARK_SIDE);
    textMode(DARK_SIDE);
  } else {
    imageMode(LIGHT_SIDE);
    textMode(LIGHT_SIDE);
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
