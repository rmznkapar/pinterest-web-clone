<template>
  <div class="feed">
    <!-- <stack
      :column-min-width="230"
      :gutter-width="16"
      :gutter-height="16"
      monitor-images-loaded
    >
      <stack-item v-for="(image, i) in images" :key="i">
        <Overlay :image="image" />
      </stack-item>
    </stack> -->
    <StackGrid :columnWidth="230" :gutterX="16" :gutterY="16">
      <div class="stack-item" v-for="(image, i) in images" :key="i">
        <Overlay v-bind:ref="i" :angle="getAngle(i)" :image="image" />
      </div>
    </StackGrid>
  </div>
</template>

<script>
import axios from "axios";
import Overlay from "@/components/feed/Overlay.vue";
import StackGrid from "vue-stack-grid-component";

export default {
  components: { StackGrid, Overlay },
  name: "Feed",
  props: {
    page: String
  },
  data() {
    return {
      images: [],
      pageCount: 1,
      isLoaded: false,
      columnNum: 0
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
          this.images = this.images.concat(response.data.results);
          this.isLoaded = true;
        })
        .catch(() => {
          this.images = [];
          this.isLoaded = false;
        });
    },
    getAngle(itemNum) {
      console.log(this.$refs["0"]);

      if ((itemNum % this.columnNum) + 1 > this.columnNum / 2) {
        return "left";
      } else {
        return "right";
      }
    }
  },
  created() {
    this.getImages(this.page);
    this.columnNum = Math.floor(window.innerWidth / 230);
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
