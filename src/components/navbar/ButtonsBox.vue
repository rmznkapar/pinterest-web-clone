<template>
  <div class="buttons container">
    <div
      @focus="updatesModal = true"
      @focusout="updatesModal = false"
      tabindex="0"
      class="icon"
    >
      <Update size="24" />
      <Updates :show="updatesModal" />
    </div>
    <div
      @focus="inboxModal = true"
      @focusout="inboxModal = false"
      tabindex="0"
      class="icon"
    >
      <Message size="24" />
      <Inbox :show="inboxModal" />
    </div>
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
    <div
      @focus="optionsModal = true"
      @focusout="optionsModal = false"
      tabindex="0"
      class="icon"
    >
      <Down size="12" />
      <Options type="down" :show="optionsModal">
        <div class="sub-title option-sec">Accounts</div>
        <div class="normal-title option-sec gray-hover">
          Add another account
        </div>
        <div class="normal-title option-sec gray-hover">
          Add a free business account
        </div>
        <div class="sub-title option-sec">More Settings</div>
        <div class="normal-title option-sec gray-hover">Settings</div>
        <div class="normal-title option-sec gray-hover">
          Tune your home feed
        </div>
        <div class="normal-title option-sec gray-hover">Log out</div>
      </Options>
    </div>
  </div>
</template>

<script>
import Updates from "@/components/modals/Updates.vue";
import Inbox from "@/components/modals/Inbox.vue";
import Options from "@/components/modals/Options.vue";

import Update from "@/components/icons/Update.vue";
import Message from "@/components/icons/Message.vue";
import Down from "@/components/icons/Down.vue";

export default {
  name: "ButtonsBox",
  components: {
    Update,
    Message,
    Down,
    Updates,
    Inbox,
    Options
  },
  data() {
    return {
      updatesModal: false,
      optionsModal: false,
      inboxModal: false
    };
  },
  methods: {
    handleFocus() {
      console.log("in");
    },
    handleFocusOut() {
      console.log("out");
    }
  }
};
</script>

<style scoped>
.buttons {
  justify-content: flex-end;
  -webkit-user-select: none;
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
.icon {
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 100%;
  cursor: pointer;
}

.icon:focus {
  box-shadow: 0 0 0 4px rgba(0, 132, 255, 0.5);
  outline: 0;
}
.buttons .icon:hover {
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
