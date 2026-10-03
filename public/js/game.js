document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('authenticated') !== 'true') {
    window.location.href = '/';
    return;
  }

  createFloatingHearts();
  startNewGame();

  document.getElementById('closeMenu').addEventListener('click', closeMenu);
  document.getElementById('menuOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeMenu();
  });
  document.getElementById('btnNewGame').addEventListener('click', startNewGame);
});

let currentFilms = [];
let chosenCount = 0;

function startNewGame() {
  currentFilms = getRandomFilms(3);
  chosenCount = 0;

  document.getElementById('newGameContainer').style.display = 'none';

  const container = document.getElementById('envelopesContainer');
  container.innerHTML = '';

  currentFilms.forEach((film, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'envelope-wrapper';
    wrapper.dataset.index = index;

    wrapper.innerHTML = `
      <div class="envelope">
        <div class="envelope-flap"></div>
        <div class="envelope-body"></div>
        <div class="envelope-heart">💌</div>
      </div>
      <div class="envelope-label">
        <span class="envelope-number">${index + 1}</span>
        Busta ${index + 1}
      </div>
    `;

    wrapper.addEventListener('click', () => openEnvelope(wrapper, index));
    container.appendChild(wrapper);
  });
}

function openEnvelope(wrapper, index) {
  if (wrapper.classList.contains('opening') || wrapper.classList.contains('disabled')) return;

  wrapper.classList.add('opening');
  chosenCount++;

  document.querySelectorAll('.envelope-wrapper').forEach((w, i) => {
    if (i !== index) w.classList.add('disabled');
  });

  launchConfetti();

  setTimeout(() => {
    showMenu(currentFilms[index]);
  }, 700);
}

function showMenu(film) {
  document.getElementById('menuGenre').textContent = film.genere;
  document.getElementById('menuFilmTitle').textContent = film.titolo;

  const antipasto = document.getElementById('courseAntipasto');
  antipasto.querySelector('.course-name').textContent = film.menu.antipasto.nome;
  antipasto.querySelector('.course-desc').textContent = film.menu.antipasto.desc;

  const primo = document.getElementById('coursePrimo');
  primo.querySelector('.course-name').textContent = film.menu.primo.nome;
  primo.querySelector('.course-desc').textContent = film.menu.primo.desc;

  const dolce = document.getElementById('courseDolce');
  dolce.querySelector('.course-name').textContent = film.menu.dolce.nome;
  dolce.querySelector('.course-desc').textContent = film.menu.dolce.desc;

  document.getElementById('menuOverlay').classList.add('active');
}

function closeMenu() {
  document.getElementById('menuOverlay').classList.remove('active');
  document.getElementById('newGameContainer').style.display = 'block';
}

function launchConfetti() {
  const colors = ['#ff6b8a', '#d63662', '#e63946', '#d4a574', '#f0d9b5', '#ff85a2', '#ffc1cc'];
  const shapes = ['●', '♥', '★', '◆', '♦'];

  for (let i = 0; i < 50; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    piece.style.left = (20 + Math.random() * 60) + '%';
    piece.style.top = '-10px';
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.fontSize = (10 + Math.random() * 16) + 'px';
    piece.style.animationDuration = (1.5 + Math.random() * 2) + 's';
    piece.style.animationDelay = (Math.random() * 0.5) + 's';
    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 4000);
  }
}

function createFloatingHearts() {
  const container = document.getElementById('floatingHearts');
  const hearts = ['♥', '♡', '❤', '💕', '💗'];

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (12 + Math.random() * 24) + 'px';
    heart.style.animationDuration = (8 + Math.random() * 12) + 's';
    heart.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(heart);
  }
}
