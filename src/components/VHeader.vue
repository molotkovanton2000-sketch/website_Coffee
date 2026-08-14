<template>
  <header class="header">
    <div class="header__container">
      <!-- Бургер-кнопка -->
      <button class="header__burger-menu" id="burgerBtn">
        <img src="@/assets/img/List.png" alt="Menu" class="icon_menu-open" />
        <img src="@/assets/img/menu-close.svg" alt="Close" class="icon_menu-close" />
      </button>

      <a href="#" class="header__logo">
        <img src="@/assets/img/Main_logo.png" alt="logo" />
      </a>

      <!-- Десктопная навигация -->
      <nav class="header__links">
        <ul class="header__list">
          <li v-for="link in navLinks" :key="link.name">
            <a href="#" class="header__link" :class="{ 'header__link--home': link.active }">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="header__icons">
        <a class="header__icon" href="#"><img src="@/assets/img/Icon-shop.png" alt="Shop" /></a>
        <a class="header__icon" href="#"><img src="@/assets/img/Icon-account.png" alt="Account" /></a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { navLinks } from '@/data/navigation';
</script>