<template>
  <div class="row q-my-lg show_me">
    <q-toolbar-title
      class="text-center"
      style="cursor: pointer"
      @click="this.$router.push('/')"
    >
      <p class="text-orange q-my-none text-bold">
        MOMS <span class="text-white">EXPRESS</span>
      </p>
    </q-toolbar-title>
  </div>

  <q-list class="q-py-md text-subtitle2">
    <q-item
      clickable
      class="q-mb-xs"
      v-ripple
      exact
      exact-active-class="item"
      to="/seller/dashboard"
    >
      <q-item-section avatar>
        <q-icon name="home" size="1.5rem" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Overview</q-item-label>
      </q-item-section>
    </q-item>

    <q-item
      clickable
      class="q-mb-xs"
      exact
      exact-active-class="item"
      v-ripple
      to="/seller/product"
    >
      <q-item-section avatar>
        <q-icon name="storefront" size="1.5rem" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Products</q-item-label>
      </q-item-section>
    </q-item>

    <q-item
      clickable
      class="q-mb-xs"
      exact
      exact-active-class="item"
      v-ripple
      to="/seller/orders"
    >
      <q-item-section avatar>
        <q-icon name="bookmark" size="1.5rem" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Orders</q-item-label>
      </q-item-section>
    </q-item>

    <q-item
      clickable
      class="q-mb-xs"
      exact
      exact-active-class="item"
      v-ripple
      to="/seller/profile"
    >
      <q-item-section avatar>
        <q-icon name="settings" size="1.5rem" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Settings</q-item-label>
      </q-item-section>
    </q-item>

    <q-item
      clickable
      class="q-mb-xs"
      exact
      exact-active-class="item"
      v-ripple
      to="/seller/support"
    >
      <q-item-section avatar>
        <q-icon name="support_agent" size="1.5rem" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Support</q-item-label>
      </q-item-section>
    </q-item>

    <q-item
      clickable
      class="q-mb-xl q-mx-md text-white absolute-bottom"
      v-ripple
    >
      <q-item-section avatar>
        <q-icon name="logout" size="1.5rem" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Logout</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      link: "",
      username: ref(""),
      userMail: ref(""),
    };
  },
  // methods: {
  //   logout() {
  //     console.log("LOGOUT");
  //     localStorage.removeItem("userRole");
  //     localStorage.removeItem("sellerToken");
  //     localStorage.removeItem("sellerId");
  //     localStorage.removeItem("sellerEmail");
  //     localStorage.removeItem("sellerFullname");
  //     localStorage.removeItem("sellerStore");
  //     localStorage.removeItem("role");

  //     this.$store.commit("moduleExample/logout");
  //     this.$router.replace("/");
  //   },
  // },
  // mounted() {
  //   this.username = localStorage.getItem("sellerFullname");
  //   this.userMail = localStorage.getItem("sellerEmail");
  // },
});
</script>

<style scoped>
.item {
  background: #d56c33 !important;
  color: white !important;
}
@media screen and (min-width: 770px) {
  .hide_me {
    display: none;
  }
}

@media screen and (max-width: 771px) {
  .show_me {
    display: none;
  }
}
</style>
