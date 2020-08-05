<template>
  <div class="profile">
    <Header />
    <ActionBar @switchTab="feedChange" />
    <div v-if="feedResc === 'pins'">
      <Feed page="javascript" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/profile/Header.vue";
import ActionBar from "@/components/profile/ActionBar.vue";
import Feed from "@/components/feed/Feed.vue";
export default {
  name: "Profile",
  components: {
    Header,
    ActionBar,
    Feed
  },
  data() {
    return {
      feedResc: "boards"
    };
  },
  methods: {
    feedChange(val) {
      this.feedResc = val;
    }
  }
};
</script>

<style scoped>
.profile {
  color: black;
  font-weight: 600;
  margin-top: 90px;
}
</style>
