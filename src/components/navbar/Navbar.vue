<template>
  <div id="navbar">
    <Linker />
    <SearchBox />
    <ButtonsBox />
  </div>
</template>

<script>
import SearchBox from "@/components/navbar/SearchBox.vue";
import Linker from "@/components/navbar/Linker.vue";
import ButtonsBox from "@/components/navbar/ButtonsBox.vue";

export default {
  name: "Navbar",
  components: {
    Linker,
    SearchBox,
    ButtonsBox
  }
};
</script>

<style scoped>
#navbar {
  z-index: 6;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  background: white;
  padding: 8px 20px;
  font-size: 15px;
  font-weight: 500;
  position: fixed;
  top: 0px;
  height: 80px;
  align-items: center;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 8px -8px;
  transition: box-shadow 300ms ease-in-out 0s; */
}
.container {
  display: flex;
  gap: 5px;
}
</style>
