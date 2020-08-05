<template>
  <div class="header">
    <div class="profile-img">
      <div><span>R</span></div>
    </div>
    <div class="name">
      <h1>Ramazan Kapar</h1>
    </div>
    <div class="follower-box">
      3 followers · 3 following
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  margin-bottom: 25px;
}

.header h1 {
  font-weight: 700;
  font-size: 36px;
}

.profile-img {
  height: 120px;
  width: 120px;
  border-radius: 100%;
  justify-content: center;
  display: flex;
  margin: auto;
  align-items: center;
  font-size: 50px;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.06);
}
</style>
