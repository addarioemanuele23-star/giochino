document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('authenticated') === 'true') {
    window.location.href = '/game.html';
    return;
  }

  createFloatingHearts();

  const form = document.getElementById('loginForm');
  const errorMsg = document.getElementById('errorMsg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username === 'bimba' && password === '28022023') {
      sessionStorage.setItem('authenticated', 'true');
      document.querySelector('.login-card').style.animation = 'fadeOutUp 0.5s ease-out forwards';
      setTimeout(() => {
        window.location.href = '/game.html';
      }, 400);
    } else {
      errorMsg.textContent = 'Credenziali errate, riprova amore!';
      errorMsg.classList.remove('shake');
      void errorMsg.offsetWidth;
      errorMsg.classList.add('shake');
      document.querySelector('.login-card').classList.add('shake-card');
      setTimeout(() => {
        document.querySelector('.login-card').classList.remove('shake-card');
      }, 500);
    }
  });
});

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

const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
  @keyframes fadeOutUp {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-30px); }
  }
  .shake-card {
    animation: shake 0.5s ease-in-out !important;
  }
`;
document.head.appendChild(fadeOutStyle);
