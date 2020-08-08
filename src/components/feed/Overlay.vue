<template>
  <div
    :style="{ height: image.height / (image.width / 230) + 'px' }"
    class="overlay"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <SaveBox v-show="hover" />
    <img class="img" :src="image.urls.small" :alt="image.alt_description" />
    <div v-show="hover" class="util-box">
      <div class="icon">
        <Share size="16" />
      </div>
      <div
        @focus="optionsModal = true"
        @focusout="optionsModal = false"
        tabindex="0"
        class="icon"
      >
        <Threedot size="16" />
        <Options :type="angle" :show="optionsModal">
          <div class="sub-title option-sec">Accounts</div>
          <div class="normal-title option-sec gray-hover">
            Add another account
          </div>
          <div class="normal-title option-sec gray-hover">
            Add a free business account
          </div>
          <div class="sub-title option-sec">More Settings</div>
          <div class="normal-title option-sec gray-hover">Settings</div>
          <div class="normal-title option-sec gray-hover">
            Tune your home feed
          </div>
          <div class="normal-title option-sec gray-hover">Log out</div>
        </Options>
      </div>
    </div>
    <div class="opacity-background" v-on:click="goPin(image.id)"></div>
  </div>
</template>

<script>
import Options from "@/components/modals/Options.vue";
import SaveBox from "@/components/utils/SaveBox.vue";

import Share from "@/components/icons/Share.vue";
import Threedot from "@/components/icons/Threedot.vue";
export default {
  name: "Overlay",
  components: {
    Share,
    Threedot,
    SaveBox,
    Options
  },
  props: {
    image: Object,
    angle: String
  },
  data() {
    return {
      hover: false,
      optionsModal: false
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
    },
    getSize(url) {
      const place = url.search("w=");
      const width = url.substring(place + 2, place + 5) + "px";
      console.log(width);
      return [width];
    }
  }
};
</script>

<style scoped>
.overlay {
  height: 100%;
  width: 100%;
  position: relative;
}
.util-box {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  bottom: 15px;
  right: 15px;
  gap: 10px;
  z-index: 2;
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
  background: rgba(255, 255, 255, 0.8);
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
