<template>
  <div class="linker container">
    <router-link v-slot="{ href, navigate }" to="/">
      <div :href="href" @click="navigate" class="logo">
        <img width="24px" height="24px" src="@/assets/logo.png" alt="" />
      </div>
    </router-link>
    <router-link v-slot="{ href, navigate, isExactActive }" to="/">
      <Button
        bgColor="white"
        :active="isExactActive"
        text="Home"
        :href="href"
        @click="navigate"
        >Home</Button
      ></router-link
    >
    <router-link v-slot="{ href, navigate, isExactActive }" to="/following">
      <Button
        bgColor="white"
        :active="isExactActive"
        :href="href"
        @click="navigate"
        >Following</Button
      >
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
  cursor: pointer;
}
.logo:hover {
  background: rgba(0, 0, 0, 0.06) !important;
}
</style>
