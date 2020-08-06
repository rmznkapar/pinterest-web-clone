<template>
  <div
    class="overlay"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-on:click="goPin(image.id)"
  >
    <SaveBox v-show="hover" />
    <img class="img" :src="image.urls.small" :alt="image.alt_description" />
    <div v-show="hover" class="util-box">
      <div class="icon">
        <Threedot size="16" />
      </div>
      <div class="icon">
        <Share size="16" />
      </div>
    </div>
    <div class="opacity-background"></div>
  </div>
</template>

<script>
import SaveBox from "@/components/utils/SaveBox.vue";
import Share from "@/components/icons/Share.vue";
import Threedot from "@/components/icons/Threedot.vue";
export default {
  name: "Overlay",
  components: {
    Share,
    Threedot,
    SaveBox
  },
  props: {
    image: Object
  },
  data() {
    return {
      hover: false
    };
  },
  methods: {
    goPin(imageId) {
      console.log(imageId);
      if (this.$route.name === "Pin") {
        this.$router.replace({ name: "Pin", params: { id: imageId } });
      } else {
        this.$router.push({ name: "Pin", params: { id: imageId } });
      }
    }
  }
};
</script>

<style scoped>
.overlay {
  position: relative;
}
.util-box {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  bottom: 15px;
  right: 15px;
  gap: 10px;
}
.icon {
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 100%;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.9);
}
.icon:hover {
  background: rgba(0, 0, 0, 0.06);
}
.icon svg {
  color: black;
}
.save-box {
  position: absolute;
  display: flex;
  align-items: center;
  width: calc(100% - 20px);
  margin: 12px;
  height: 44px;
  border-radius: 12px;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 2;
}
.img {
  width: 100%;
  height: auto;
  border-radius: 16px;
}
.opacity-background {
  position: absolute;
  width: 100%;
  height: calc(100% - 4px);
  top: 0px;
  left: 0px;
  background: #00000015;
  border-radius: 16px;
  cursor: zoom-in;
}
</style>
