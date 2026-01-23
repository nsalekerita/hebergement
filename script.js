const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links a');

// Quand on clique sur le burger → ouvrir/fermer le menu
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Quand on clique sur un lien → fermer le menu (sur mobile)
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});