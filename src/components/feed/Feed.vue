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
      images: [],
      pageCount: 1,
      isLoaded: false
    };
  },
  methods: {
    getImages(topic) {
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${topic}&per_page=30&page=${this.pageCount}`,
          {
            headers: {
              Authorization:
                "Client-ID cq6La0BAF3iV8t4LisXY1n8XORHw2nIo6Oe1CjLZiqM",
              "Accept-Version": "v1"
            }
          }
        )
        .then(response => {
          // this.images = response.data.results;
          this.isLoaded = true;
          this.images = this.images.concat(response.data.results);
        })
        .catch(() => {
          this.isLoaded = false;
          this.images = [];
        });
    }
  },
  created() {
    this.getImages(this.page);
    // this.getImages("Aesthetic");
  },
  mounted() {
    window.onscroll = () => {
      let bottomOfWindow =
        window.pageYOffset + window.innerHeight - document.body.offsetHeight;

      if (bottomOfWindow > -30 && this.isLoaded) {
        this.pageCount++;
        this.isLoaded = false;
        this.getImages(this.page);
      }
    };
  }
};
</script>
<style scoped>
.feed {
  padding: 0px 24px;
}
</style>
