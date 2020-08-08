<template>
  <transition name="slide-fade">
    <div class="modal" :class="[type]" v-if="true">
      <div class="opts">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Updates",
  props: {
    show: Boolean,
    type: String
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.modal {
  flex-direction: column;
  position: absolute;
  background: white;
  z-index: 7;
  width: 200px;
  text-align: left;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) -3px 4px 14px 0px;
  -ms-scroll-chaining: none;
  overscroll-behavior: none;
  border-radius: 16px;
}
.down {
  top: 80px;
  right: 10px;
}
.right {
  top: -50px;
  right: -210px;
}
.left {
  top: -50px;
  right: 40px;
}
.opts {
  padding: 0px 8px;
  margin-bottom: 8px;
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
