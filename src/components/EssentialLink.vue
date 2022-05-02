<template>

            <div class="row q-my-lg show_me">
              <q-toolbar-title class="text-center" style="cursor:pointer" @click="this.$router.push('/')">
                <p class="text-orange q-my-none text-bold">MOMS <span class="text-white">EXPRESS</span> </p>
                <!-- <p class="q-my-none  text-white text-bold">EXPRESS</p> -->
              </q-toolbar-title>
            </div>

            <!-- Profile Image and Details -->
              <div class="q-px-md items-center q-my-md hide_me">
                  <q-avatar size="4rem" font-size="2.5rem" color="primary" class="q-mr-md" text-color="white" icon="person" />
                  <div class="q-mt-sm">
                    <div class="q-my-xs text-bold text-h5"> Big Billy</div>
                    <div class="q-my-xs">tobiikupolati33@gmail.com</div>
                    <div class="q-my-xs">08012345678</div>
                  </div>
                </div>

            <!-- <q-separator/> -->

            <q-list class="q-py-md q-px-md">
                <q-item
                  clickable
                  class="q-mb-lg"
                  active-class="bg-primary margin"
                  v-ripple :active="link === 'Dashboard'"
                  to="/seller/dashboard"
                  @click="link = 'Dashboard'"
                  style="border-radius: 15px"
                  >
                    <q-item-section avatar>
                        <q-icon name="home" size="2rem" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Overview</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item
                  clickable class="q-mb-lg"
                  active-class="bg-primary"
                  v-ripple
                  :active="link === 'Products' "
                  @click="link = 'Products'"
                  to="/seller/product"
                  style="border-radius: 15px"
                >

                <q-item-section avatar>
                    <q-icon name="storefront" size="2rem"/>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Products</q-item-label>
                </q-item-section>
                </q-item>

                <q-item clickable class="q-mb-lg"
                active-class="bg-primary"
                v-ripple
                :active="link === 'Profile'"
                @click="link = 'Profile'" to="/seller/profile"
                style="border-radius: 15px"
                >

                <q-item-section avatar>
                    <q-icon name="settings" size="2rem" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Profile</q-item-label>
                </q-item-section>
                </q-item>

                <q-item clickable class="q-mb-lg"
                active-class="bg-primary"
                v-ripple
                to="/seller/support"
                @click="link = 'Support'"
                :active="link === 'Support'"
                style="border-radius: 15px">

                <q-item-section avatar>
                    <q-icon name="support_agent" size="2rem" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Support</q-item-label>
                </q-item-section>
                </q-item>

                <q-item
                clickable
                class="q-mb-xl q-mx-md text-white absolute-bottom"
                v-ripple
                @click="logout()"
                style="border-radius: 15px">

                <q-item-section avatar>
                    <q-icon name="logout" size="2rem" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Logout</q-item-label>
                </q-item-section>
                </q-item>

            </q-list>
            <!-- <q-space/> -->
            <!-- <div class="q-py-none row " > -->
              <!-- <q-space/>
              <q-item clickable class=""
                active-class="my-menu-link"
                v-ripple style="width:65%" to="/">

                <q-item-section avatar>
                    <q-icon name="logout" size="2rem" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Logout</q-item-label>
                </q-item-section>
                </q-item>
                <q-space/> -->
                <!-- <q-btn icon="logout" color="light-blue-8" label="Logout" class="q-px-lg" flat /> -->
            <!-- </div> -->


</template>

<script>


import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  data() {
    return{
      link: ''
    }
  },
  methods:{
    logout(){
      console.log("LOGOUT")
      localStorage.removeItem("userRole");
      localStorage.removeItem("sellerToken");
      localStorage.removeItem("sellerId");
      localStorage.removeItem("sellerEmail");
      localStorage.removeItem("sellerFullname");
      localStorage.removeItem("sellerStore");

      this.$store.commit('logout')
      this.$router.replace('/');
    },
  }
})
</script>

<style scoped>
  @media screen and (min-width: 770px) {
    .hide_me{
      display: none;
    }
  }

  @media screen and (max-width: 771px) {
    .show_me{
      display: none;
    }
  }
</style>
