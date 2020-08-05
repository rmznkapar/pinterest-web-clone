<template>
  <a class="button">
    <div class="button-link" :class="{ active: active }">
      <div>
        <span>
          {{ text }}
        </span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    active: Boolean
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.button-link {
  color: #333;
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
  background: black;
}
.active:hover {
  background: black;
}

.button-link div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
}
</style>
