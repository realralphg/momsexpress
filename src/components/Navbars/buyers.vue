<template>
  <q-toolbar class="position-relative row justify-between main">
    <!-- Company's Logo -->
    <div class="q-py-sm" style="cursor: pointer">
      <h6
        @click="this.$router.push('/')"
        class="text-primary q-my-none text-bold text-h6 paragraph"
      >
        MOMS <span class="text-secondary"> EXPRESS </span>
      </h6>
    </div>

    <q-toolbar-title class="search-input">
      <q-input
        outlined
        dense
        bg-color="white"
        class="input"
        v-model="search"
        @click="search !== '' ? (result = true) : (result = false)"
        @blur="result = false"
        @keydown="
          (result = true), search.length > 2 ? searchProduct(search) : ''
        "
        placeholder="Search for Products/Categories"
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

      <div
        v-if="(result, search === '' ? (result = false) : result)"
        class="search-result text-black text-subtitle2 bg-white"
      >
        <q-list>
          <!-- <q-scroll-area style="height: auto"> -->
          <router-link
            class="search"
            v-for="item in searchResults"
            :key="item._id"
            :to="`/details/${item._id}`"
            >{{ item.name }}</router-link
          >
          <!-- </q-scroll-area> -->
        </q-list>
      </div>
    </q-toolbar-title>

    <q-btn flat no-caps class="hide">
      <q-btn
        to="/sell"
        label="sell"
        color="primary"
        flat
        rounded
        class="text-white bg-primary"
      />
      <!-- <router-link to="/sell" class="text-primary link">Sell </router-link> -->
    </q-btn>

    <div class="hide">
      <q-btn-dropdown
        v-if="userLoggedIn !== null"
        color="primary"
        flat
        no-caps
        icon="perm_identity"
        dense
      >
        <q-list class="list">
          <div class="row">
            <q-avatar class="q-mr-sm" color="primary" size="3.2rem">
              <q-icon name="person" color="white" />
            </q-avatar>
            <div class="text-left text-subtitle1 q-my-auto">
              Hello, <br />
              <span class="text-bold">{{ user.fullname }}</span>
            </div>
          </div>
          <q-item clickable v-close-popup to="/user">
            <q-item-section avatar>
              <q-avatar icon="person" text-color="black" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Profile</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="logout()">
            <q-item-section avatar>
              <q-avatar icon="logout" text-color="black" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Logout</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

    <!-- Account and Cart buttons -->
    <div class="hide">
      <q-tabs class="cart-tab">
        <q-btn
          v-if="userLoggedIn === null"
          round
          color="primary"
          :to="userLoggedIn === null ? `/login` : `/user`"
          :ripple="false"
          dense
          flat
          icon="perm_identity"
          class="q-ma-md"
        />
        <q-btn
          class="q-mr-md q-my-md"
          @click="$emit('leftDrawer')"
          color="primary"
          dense
          round
          flat
          icon="shopping_cart"
        >
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
      </q-tabs>
    </div>
  </q-toolbar>
</template>

<script>
import { defineComponent, ref } from "vue";

export default {
  data() {
    return {
      search: ref(""),
      result: ref(false),
      searchResults: [],
      text: ref(null),
      cartCounter: "",
      user: this.$store.getters["moduleExample/user"],
    };
  },
  computed: {
    cartNumber() {
      return this.$store.state.moduleExample.cart.length;
    },
    userLoggedIn() {
      return this.$store.getters["moduleExample/user"];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("moduleExample/buyerLogout");
    },
    logoutBuyer() {
      console.log("LOGOUT");
      localStorage.removeItem("userRole");
      localStorage.removeItem("buyerToken");
      localStorage.removeItem("buyerId");
      localStorage.removeItem("buyerEmail");
      localStorage.removeItem("buyerFullname");
      localStorage.removeItem("buyerStore");
      localStorage.removeItem("openAuth");
      console.log("Successsssssss!!!!!!");

      // this.$store.commit('logout')
      this.$router.push("/");
    },
    searchProduct(search) {
      this.$store
        .dispatch("moduleExample/searchProduct", search)
        .then((response) => {
          this.searchResults = response;
        });
    },
  },
  watch: {
    function() {
      this.$route.params;
      console.log("hello");
    },
  },
};
</script>

<style scoped>
.search-input {
  position: relative;
  overflow: visible;
}

.search-result {
  position: absolute;
  background: white;
  width: 100%;
  top: 100%;
  z-index: 100;
  padding: 2% 5%;
  height: auto;
}
.search {
  cursor: pointer;
  margin: 2% 0;
  text-decoration: none;
  color: black;
  display: block;
}

.search:hover {
  color: #d56c33;
}
.card {
  margin: 0 auto !important;
  width: 100%;
  max-width: 55vw;
}

.link {
  text-decoration: none;
}
.main {
  height: 70px;
  padding: 0 5%;
}

.paragraph {
  display: inline;
}

.input {
  width: 100%;
}

.list {
  width: 25vw;
  padding: 5%;
}

@media screen and (max-width: 940px) {
  /* .search_result {
    width: 115%;
    left: 55%;
  } */
}

/* @media screen and (max-width: 830px) {
  .search_result {
    width: 100vw;
    top: 100%;
    left: 50%;
    right: 0;
    transform: translate(-43%, 0%);
    z-index: 1;
    border-radius: 4px;
  }
} */
@media screen and (max-width: 830px) {
  .search-input {
    position: static;
  }
  .search-result {
    position: absolute;
    background: rgb(0, 0, 0, 0.4);
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    /* margin-top: %; */
  }
  .hide {
    display: none;
  }
}

@media screen and (max-width: 700px) {
  .paragraph {
    font-size: 1rem;
  }
}

@media screen and (max-width: 500px) {
  .search_icon {
    padding-right: 0 !important;
    font-size: 1.3rem;
  }

  .main {
    padding-right: 0 !important;
  }
}

@media screen and (max-width: 355px) {
  .paragraph {
    font-size: 0.9rem;
  }
}
</style>
