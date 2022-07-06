<template>
  <div class="user-main">
    <div class="row">
      <!-- User profile side -->
      <div
        class="col-lg-4 col-md-5 col-sm-12 col-xs-5 hide_me"
        style="padding: 1% 3% 0"
      >
        <div class="bg-grey-3 q-my-md border-rad">
          <div class="text-center">
            <q-avatar
              size="6.5rem"
              font-size="3.5rem"
              color="primary"
              class="q-mb-md"
              text-color="white"
              icon="person"
            />
            <div class="row justify-center">
              <div class="q-my-xs text-bold text-h6">
                {{ user.email }}
              </div>
            </div>
            <div class="q-my-xs">{{ user.email }}</div>
            <div class="q-my-xs">08012345678</div>
          </div>

          <!-- <div
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
          </div> -->
        </div>

        <div class="bg-grey-3 q-my-md border-rad">
          <div class="text-center">
            <div class="text-bold text-h6 q-my-sm">Want to own a Shop?</div>
            <q-btn
              to="/seller/Signup"
              label="Register Now!"
              color="primary"
              outline
              rounded
              class="reg-btn"
            />
          </div>
        </div>

        <div class="bg-grey-3 q-my-md border-rad">
          <div class="text-center">
            <div class="text-bold text-h6 q-my-sm">Trending Items</div>
            <q-list class="text-left">
              <q-item
                clickable
                @click="this.$router.push(`/details/${item._id}`)"
                v-for="item in trending"
                :key="item._id"
              >
                <q-item-section avatar>
                  <q-avatar rounded>
                    <img :src="item.img[0] ? item.img[0].url : ''" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>{{ item.name }}</q-item-section>
              </q-item>
            </q-list>
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

export default {
  name: "User",
  components: {
    Order,
    Wishlist,
  },
  data() {
    return {
      tab: ref("mails"),
      username: ref(""),
      email: ref(""),
      trending: [],
      user: this.$store.getters["moduleExample/user"],
    };
  },
  computed: {
    userLoggedIn() {
      return this.$store.getters["moduleExample/user"];
    },
  },
  methods: {
    getTrending() {
      this.$store
        .dispatch("moduleExample/getTrendingCategory")
        .then((response) => {
          this.trending = response;
          this.trending.splice(4, response.length - 1);
        });
    },
  },
  mounted() {
    this.getTrending();
  },
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

@media screen and (max-width: 830px) {
  .hide_me {
    display: none;
  }
}

.border-rad {
  border-radius: 15px;
  padding: 5%;
}

.reg-btn {
  animation: beat 1.4s infinite alternate;
  transform-origin: center;
}
.reg-btn:hover {
  background-color: #d56c33 !important;
  color: white !important;
}

@keyframes beat {
  to {
    transform: scale(1.2);
  }
}
</style>
