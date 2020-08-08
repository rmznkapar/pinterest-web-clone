<template>
  <div class="action-bar">
    <div class="flexing">
      <div class=" section settings">
        <div class="icon">
          <Pen size="20" />
        </div>
        <div
          @focus="shareboxModal = true"
          @focusout="shareboxModal = false"
          tabindex="0"
          class="icon"
        >
          <Share size="20" />
          <ShareBox :show="shareboxModal" />
        </div>
      </div>
      <div class=" section tabs">
        <div v-on:click="switchTabs('boards')">
          <Button bgColor="white" :active="!switchButton">Boards</Button>
        </div>
        <div v-on:click="switchTabs('pins')">
          <Button bgColor="white" :active="switchButton">Pins</Button>
        </div>
      </div>
      <div class=" section filters">
        <div
          @focus="settingsModal = true"
          @focusout="settingsModal = false"
          tabindex="0"
          class="icon"
        >
          <Settings size="20" />
          <Options type="down-up" :show="settingsModal">
            <div class="sub-title option-sec">
              Sort By
            </div>
            <div class="normal-title option-sec gray-hover">
              A to Z
            </div>
            <div class="normal-title option-sec gray-hover">
              Drag and Drop
            </div>
            <div class="normal-title option-sec gray-hover">
              Last saved to
            </div>
            <div class="sub-title option-sec">
              View options
            </div>
            <div class="normal-title option-sec gray-hover">Default</div>
            <div class="normal-title option-sec gray-hover">Compact</div>
          </Options>
        </div>
        <div
          @focus="addModal = true"
          @focusout="addModal = false"
          tabindex="0"
          class="icon"
        >
          <Add size="20" />
          <Options type="down-up" :show="addModal">
            <div class="sub-title option-sec">
              Create
            </div>
            <div class="normal-title option-sec gray-hover">
              Pin
            </div>
            <div class="normal-title option-sec gray-hover">
              Board
            </div>
          </Options>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/utils/Button.vue";
import ShareBox from "@/components/modals/ShareBox.vue";
import Options from "@/components/modals/Options.vue";

import Pen from "@/components/icons/Pen.vue";
import Add from "@/components/icons/Add.vue";
import Share from "@/components/icons/Share.vue";
import Settings from "@/components/icons/Settings.vue";

export default {
  name: "ActionBar",
  components: {
    Button,
    Pen,
    Add,
    Share,
    Settings,
    Options,
    ShareBox
  },
  data() {
    return {
      switchButton: false,
      shareboxModal: false,
      settingsModal: false,
      addModal: false
    };
  },
  methods: {
    switchTabs(val) {
      this.switchButton = !this.switchButton;

      this.$emit("switchTab", val);
    }
  },
  created() {
    this.switchTabs("pins");
  }
};
</script>

<style scoped>
.action-bar {
  padding: 16px;
  padding-top: 0px;
  position: sticky;
  top: 80px;
  z-index: 3;
  background: white;
}
.flexing {
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
}
.section {
  display: flex;
  flex-grow: 1;
  gap: 5px;
}
.tabs {
  justify-content: center;
}
.filters {
  justify-content: flex-end;
}
.icon {
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 100%;
  cursor: pointer;
  position: relative;
}
.icon:hover {
  background: rgba(0, 0, 0, 0.06);
}
.icon svg {
  color: black;
}
</style>
