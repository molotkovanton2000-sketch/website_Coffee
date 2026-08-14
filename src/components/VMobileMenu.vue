<template>
  <nav class="header__links--mobile" id="mobileMenu">
    <button class="header__close-menu" id="closeMenu">
      <img src="@/assets/img/menu-close.svg" alt="Close menu" />
    </button>
    <ul class="header__mobile-list">
      <li v-for="link in navLinks" :key="link.name">
        <a href="#" class="header__mobile-link" :class="{ 'header__mobile-link--active': link.active }">
          {{ link.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { navLinks } from '@/data/navigation';
</script>