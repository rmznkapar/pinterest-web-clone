<template>
  <div class="buttons container">
    <SvgIcon>
      <svg
        class="gUZ B9u U9O kVc"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        aria-hidden="true"
        aria-label=""
        role="img"
      >
        <path
          d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z"
        ></path>
      </svg>
    </SvgIcon>
    <SvgIcon>
      <svg
        class="Hn_ gUZ B9u U9O kVc"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        aria-hidden="true"
        aria-label=""
        role="img"
      >
        <path
          d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0"
        ></path>
      </svg>
    </SvgIcon>
    <router-link
      class="button"
      v-slot="{ href, navigate, isExactActive }"
      to="/profile"
    >
      <div
        :active="isExactActive"
        text="Following"
        :href="href"
        @click="navigate"
        class="logo"
      >
        <span>R</span>
      </div>
    </router-link>
    <SvgIcon>
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
    </SvgIcon>
  </div>
</template>

<script>
import SvgIcon from "@/components/utils/SvgIcon.vue";

export default {
  name: "ButtonsBox",
  components: {
    SvgIcon
  }
};
</script>

<style scoped>
.buttons {
  justify-content: flex-end;
}
.buttons .button {
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 100%;
  cursor: pointer;
}
.buttons .button:hover {
  background: rgba(0, 0, 0, 0.06);
}
.logo {
  background: rgba(0, 0, 0, 0.06);
  width: 24px;
  height: 24px;
  display: flex;
  border-radius: 100%;
  font-size: 10px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
}
</style>
