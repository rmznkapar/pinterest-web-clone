<template>
  <div class="pin-box">
    <div class="img-holder">
      <img :src="content.urls.small" :alt="content.alt_description" />
    </div>
    <div class="panel-holder">
      <h1>{{ content.alt_description }}</h1>
    </div>
  </div>
</template>

<style scoped>
.pin-box {
  display: flex;
  max-width: 1016px;
  margin: auto;
  box-sizing: border-box;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  border-radius: 32px;
  margin-top: 25px;
  margin-bottom: 50px;
}
.img-holder {
  display: flex;
  flex: 1;
  flex-grow: 1;
}
.panel-holder {
  display: flex;
  flex: 1;
  flex-grow: 1;
}
.img-holder img {
  width: 100%;
}
</style>

<script>
import axios from "axios";
export default {
  name: "PinBox",
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
