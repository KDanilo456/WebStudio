document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll("[data-modal-open]");
  const closeButtons = document.querySelectorAll("[data-modal-close]");
  const modals = document.querySelectorAll("[data-modal]");

  openButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => toggleModal(modals[i]));
  });

  closeButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => toggleModal(modals[i]));
  });

  function toggleModal(modal) {
    if (!modal) return;

    const isOpening = modal.classList.contains("is-hidden");
    modal.classList.toggle("is-hidden");

    if (isOpening) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = scrollbarWidth + "px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }
});



const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuOverlay = document.getElementById('menuOverlay');
const mainPage = document.getElementById('mainPage');

function openMenu() {
    hamburgerBtn.classList.add('active');
    menuOverlay.classList.add('active');
    mainPage.style.filter = 'blur(2px)';

    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    hamburgerBtn.classList.remove('active');
    menuOverlay.classList.remove('active');
    mainPage.style.filter = 'none';

    document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
    if (menuOverlay.classList.contains('active') && 
        !e.target.closest('.menu-overlay') && 
        !e.target.closest('.hamburger-btn')) {
        closeMenu();
    }
});
