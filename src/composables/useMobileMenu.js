import { ref, watch } from 'vue';

export function useMobileMenu() {
  const isOpen = ref(false);

  function open() {
    isOpen.value = true;
    document.querySelector('html')?.classList.add('hidden');
  }

  function close() {
    isOpen.value = false;
    document.querySelector('html')?.classList.remove('hidden');
  }

  function toggle() {
    isOpen.value ? close() : open();
  }

  return { isOpen, open, close, toggle };
}