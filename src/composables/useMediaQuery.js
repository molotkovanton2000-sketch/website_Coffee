import { ref, onMounted, onUnmounted } from 'vue';

export function useMediaQuery(query) {
  const matches = ref(false);

  const update = () => {
    matches.value = window.matchMedia(query).matches;
  };

  let mediaQuery;

  onMounted(() => {
    mediaQuery = window.matchMedia(query);
    update();
    mediaQuery.addEventListener('change', update);
  });

  onUnmounted(() => {
    if (mediaQuery) {
      mediaQuery.removeEventListener('change', update);
    }
  });

  return { matches };
}