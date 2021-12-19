const text = document.getElementById('rgb-color');
const ballList = document.getElementById('ballList');
const rings = [];
let index;
const resetGame = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const score = document.getElementById('score');
let placar = 0;
let acertos = 0
const gameOver = new Audio("sounds/Error-sound-effect.mp3")
const point = new Audio('sounds/Lost-life-sound-effect.mp3')
const mario = new Audio('sounds/Mario-coin-sound.mp3')

// gerar cor aleatoria
function generateRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}
/* text.innerHTML = generateRGB(); */
window.addEventListener('load', generateRGB);

// gerar circulos com cores aleatórias
let ring;
function generateRings() {
  for (let i = 0; i < 6; i += 1) {
    ring = document.createElement('LI');
    ring.classList = 'ball';
    ring.style.backgroundColor = generateRGB();

    ballList.appendChild(ring);
    rings.push(ring);
  }
}
window.addEventListener('load', generateRings);

// localizar cor e comparar
function descobrirCor(element) {
  const alvo = element.target;
  const resposta = text.innerHTML;
  /* const msgGameOver = window.alert('GAME OVER'); */
  if (alvo.style.backgroundColor === resposta) {
    answer.innerText = 'Acertou!';
    mario.play();
    placar += 3;
    acertos += 1;
    score.innerText = placar;
    setTimeout(startGame, 1000);
  } else if (alvo.style.backgroundColor !== resposta) {
    answer.innerText = 'Errou! Tente novamente!';
    gameOver.play();
    placar -= 1;
    score.innerText = placar;
    setTimeout(startGame, 1000);
    if(placar < 0){
      point.play();
      score.innerText = 'GAME OVER';
      let l = document.createElement('LI');
      l.innerText = `Jogador: ${nick.value}-----------> ${acertos} acertos`
      lista.appendChild(l)
      placar = 0;
      /* setTimeout(msgGameOver, 1000) */
    }
  } else {
    answer.innerText = 'Escolha uma cor';
  }
}
ballList.addEventListener('click', descobrirCor);

// iniciar e resetar
function startGame() {
  index = Math.floor(Math.random() * 6);
  answer.innerText = 'Escolha uma cor';
  for (let i = 0; i < rings.length; i += 1) {
    rings[i].style.backgroundColor = generateRGB();
    /* rings[index].id = 'element'; */
    text.innerHTML = rings[index].style.backgroundColor;
    if (rings[index].id === 'element') {
      rings[i].id = '';
    }
  }
}
resetGame.addEventListener('click', startGame);
window.addEventListener('load', startGame);

//------------

const btnRules = document.getElementById('btn-rules');
const btnScore = document.getElementById('btn-score');
const main = document.getElementById('main');
const rules = document.getElementById('rules');
const scoreBoard = document.getElementById('scoreBoard')
const btnGame = document.getElementById('btn-game');
let player = document.getElementById('player')
let nick = document.getElementById('nick');
let lista = document.getElementById('lista');

btnRules.addEventListener('click', () => {
  scoreBoard.style.display = 'none';
  main.style.display = 'none';
  rules.style.display = 'block';
})

btnScore.addEventListener('click', () => {
  rules.style.display = 'none';
  main.style.display = 'none';
  scoreBoard.style.display = 'block';
})

btnGame.addEventListener('click', () => {
  rules.style.display = 'none';
  main.style.display = 'block';
  scoreBoard.style.display = 'none';
})

/* let jogador = prompt('Qual o seu nome?'); */
nick.addEventListener('keyup', () => {
  player.innerText = `Seja bem vindo(a): ${nick.value}`;
  
})
