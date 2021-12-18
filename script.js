const text = document.getElementById('rgb-color');
const ballList = document.getElementById('ballList');
const rings = [];
let index;
const resetGame = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const score = document.getElementById('score');
let placar = 0;

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
  if (alvo.style.backgroundColor === resposta) {
    answer.innerText = 'Acertou!';
    placar += 3;
    score.innerText = placar;
  } else if (alvo.style.backgroundColor !== resposta) {
    answer.innerText = 'Errou! Tente novamente!';
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
