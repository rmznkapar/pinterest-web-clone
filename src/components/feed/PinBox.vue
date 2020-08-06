<template>
  <div class="pin-box">
    <div class="img-holder">
      <img :src="content.urls.small" :alt="content.alt_description" />
    </div>
    <PinContent :content="content" />
  </div>
</template>

<style scoped>
.pin-box {
  display: flex;
  max-width: 1016px;
  margin: auto;
  z-index: 5;
  box-sizing: border-box;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  border-radius: 32px;
  margin-top: 25px;
  margin-bottom: 50px;
  position: relative;
}
.img-holder {
  display: flex;
  flex: 1;
  flex-grow: 1;
  height: fit-content;
}
.img-holder img {
  width: 100%;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
}
</style>

<script>
import axios from "axios";
import PinContent from "@/components/feed/PinContent.vue";

export default {
  name: "PinBox",
  components: { PinContent },
  props: {
    pinId: String
  },
  data() {
    return {
      content: {}
    };
  },
  methods: {
    getContent(pinId) {
      axios
        .get(`https://api.unsplash.com/photos/${pinId}`, {
          headers: {
            Authorization:
              "Client-ID cq6La0BAF3iV8t4LisXY1n8XORHw2nIo6Oe1CjLZiqM",
            "Accept-Version": "v1"
          }
        })
        .then(response => {
          this.content = response.data;
          this.$emit("getByTag", this.content.tags[2].title);
          console.log(this.content);
        })
        .catch(() => {
          this.content = {};
        });
    }
  },
  created() {
    this.getContent(this.pinId);
  },
  watch: {
    pinId() {
      window.scrollTo(0, 0);
      this.getContent(this.pinId);
    }
  }
};
</script>
