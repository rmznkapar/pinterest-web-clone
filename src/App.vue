<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica,
    "\30D2\30E9\30AE\30CE\89D2\30B4  Pro W3", Hiragino Kaku Gothic Pro,
    "\30E1\30A4\30EA\30AA", Meiryo, "\FF2D\FF33  \FF30\30B4\30B7\30C3\30AF",
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: black;
}
</style>
