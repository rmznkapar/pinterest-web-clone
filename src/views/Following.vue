<template>
  <div class="following">
    <h1>Following</h1>
    <Feed page="japan" />
  </div>
</template>

<script>
import Feed from "@/components/feed/Feed.vue";

export default {
  name: "Following",
  components: { Feed }
};
</script>
