<template>
  <q-layout :view="value ? 'lHh LpR lFf' : 'lHh LpR lff'">
    <q-header class="" elevated style="background-color: white">
      <div class="row">
        <Buyers
          @leftDrawer="leftDrawer"
          v-if="
            !this.$router.currentRoute.value.path
              .split('/')
              .includes('seller') &&
            this.$router.currentRoute.value.path !== '/sell' &&
            !this.$router.currentRoute.value.path.split('/').includes('sell')
          "
        />

        <SellerLanding
          v-if="
            this.$router.currentRoute.value.path
              .split('/')
              .includes('seller') ||
            this.$router.currentRoute.value.path.split('/').includes('sell')
          "
        />
      </div>
    </q-header>

    <q-drawer
      side="right"
      v-model="drawerOpen"
      :width="250"
      :breakpoint="2200"
      class="cart-drawer text-white bg-grey-2 sidebar absolute"
      style="height: 100%"
      v-if="
        !this.$router.currentRoute.value.path.split('/').includes('seller') &&
        !this.$router.currentRoute.value.path.split('/').includes('sell')
      "
    >
      <q-list>
        <BuyerSidebar />
      </q-list>
    </q-drawer>

    <q-footer class="row items-center hide_me q-py-sm">
      <div class="col-3 text-center">
        <q-btn icon="home" to="/" flat :ripple="false" />
        <div class="text-caption">Home</div>
      </div>
      <div class="col-3 text-center">
        <q-btn
          icon="format_list_bulleted"
          to="/allCategory"
          flat
          :ripple="false"
        />
        <div class="text-caption">Categories</div>
      </div>
      <div class="col-3 text-center">
        <q-btn class="" to="/cart" flat icon="shopping_cart">
          <q-badge
            v-if="cartNumber != 0"
            color="red"
            class="text-bold"
            floating
            transparent
          >
            {{ cartNumber }}
          </q-badge>
        </q-btn>
        <div class="text-caption">Cart</div>
      </div>
      <div v-if="role !== 'seller'" class="col-3 text-center">
        <q-btn icon="perm_identity" to="/profile" flat :ripple="false" />
        <div class="text-caption">Profile</div>
      </div>

      <div v-if="role === 'seller' && seller" class="col-3 text-center">
        <q-btn
          icon="perm_identity"
          to="/seller/dashboard"
          flat
          :ripple="false"
        />
        <div class="text-caption">Dashboard</div>
      </div>
    </q-footer>

    <q-footer>
      <Footer class="" />
    </q-footer>

    <q-page-container class="">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import Buyers from "components/Navbars/buyers.vue";
import SellerLanding from "components/Navbars/sellerLanding.vue";
import BuyerSidebar from "components/Navbars/buyerSidebar.vue";
import Footer from "components/Footer.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    Buyers,
    SellerLanding,
    BuyerSidebar,
    Footer,
  },

  data() {
    const leftDrawerOpen = ref(false);
    const drawerOpen = ref(false);

    return {
      value: window.innerWidth <= 830 ? true : false,
      searchClosed: ref(true),
      leftDrawerOpen,
      drawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      leftDrawer() {
        drawerOpen.value = !drawerOpen.value;
      },
      role: localStorage.getItem("role"),
      seller: localStorage.getItem("sellerToken"),
    };
  },
  computed: {
    cartNumber() {
      return this.$store.state.moduleExample.cart.length;
    },
  },
});
</script>

<style scoped>
.hide_me {
  display: none;
}

@media screen and (max-width: 970px) {
  .cart-drawer {
    width: 100px !important;
  }
}

@media screen and (max-width: 830px) {
  .hide_me {
    display: flex;
  }
}
</style>
