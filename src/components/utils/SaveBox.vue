<template>
  <div class="save-box">
    <div class="select-button">
      <span>Wallpapers</span>
      <span class="down-button">
        <svg
          class="gUZ B9u U9O kVc"
          height="12"
          width="12"
          viewBox="0 0 24 24"
          aria-hidden="true"
          aria-label=""
          role="img"
        >
          <path
            d="M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"
          ></path>
        </svg>
      </span>
    </div>
    <div class="save-button"><span>Save</span></div>
  </div>
</template>

<script>
export default {
  name: "SaveBox"
};
</script>

<style scoped>
.save-box {
  position: absolute;
  display: flex;
  align-items: center;
  width: calc(100% - 20px);
  height: 44px;
  border-radius: 12px;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 2;
}
.down-button {
  display: flex;
  margin-left: auto;
}
.select-button {
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 12px;
  flex-grow: 1;
  padding: 0px 12px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-color: #efefef;
  font-weight: 700;
}
.save-button {
  display: flex;
  height: 100%;
  padding: 0px 16px;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: white;
  margin-left: auto;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  justify-content: center;
  background-color: rgba(230, 0, 35, 0.9);
}
svg {
  color: black;
}
</style>
