import "./assets/style/style.scss";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');

// ===== Бургер-меню =====
const burgerBtn = document.querySelector('#burgerBtn');
const mobileNav = document.querySelector('#mobileMenu');
const closeBtn = document.querySelector('#closeMenu');
const menuLinks = document.querySelectorAll('.header__mobile-link');

function openMenu() {
  burgerBtn?.classList.add('opened');
  mobileNav?.classList.add('opened');
  document.querySelector('html')?.classList.add('hidden');
}

function closeMenu() {
  burgerBtn?.classList.remove('opened');
  mobileNav?.classList.remove('opened');
  document.querySelector('html')?.classList.remove('hidden');
}

if (burgerBtn) burgerBtn.addEventListener('click', openMenu);
if (closeBtn) closeBtn.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Закрытие по клику на фон (не на панель)
mobileNav?.addEventListener('click', (e) => {
  if (e.target === mobileNav) {
    closeMenu();
  }
});