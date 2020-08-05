<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    width: String,
    height: String
  }
};
</script>
