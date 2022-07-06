<template>
  <q-toolbar class="q-py-md q-px-xl text-subtitle2">
    <!-- <q-btn
      flat
      dense
      icon="menu"
      color="primary"
      size="1rem"
      aria-label="Menu"
      @click="$emit('toggleLeftDrawer')"
      class="button"
    /> -->

    <q-btn
      v-show="
        this.$router.currentRoute.value.path == '/seller/product/new' ||
        this.$router.currentRoute.value.path == '/seller/product_detail'
      "
      label="back"
      icon="chevron_left"
      flat
      color="primary q-pl-none"
      to="/seller/product"
    />

    <q-space class="hide_me" />

    <router-link to="/" class="items-center row link text-secondary"
      >View Store <q-icon name="link" size="1.5rem" class="q-ml-sm" />
    </router-link>

    <q-btn
      label="Upgrade"
      no-caps
      icon=" star_rate"
      flat
      text-color="white"
      class="q-px-sm bg-secondary q-ml-md bordered-btn"
      dense
    />

    <q-btn flat round class="q-ml-md bg-none">
      <q-avatar class="bg-primary">
        <div>TI</div>
      </q-avatar>
    </q-btn>

    <router-link to="/" class="items-center q-ml-md row link text-secondary">
      <q-icon name="chat_bubble_outline" size="1.5rem" class="q-mr-sm" />
      Get Help
    </router-link>
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
.link {
  text-decoration: none;
}

.link:hover {
  color: #d56c33 !important;
}
</style>
