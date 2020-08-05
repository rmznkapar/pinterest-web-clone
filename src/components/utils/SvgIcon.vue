<template>
  <div>
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
