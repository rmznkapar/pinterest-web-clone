<template>
  <div class="feed">
    <stack
      :column-min-width="230"
      :gutter-width="16"
      :gutter-height="16"
      monitor-images-loaded
    >
      <stack-item v-for="(image, i) in images" :key="i">
        <Overlay :image="image" />
      </stack-item>
    </stack>
  </div>
</template>

<script>
import axios from "axios";
import { Stack, StackItem } from "vue-stack-grid";
import Overlay from "@/components/feed/Overlay.vue";

export default {
  components: { Stack, StackItem, Overlay },
  name: "Feed",
  props: {
    page: String
  },
  data() {
    return {
      images: []
    };
  },
  methods: {
    getImages(topic) {
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${topic}&per_page=50`,
          {
            headers: {
              Authorization:
                "Client-ID cq6La0BAF3iV8t4LisXY1n8XORHw2nIo6Oe1CjLZiqM",
              "Accept-Version": "v1"
            }
          }
        )
        .then(response => {
          this.images = response.data.results;
          console.log(this.images);
        })
        .catch(() => {
          this.images = [];
        });
    }
  },
  created() {
    this.getImages(this.page);
    // this.getImages("Aesthetic");
  }
};
</script>
<style scoped>
.feed {
  padding: 0px 24px;
}
</style>
