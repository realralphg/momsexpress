<template>
  <div class="user-main">
    <div class="row">
      <!-- User profile side -->
      <div
        class="col-lg-4 col-md-5 col-sm-12 col-xs-5 hide_me"
        style="padding: 1% 3% 0"
      >
        <div class="bg-grey-3" style="border-radius: 15px; padding: 5%">
          <div class="text-center">
            <q-avatar
              size="6.5rem"
              font-size="3.5rem"
              color="teal"
              class="q-mb-md"
              text-color="white"
              icon="person"
            />
            <div class="row justify-center">
              <div class="q-my-xs text-bold text-h5">
                {{ userLoggedIn.fullname }}
              </div>
            </div>
            <div class="q-my-xs">{{ userLoggedIn.email }}</div>
            <div class="q-my-xs">08012345678</div>
          </div>

          <div
            class="q-my-lg q-px-md q-py-md"
            style="border: 1px solid grey; border-radius: 8px"
          >
            <div class="row justify-between q-my-sm items-center">
              <div class="text-bold text-h6">Delivery Address</div>
              <q-btn icon="edit" size="0.8rem" v-ripple="false" flat round>
                <q-tooltip anchor="bottom middle" self="center middle">
                  Change Address
                </q-tooltip>
              </q-btn>
            </div>
            <div>
              Lorem address and palce and location and timezone and region and
              country haaaaaa.
            </div>
          </div>
        </div>
      </div>

      <!-- Pages -->
      <div class="col-lg-8 col-md-7 col-sm-12 col-xs-12" style="">
        <div class="q-gutter-y-md" style="width: 100%; margin: 0 auto">
          <div>
            <q-tabs
              v-model="tab"
              class="text-grey bg-grey-3"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              indicator
              no-caps
            >
              <q-tab name="mails" label="Orders" />
              <!-- <q-tab name="alarms" label="wishlists" /> -->
            </q-tabs>

            <q-separator style="width: 50%" />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel class="q-pa-none" name="mails">
                <Order />
              </q-tab-panel>

              <!-- <q-tab-panel class="q-pa-none bg-grey-2" name="alarms">
                <Wishlist />
              </q-tab-panel> -->
            </q-tab-panels>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Order from "pages/User/Order.vue";
import Wishlist from "pages/User/Wishlist.vue";
import Reviews from "components/UserDetailPage/Reviews.vue";

export default {
  name: "User",
  components: {
    Order,
    Wishlist,
    Reviews,
  },
  data() {
    return {
      tab: ref("mails"),
      username: ref(""),
      email: ref(""),
    };
  },
  computed: {
    userLoggedIn() {
      return this.$store.getters["moduleExample/user"];
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.user-main {
  padding: 0 5% 2%;
}

@media screen and (max-width: 1024px) {
  .user-main {
    padding: 0 2% 2%;
  }
}
.profile_det {
  border: 2px solid red;
  /* border-radius: 22px; */
}

@media screen and (max-width: 771px) {
  .hide_me {
    display: none;
  }
}
</style>
