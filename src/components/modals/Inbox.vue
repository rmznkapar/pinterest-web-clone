<template>
  <transition name="slide-fade">
    <div class="modal" v-if="show">
      <div class="title-box">
        <div class="title">
          Inbox
        </div>
        <div class="advice">
          Share ideas with your friends
        </div>
      </div>
      <div class="center-box">
        <div class="search-box"><SearchBox /></div>
        <div class="suggested">Suggested</div>
      </div>
      <div class="nots">
        <div v-for="not in nots" :key="not.id" class="not">
          <div class="not-img">
            <img
              width="48px"
              height="48px"
              src="https://images.unsplash.com/profile-fb-1494602029-41c3d3172600.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=48&w=48"
              alt=""
            />
          </div>
          <div class="not-text">
            <div class="account-name">{{ not }}</div>
            <div class="following">Following</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SearchBox from "@/components/utils/SearchBox.vue";
export default {
  name: "Inbox",
  props: {
    show: Boolean
  },
  components: {
    SearchBox
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
  top: 80px;
  position: fixed;
  background: white;
  z-index: 7;
  right: 0px;
  width: 360px;
  height: 100%;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) -3px 4px 14px 0px;
  overscroll-behavior: none;
  -ms-scroll-chaining: none;
  overscroll-behavior: none;
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
.advice {
  font-size: 36px;
  font-weight: 700;
  text-align: left;
  padding-left: 8px;
  padding-right: 8px;
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
.not-text {
  text-align: left;
  font-size: 16px;
  color: #111;
  font-weight: 400;
  flex: 1;
  gap: 5px;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  justify-content: center;
}
.not-img {
  width: 48px;
  height: 48px;
  margin-left: 20px;
  border-radius: 100%;
}
.not-img img {
  border-radius: 100%;
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
  transition: all 0.5s;
}
.slide-fade-leave-active {
  transition: all 0.1s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(350px);
  opacity: 0;
}
</style>
