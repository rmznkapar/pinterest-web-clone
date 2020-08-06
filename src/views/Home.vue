<template>
  <div class="home">
    <Feed page="people" />
  </div>
</template>

<script>
import Feed from "@/components/feed/Feed.vue";
export default {
  name: "Home",
  components: { Feed }
};
</script>
<style scoped>
.home {
  padding-top: 90px;
}
</style>
