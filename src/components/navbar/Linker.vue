<template>
  <div class="linker container">
    <div class="logo">
      <img width="24px" height="24px" src="@/assets/logo.png" alt="" />
    </div>
    <router-link v-slot="{ href, route, navigate, isExactActive }" to="/"
      ><Button
        :active="isExactActive"
        text="Home Page"
        :href="href"
        @click="navigate"
      ></Button
    ></router-link>
    <router-link
      v-slot="{ href, route, navigate, isExactActive }"
      to="/following"
    >
      <Button
        :active="isExactActive"
        text="Following"
        :href="href"
        @click="navigate"
      ></Button>
    </router-link>
  </div>
</template>

<script>
import Button from "@/components/utils/Button.vue";

export default {
  name: "Linker",
  components: {
    Button
  }
};
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.logo:hover {
  background: rgba(0, 0, 0, 0.06);
}
</style>
