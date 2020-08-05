<template>
  <div class="action-bar">
    <div class="flexing">
      <div class=" section settings">
        <div class="icon">
          <Pen />
        </div>
        <div class="icon">
          <Share />
        </div>
      </div>
      <div class=" section tabs">
        <div v-on:click="switchTabs('boards')">
          <Button :active="switchButton">Boards</Button>
        </div>
        <div v-on:click="switchTabs('pins')">
          <Button :active="!switchButton">Pins</Button>
        </div>
      </div>
      <div class=" section filters">
        <div class="icon">
          <Settings />
        </div>
        <div class="icon">
          <Add />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/utils/Button.vue";
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
    Settings
  },
  data() {
    return {
      switchButton: true
    };
  },
  methods: {
    switchTabs(val) {
      this.switchButton = !this.switchButton;

      this.$emit("switchTab", val);
    }
  }
};
</script>

<style scoped>
.action-bar {
  padding: 16px;
  padding-top: 0px;
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
}
.icon:hover {
  background: rgba(0, 0, 0, 0.06);
}
.icon svg {
  color: black;
}
</style>
