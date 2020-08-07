<template>
  <svg
    class="Hn_ gUZ pBj"
    :height="size"
    :width="size"
    viewBox="0 0 24 24"
    aria-label="Back button"
    role="img"
  >
    <path
      d="M8.415 4.586a2 2 0 1 1 2.828 2.828L8.657 10H21a2 2 0 0 1 0 4H8.657l2.586 2.586a2 2 0 1 1-2.828 2.828L1 12l7.415-7.414z"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "Back",
  props: {
    size: String
  }
};
</script>
