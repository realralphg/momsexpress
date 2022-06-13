<template>
  <q-layout view="lHh LpR lFf">
    <q-header class="" style="background-color: white">
      <div class="row">
        <SellerDashboard @toggleLeftDrawer="toggleLeftDrawer" />
      </div>
    </q-header>

    <q-drawer
      side="left"
      v-model="leftDrawerOpen"
      show-if-above
      :width="280"
      class="drawer text-white bg-secondary"
      :breakpoint="770"
    >
      <q-list>
        <EssentialLink />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "src/components/SellerEssentialLink.vue";
import SellerDashboard from "components/Navbars/sellerDashboard.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    SellerDashboard,
  },

  data() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      sellerToken: localStorage.getItem("sellerToken"),
      buyerToken: localStorage.getItem("buyerToken"),
    };
  },
});
</script>

<style scoped></style>
