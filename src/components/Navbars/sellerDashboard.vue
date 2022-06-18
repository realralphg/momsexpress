<template>
  <q-toolbar class="q-py-md q-pr-xl padding_right bg-grey-2">
    <q-btn
      flat
      dense
      icon="menu"
      color="primary"
      size="1rem"
      aria-label="Menu"
      @click="$emit('toggleLeftDrawer')"
      class="button"
    />

    <q-space class="button" />

    <q-input
      outlined
      dense
      bg-color="white"
      class="input"
      placeholder="Search for your Products"
    >
      <template v-slot:append>
        <q-icon
          name="search"
          class="q-pr-xs search_icon"
          color="primary"
          style="cursor: pointer"
        />
      </template>
    </q-input>

    <q-space class="hide_me" />

    <p class="user text-black text-center q-my-auto q-mx-md hide_me">
      Hi, <span class="text-bold">{{ username }}</span>
    </p>

    <q-avatar class="hide_me">
      <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
    </q-avatar>
  </q-toolbar>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      text: ref(""),
      username: ref(""),
    };
  },
  mounted() {
    this.username = localStorage.getItem("sellerFullname");
  },
};
</script>

<style scoped>
.button {
  display: none;
}

.input {
  width: 50%;
}

.bord {
  border-bottom: 1px solid #d56c33;
}

@media screen and (max-width: 830px) {
  .button {
    display: block;
  }

  .hide_me {
    display: none;
  }

  .padding_right {
    padding-right: 4% !important;
  }

  .input {
    width: 60%;
  }
}
</style>
