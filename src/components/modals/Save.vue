<template>
  <transition name="slide-fade">
    <div class="modal" v-if="show">
      <div class="center-box">
        <div class="search-box"><SearchBox /></div>
        <div class="suggested">
          All boards
        </div>
      </div>
      <div class="nots">
        <div v-for="not in nots" :key="not.id" class="not">
          <div class="not-img">
            <img
              width="36px"
              height="36px"
              src="https://images.unsplash.com/profile-fb-1494602029-41c3d3172600.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=48&w=48"
              alt=""
            />
          </div>
          <div class="not-text">
            <div class="account-name">{{ not }}</div>
          </div>
          <div class="button-box">
            <Button bgColor="#e60023" color="white">Save</Button>
          </div>
        </div>
      </div>
      <div class="end-box">
        <div class="create-board">
          Create board
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SearchBox from "@/components/utils/SearchBox.vue";

import Button from "@/components/utils/Button.vue";
export default {
  name: "Save",
  props: {
    show: Boolean
  },
  components: {
    SearchBox,
    Button
  },
  data() {
    return {
      nots: [
        "BuzzFeed",
        "BuzzFeed",
        "BuzzFeed",
        "BuzzFeed",
        "BuzzFeed",
        "BuzzFeed",
        "BuzzFeed",
        "BuzzFeed",
        "BuzzFeed",
        "BuzzFeed"
      ]
    };
  }
};
</script>

<style scoped>
.modal {
  flex-direction: column;
  position: absolute;
  background: white;
  z-index: 9;
  width: 300px;
  height: 375px;
  text-align: left;
  left: -50px;
  top: 55px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) -3px 4px 14px 0px;
  -ms-scroll-chaining: none;
  overscroll-behavior: none;
  border-radius: 16px;
}
.button-box {
  margin-right: 8px;
  display: none;
}
.title-box {
  padding-left: 8px;
  padding-right: 8px;
}
.title {
  padding: 23px 0px;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
}
.end-box {
  padding: 12px 16px;
  font-size: 16px;
  box-shadow: 0px -8px 20px #0000001f;
}
.end-box:hover {
  background-color: #f1f1f1;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.center-box {
  padding: 15px 16px;
}
.suggested {
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  padding-top: 10px;
  color: #111;
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
  margin-bottom: 5px;
  margin-left: 8px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
}
.not:hover {
  background-color: #f1f1f1;
}
.not:hover .button-box {
  display: block !important;
}
.not-text {
  text-align: left;
  font-size: 16px;
  color: #111;
  font-weight: 400;
  flex: 1;
  gap: 5px;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  justify-content: center;
}
.not-img {
  width: 48px;
  height: 48px;
  margin-left: 10px;
  display: flex;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
}
.not-img img {
  border-radius: 8px;
}
.account-name {
  font-size: 16px;
  font-weight: 700;
  color: #111;
}
.following {
  font-size: 12px;
  font-weight: 400;
  color: #767676;
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
