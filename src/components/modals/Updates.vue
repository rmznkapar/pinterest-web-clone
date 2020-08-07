<template>
  <transition name="slide-fade">
    <div class="modal" v-if="show">
      <div class="title">Updates</div>
      <div class="nots">
        <div v-for="not in nots" :key="not.id" class="not">
          <div class="not-text" v-html="not"></div>
          <div class="not-img">
            <img
              width="48px"
              height="48px"
              src="https://images.unsplash.com/profile-fb-1494602029-41c3d3172600.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=48&w=48"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Updates",
  props: {
    show: Boolean
  },
  data() {
    return {
      nots: [
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>",
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>",
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>",
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>",
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>",
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>",
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>",
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>",
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>",
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>",
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>",
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>",
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>",
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>",
        "See what <strong>Bünyamin Akça</strong> found in <strong>DIY and home improvement</strong>"
      ]
    };
  }
};
</script>

<style scoped>
.modal {
  flex-direction: column;
  top: 80px;
  position: absolute;
  background: white;
  z-index: 7;
  right: 10px;
  width: 360px;
  height: 600px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) -3px 4px 14px 0px;
  -ms-scroll-chaining: none;
  overscroll-behavior: none;
  border-radius: 16px;
}
.title {
  padding: 23px 0px;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  box-shadow: 0 6px 8px -4px rgba(0, 0, 0, 0.1);
}
.nots {
  overflow: auto;
  height: inherit;
  display: block;
  position: relative;
}
.not {
  display: flex;
  padding: 8px 0px;
  margin-bottom: 16px;
  margin-left: 8px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
}
.not:hover {
  background-color: #f1f1f1;
}
.not-text {
  text-align: left;
  font-size: 16px;
  color: #111;
  font-weight: 400;
  flex: 1;
  margin-left: 16px;
}
.not-img {
  width: 48px;
  height: 48px;
  margin-right: 4px;
  border-radius: 100%;
}
.not-img img {
  border-radius: 100%;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
