<template>
  <div class="panel-holder">
    <div class="flex-section">
      <div class="icons-box">
        <div class="icon">
          <Threedot />
        </div>
        <div class="icon">
          <Share />
        </div>
      </div>
      <div class="util-box">
        <SaveBox />
      </div>
    </div>
    <div class="section">
      <a :href="content.links.download" class="resc-link">unsplash.net</a>
      <h1>{{ content.description }}</h1>
      <p>{{ content.alt_description }}</p>
    </div>
    <div class="flex-section pd-15">
      <div class="user-info-box">
        <div class="profile-img">
          <img :src="content.user.profile_image.small" alt="" />
        </div>
        <div class="profile-infos">
          <div class="name">
            <span>{{ content.user.name }}</span>
          </div>
          <div class="followers">
            <span> {{ content.user.total_likes }} followers </span>
          </div>
        </div>
      </div>
      <div class="follow-box">
        <Button bgColor="#efefef">Follow</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Share from "@/components/icons/Share.vue";
import Threedot from "@/components/icons/Threedot.vue";
import SaveBox from "@/components/utils/SaveBox.vue";
import Button from "@/components/utils/Button.vue";

export default {
  name: "PinContent",
  components: {
    Share,
    Threedot,
    SaveBox,
    Button
  },
  props: {
    content: Object
  }
};
</script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 0px;
  color: black;
}
p {
  margin-top: 5px;
}
.pd-15 {
  padding: 15px 30px !important;
}
.resc-link {
  font-size: 16px;
  font-weight: 400;
  color: #111;
}
.name {
  font-weight: 700;
  font-size: 14px;
}
.followers {
  font-weight: 400;
  font-size: 14px;
}
.user-info-box {
  align-items: center;
  display: flex;
}
.profile-infos {
  text-align: left;
  margin-left: 10px;
}
.profile-img {
  width: 32px;
  height: 32px;
  border-radius: 100%;
}
.profile-img img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.flex-section {
  display: flex;
  padding: 15px;
  justify-content: space-between;
}
.section {
  text-align: left;
  padding: 15px 30px;
}

.panel-holder {
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-direction: column;
}
.util-box {
  position: relative;
  justify-content: flex-end;
  display: flex;
  max-width: 250px;
  z-index: 1;
  flex-grow: 1;
}
.icons-box {
  display: flex;
}
.icon {
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 100%;
  cursor: pointer;
}
.icon:hover {
  background: rgba(0, 0, 0, 0.06);
}
.icon svg {
  color: black;
}
</style>
