<template>
  <div class="pin">
    <PinBox :pinId="$route.params.id" />
    <h2>More Like This</h2>
    <Feed page="people" />
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
  }
};
</script>

<style scoped>
.pin {
  padding-top: 90px;
}
</style>
