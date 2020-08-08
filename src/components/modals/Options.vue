<template>
  <transition name="slide-fade">
    <div class="modal" :class="[type]" v-if="show">
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
.down-up {
  top: 55px;
  right: 0px;
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
