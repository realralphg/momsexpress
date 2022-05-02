<template>
  <q-layout view="lHh Lpr lFf">



    <!-- #D0CECE -->
    <q-header class="" elevated style="background-color: white; ">

        <div class="row">

            <!-- <q-btn
                flat
                dense
                round
                icon="menu"
                color="blue"
                aria-label="Menu"
                @click="leftDrawer"
              /> -->




          <Buyers :leftDrawer="leftDrawer" v-if="!(this.$router.currentRoute.value.path.split('/').includes('seller')) && this.$router.currentRoute.value.path !== '/sell' && !(this.$router.currentRoute.value.path.split('/').includes('sell'))" />
          <SellerDashboard @toggleLeftDrawer="toggleLeftDrawer" v-if="(this.$router.currentRoute.value.path.split('/').includes('seller')) && !(this.$router.currentRoute.value.path.split('/').includes('sell')) " />
          <SellerLanding v-show="this.$router.currentRoute.value.path == '/sell'  ||  this.$router.currentRoute.value.path == '/sell/auth' || this.$router.currentRoute.value.path.split('/').includes('sell') " />
        </div>



    </q-header>

       <q-drawer
      side="left"
      v-model="drawerOpen"
      :width="280"
      class="drawer text-white bg-grey-3"
      :breakpoint="800"
      >

        <q-list>
        <BuyerSidebar />
        </q-list>
      </q-drawer>


     <q-drawer
      side="left"
      v-model="leftDrawerOpen"
      show-if-above
      :width="280"
      class="drawer text-white bg-secondary"
      :breakpoint="770"
      v-if="(this.$router.currentRoute.value.path.split('/').includes('seller')) && this.$router.currentRoute.value.path !== '/sell' ">

        <q-list>
        <EssentialLink />
        </q-list>
      </q-drawer>




    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <EssentialLink />
      </q-list>
    </q-drawer> -->


    <q-footer class="row items-center hide_me" style="height: 65px" v-if="!(this.$router.currentRoute.value.path.split('/').includes('seller'))">
        <div class="col-3 text-center">
            <q-btn icon="home" to="/" flat :ripple="false" />
            <div class="text-caption">Home</div>
        </div>
        <div class="col-3 text-center">
            <q-btn icon="format_list_bulleted" to="/allCategory" flat :ripple="false" />
            <div class="text-caption">Categories</div>
        </div>
        <div class="col-3 text-center">
            <q-btn class="" to="/cart" flat icon="shopping_cart">
              <q-badge color="red" class="text-bold" floating transparent>
                4
              </q-badge>
            </q-btn>
            <div class="text-caption">Cart</div>
        </div>
        <div class="col-3 text-center" >
            <q-btn icon="perm_identity" to="/profile" flat :ripple="false" />
            <div class="text-caption">Profile</div>
        </div>
        <!-- <div class="col-3 text-center" v-show="buyerToken == '' || sellerToken !== '' ">
            <q-btn icon="dashboard" to="/seller/dashboard" flat :ripple="false" />
            <div class="text-caption">Dashboard</div>
        </div> -->

    </q-footer>




    <q-page-container>
      <router-view />
        <Footer v-if="!(this.$router.currentRoute.value.path.split('/').includes('seller'))" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import Buyers from 'components/Navbars/buyers.vue'
import SellerDashboard from 'components/Navbars/sellerDashboard.vue'
import SellerLanding from 'components/Navbars/sellerLanding.vue'
import Footer from 'components/Footer.vue'
import BuyerSidebar from '../components/BuyerSidebar.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    SellerDashboard,
    Buyers,
    SellerLanding,
    Footer,
    BuyerSidebar
},

  data () {
    const leftDrawerOpen = ref(false)
    const drawerOpen = ref(false)


    return {
      searchClosed: ref(true),
      leftDrawerOpen,
      drawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      leftDrawer () {
        drawerOpen.value = !drawerOpen.value
      },
      sellerToken: localStorage.getItem('sellerToken'),
      buyerToken: localStorage.getItem('buyerToken'),
    }
  }
})
</script>


<style scoped>
.hide_me{
  display: none;
}

@media screen and (max-width: 771px) {
  .hide_me{
    display: flex;
  }
}

</style>
