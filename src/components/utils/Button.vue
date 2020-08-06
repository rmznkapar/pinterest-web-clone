<template>
  <a class="button">
    <div
      class="button-link"
      :style="{ backgroundColor: bgColor }"
      :class="{ active: active }"
    >
      <div>
        <span>
          <slot></slot>
        </span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Button",
  props: {
    active: Boolean,
    bgColor: String
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.button-link {
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  border-radius: 24px;
  display: flex;
  height: 48px;
  cursor: pointer;
}
.button-link:hover {
  background: rgba(0, 0, 0, 0.06);
}
.active {
  color: white;
  background: black !important;
}
.active:hover {
  background: black !important;
}

.button-link div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
}
</style>
