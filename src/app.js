const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  // "Popcorn",
  // "Gemwoman",
  // "Bolt",
  // "Antwoman",
  // "Mask",
  // "Tiger",
  // "Captain",
  // "Catwoman",
  // "Fish",
  // "Hulk",
  // "Ninja",
  // "Black Cat",
  // "Volverine",
  // "Thor",
  // "Slayer",
  // "Vader",
  // "Slingo"
];

// Player Class
class Player {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.image = `./images/super-${id + 1}.png`;
    this.strength = this.getRandomStrength();
    this.type = type;
  }

  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  view = () => {
    let player = document.createElement('div');
    player.classList.add('player');
    player.setAttribute('data-id', this.id);
    if (this.selected) player.classList.add('selected');
    let image = document.createElement('img');
    image.setAttribute('src', this.image);
    let name = document.createElement('div');
    name.textContent = this.name;
    let strength = document.createElement('div');
    strength.textContent = this.strength;
    strength.className = 'strength';
    player.append(image, name, strength);

    return player;
  };
}

// Superwar Class
class Superwar {
  constructor(players) {
    this.players = players.map((player, i) => {
      let type = i % 2 === 0 ? 'hero' : 'villain';
      return new Player(i, player, type);
    });
  }

  viewPlayers = () => {
    let team = document.getElementById('heroes');
    team.innerHTML = '';
    let fragment = this.buildPlayers('hero');
    team.append(fragment);

    team = document.getElementById('villains');
    team.innerHTML = '';
    fragment = this.buildPlayers('villain');
    team.append(fragment);
  };

  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type === type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };
}

// Uncomment this part -- only after you complete progression 3
window.onload = () => {
  const superwar = new Superwar(PLAYERS);
  superwar.viewPlayers();
};
