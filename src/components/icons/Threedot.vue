<template>
  <svg
    class="gUZ pBj"
    :height="size"
    :width="size"
    viewBox="0 0 24 24"
    aria-label="More options"
    role="img"
  >
    <path
      d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "Threedot",
  props: {
    size: String
  }
};
</script>
