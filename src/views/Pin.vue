<template>
  <div class="pin">
    <PinBox @getByTag="getByTag" :pinId="$route.params.id" />
    <h2>More Like This</h2>
    <Feed :key="visitCount" :page="tag" />
  </div>
</template>

<script>
import PinBox from "@/components/feed/PinBox.vue";
import Feed from "@/components/feed/Feed.vue";

export default {
  name: "Pin",
  components: {
    PinBox,
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
}
</style>
