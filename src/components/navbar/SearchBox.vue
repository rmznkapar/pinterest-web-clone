<template>
  <div class="search container">
    <div class="search-box">
      <div class="search-logo">
        <svg
          class="gUZ B9u U9O kVc"
          height="16"
          width="16"
          viewBox="0 0 24 24"
          aria-label="Arama simgesi"
          role="img"
        >
          <path
            d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88l-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"
          ></path>
        </svg>
      </div>
      <input type="text" placeholder="Search" />
      <div class="close=logo"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox"
};
</script>

<style scoped>
.search {
  flex-grow: 3;
  align-items: center;
  margin: 0px 15px;
  height: 48px;
}

.search-box {
  background: #efefef;
  border-radius: 24px;
  padding: 0px 15px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  flex: 1 1 auto;
}

.search-box:hover {
  background-color: rgba(225, 225, 225);
}
.search-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
input {
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    Helvetica, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ,
    Meiryo, "ＭＳ Ｐゴシック", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: normal;
  outline: none;
  padding: 0;
}
</style>
