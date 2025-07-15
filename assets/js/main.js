const root = document.documentElement;
const toggleTheme = document.getElementById('toggle-theme');
const themeIcon = toggleTheme.querySelector('img');
const logo = document.getElementById('logo');
const toggleMenuIcon = document.querySelector('#toggle-menu img');
const toggleMenu = document.getElementById('toggle-menu');
const closeBtn = document.getElementById('closeDrawerBtn');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const form = document.querySelector(".contact__form");
const modal = document.getElementById("formModal");
const closeModal = document.getElementById("closeModal");
const closeModalBtn = document.querySelector("#closeModal img");


if (localStorage.getItem('theme') === 'dark') {
  root.classList.add('theme-dark');
  logo.src = 'assets/img/logo-dark.svg';
}

toggleTheme.addEventListener('click', () => {
  root.classList.toggle('theme-dark');
  const theme = root.classList.contains('theme-dark') ? 'dark' : 'light';
  themeIcon.src = `assets/img/icon-${theme}.svg`;
  logo.src = `assets/img/logo-${theme}.svg`;
  toggleMenuIcon.src = `assets/img/circle-chevron-left-${theme}.svg`;
  closeBtn.src = `assets/img/circle-x-${theme}.svg`;
  localStorage.setItem('theme', theme);
});


toggleMenu.addEventListener('click', () => {
  drawer.classList.add('open');
  overlay.style.visibility = 'visible';
  overlay.style.opacity = '1';
});

closeBtn.addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);

function closeDrawer() {
  drawer.classList.remove('open');
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden';
}

 form.addEventListener("submit", function (e) {
    e.preventDefault();
    modal.style.display = "block";
    form.reset();
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });