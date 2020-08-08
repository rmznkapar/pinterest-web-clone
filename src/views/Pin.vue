<template>
  <div class="pin">
    <div class="floting-buttons">
      <div class="icon" @click="$router.go(-1)">
        <Back size="24" />
      </div>
      <div class="corner-buttons">
        <div class="icon">
          <Add size="16" />
        </div>
        <div class="icon">
          <Question size="16" />
        </div>
      </div>
    </div>
    <PinBox @getByTag="getByTag" :pinId="$route.params.id" />
    <h2>More Like This</h2>
    <Feed :key="visitCount" :page="tag" />
  </div>
</template>

<script>
import PinBox from "@/components/feed/PinBox.vue";
import Back from "@/components/icons/Back.vue";
import Question from "@/components/icons/Question.vue";
import Add from "@/components/icons/Add.vue";
import Feed from "@/components/feed/Feed.vue";

export default {
  name: "Pin",
  components: {
    PinBox,
    Back,
    Question,
    Add,
    Feed
  },
  data() {
    return {
      tag: "",
      visitCount: 0
    };
  },
  methods: {
    getByTag(val) {
      this.tag = val;
      this.visitCount++;
    }
  }
};
</script>

<style scoped>
.pin {
  padding-top: 90px;
  position: relative;
}
.floting-buttons {
  position: fixed;
  z-index: 4;
  width: 97%;
  height: 80%;
  margin: 20px 24px;
}
.icon {
  width: 48px;
  height: 48px;
  align-items: center;
  padding: 4px;
  justify-content: center;
  display: flex;
  border-radius: 100%;
  cursor: pointer;
  background-color: white;
}
.corner-buttons {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.corner-buttons .icon {
  width: 32px;
  height: 32px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 0px 0px,
    rgba(0, 0, 0, 0.04) 0px 0px 0px 0.5px;
}
.icon:hover {
  background: rgba(0, 0, 0, 0.06);
}
.icon svg {
  color: black;
}
</style>
