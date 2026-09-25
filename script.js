const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('.nav');
const navLinks = document.getElementById('nav-links');

if (menuIcon && nav && navLinks) {
  menuIcon.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navLinks.classList.toggle('open', isOpen);
    menuIcon.classList.toggle('fa-bars', !isOpen);
    menuIcon.classList.toggle('fa-xmark', isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navLinks.classList.remove('open');
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    });
  });
}
