const player1 = {
    name: 'Subzero',
    hp: 45,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['lazer'],
    attach: function () {
        console.log(this.name + ' Fight...')
    }
};

const player2 = {
    name: 'Sonya',
    hp: 65,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['blaster'],
    attach: function () {
        console.log(this.name + ' Fight...')
    }
}

const arenas = document.querySelector('.arenas');


function createPlayer(className, obj) {
    const player = document.createElement('div');
    player.classList.add(className);

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');

    const character = document.createElement('div');
    character.classList.add('character');

    player.appendChild(progressbar);
    player.appendChild(character);

    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = obj.hp + '%';

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerText = obj.name;

    progressbar.appendChild(life);
    progressbar.appendChild(name);

    const img = document.createElement('img');
    img.src = obj.img;

    character.appendChild(img);

    arenas.appendChild(player)
}

createPlayer('player1', player1);
createPlayer('player2', player2);