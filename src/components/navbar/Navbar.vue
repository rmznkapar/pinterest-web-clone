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
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 20px;
  font-size: 15px;
  font-weight: 500;
  height: 80px;
  align-items: center;
}
.container {
  display: flex;
  gap: 5px;
}
</style>
