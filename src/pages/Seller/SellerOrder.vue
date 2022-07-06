<template>
  <q-page class="q-px-xl">
    <div class="secondary text-h4 text-bold q-my-sm">Orders</div>

    <div class="row justify-between q-mb-md">
      <q-btn-dropdown
        color="secondary"
        outline
        label="Filter"
        class="bordered-btn"
      >
        <q-list>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Photos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Videos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Articles</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-input
        placeholder="Search Your Product Name"
        class="search"
        dense
        outlined
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <!-- <ProductItem v-for="n in 5" :key="n" /> -->
  </q-page>
</template>

<script>
import { ref } from "vue";
import OrderDialog from "src/components/Seller/OrderDialog.vue";

export default {
  components: {
    OrderDialog,
  },
  data() {
    return {
      orders: [],
      open: ref(false),
      order: {},
      cart: {},
      buyer: "",
      skeleton: ref(true),
    };
  },

  // methods: {
  //   getSingleSellerOrder(id) {
  //     this.$store
  //       .dispatch("moduleExample/getSingleSellerOrder", id)
  //       .then((response) => {
  //         this.order = response;
  //         this.cart = JSON.parse(response.cart)[0];
  //         this.getSinglePerson(response.buyer);
  //       });
  //   },
  //   getSinglePerson(id) {
  //     this.$store
  //       .dispatch("moduleExample/getSingleSeller", id)
  //       .then((response) => {
  //         this.buyer = response;
  //       });
  //   },
  //   getOrders() {
  //     this.$store.dispatch("moduleExample/getSellerOrders").then((response) => {
  //       this.orders = response;
  //       if (!response[0]) {
  //         this.skeleton = false;
  //       }
  //       this.skeleton = false;
  //       console.log(this.orders);
  //     });
  //   },
  //   item(item) {
  //     let a = JSON.parse(item);
  //     return a.quantity;
  //   },
  // },
  // mounted() {
  //   this.getOrders();
  // },
};
</script>

<style scoped>
.hide-skeleton {
  display: none;
}
.heading {
  font-size: 1.3rem;
}

@media screen and (min-width: 771px) {
  .heading {
    display: none;
  }
}

@media screen and (max-width: 601px) {
  .padding {
    padding: 0 5%;
  }
}

@media screen and (max-width: 421px) {
  .heading {
    font-size: 1.1rem;
  }

  .head_text {
    font-size: 0.84rem !important;
  }

  .body_text {
    font-size: 0.7rem;
  }

  .icon {
    font-size: 0.7rem !important;
  }
}
</style>
