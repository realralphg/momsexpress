<template>
  <div>
    <!-- Auth Buttons  -->
    <div class="row justify-evenly q-my-md" v-if="!user">
      <q-btn
        color="primary"
        class="bg-secondary button q-mt-md"
        to="/signup"
        flat
        label="SIGN UP"
        size="1.1rem"
      />
      <q-btn
        color="white"
        class="bg-primary button q-mt-md"
        to="/login"
        flat
        label="login"
        size="1.1rem"
      />
    </div>

    <div class="column" v-if="user">
      <!-- Profile Image and Details -->
      <div class="column text-center items-center q-px-xl q-mt-md">
        <q-avatar
          size="6rem"
          font-size="4.5rem"
          color="teal"
          class="q-mr-md q-mb-md"
          text-color="white"
          icon="person"
        />
        <div class="row">
          <div class="q-my-xs text-bold text-h6">
            {{ user.fullname }}
          </div>
        </div>
        <div class="q-my-xs text-subtitle1">{{ user.email }}</div>
        <div class="q-my-xs text-subtitle1">08012345678</div>
      </div>
    </div>

    <q-separator size="1px" class="q-mt-xl q-mb-sm" />

    <q-list class="q-py-md q-px-md">
      <q-item
        clickable
        class="q-mb-sm list_font text-h6"
        v-ripple
        to="/order"
        style="border-radius: 15px"
      >
        <!-- <q-item-section avatar>
          <q-icon name="auto_awesome_motion" size="2rem" />
        </q-item-section> -->
        <q-item-section>
          <q-item-label>Orders</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        class="q-mb-sm list_font text-h6"
        v-ripple
        to="/cart"
        style="border-radius: 15px"
      >
        <!-- <q-item-section avatar>
          <q-icon name="shopping_cart" size="2rem" />
        </q-item-section> -->
        <q-item-section>
          <q-item-label>Cart</q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        clickable
        class="q-mb-sm list_font text-h6"
        v-ripple
        to="/sell"
        style="border-radius: 15px"
      >
        <q-item-section>
          <q-item-label>Sell on MOMS</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        class="q-mb-sm list_font text-h6"
        v-ripple
        style="border-radius: 15px"
      >
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        class="q-mb-sm list_font text-h6"
        v-ripple
        style="border-radius: 15px"
      >
        <q-item-section>
          <q-item-label>Contact</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        class="list_font text-h6"
        :class="user ? 'q-mb-sm' : 'q-mb-lg'"
        v-ripple
        style="border-radius: 15px"
      >
        <q-item-section>
          <q-item-label>About Us</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        class="q-mb-lg list_font text-h6"
        v-ripple
        style="border-radius: 15px"
        v-if="user"
        @click="logout()"
      >
        <q-item-section>
          <q-item-label>Logout</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-separator size="1px" class="q-mt-sm" />

    <!-- <q-list class="q-px-md"> -->
    <div class="bg-secondary">
      <div
        class="q-mr-md text-center q-py-xs text-weight-bold text-primary"
        style=""
      >
        ©MomsExpress
      </div>
    </div>
    <!-- </q-list> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: localStorage.getItem("userRole"),
      sellerToken: localStorage.getItem("sellerToken"),
      user: this.$store.getters["moduleExample/user"],
      buyerName: localStorage.getItem("buyerFullname"),
      buyerEmail: localStorage.getItem("buyerEmail"),
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("moduleExample/buyerLogout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.button {
  width: 40%;
}

@media screen and (max-width: 401px) {
  .list_font {
    font-size: 1rem;
  }
}
</style>
