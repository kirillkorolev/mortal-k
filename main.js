const player1 = {
    player: 1,
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['lazer'],
    attach: function () {
        console.log(this.name + ' Fight...')
    }
};

const player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['blaster'],
    attach: function () {
        console.log(this.name + ' Fight...')
    }
}

const DAMAGE = 20;

const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const createElement = (tag, className) => {
    const element = document.createElement(tag);

    if(className) {
        element.classList.add(className);
    }
    
    return element;
}

function createPlayer(obj) {
    const player = createElement('div', 'player' + obj.player);
    const progressbar = createElement('div', 'progressbar');    
    const character = createElement('div', 'character');
  
    const life = createElement('div', 'life');
    life.style.width = obj.hp + '%';

    const name = createElement('div', 'name');
    name.innerText = obj.name;

    player.appendChild(progressbar);
    player.appendChild(character);

    progressbar.appendChild(life);
    progressbar.appendChild(name);

    const img = createElement('img');
    img.src = obj.img;

    character.appendChild(img);

    return player;
}

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

const getResult = (name) => {
    const looseTitle = createElement('div', 'loseTitle');
    looseTitle.innerText = name + ' wins!';

    randomButton.disabled = true;

    return looseTitle;
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}
  

const changeHP = (obj) => {
    const playerLife = document.querySelector('.player' + obj.player + ' .life');

    if (obj.hp > 0) {
        obj.hp -= getRandomInt(DAMAGE);
        playerLife.style.width = obj.hp + '%';
    } else {
        obj.hp = 0;
        playerLife.style.width = 0;  
    }
}


randomButton.addEventListener('click', () => {
    changeHP(player1);
    changeHP(player2);
    
    if (player1.hp === 0) {
        arenas.appendChild(getResult(player2.name));
    } else if (player2.hp === 0) {
        arenas.appendChild(getResult(player1.name));
    }
})