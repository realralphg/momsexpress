<template>
  <q-page class="padding">
    <!-- <div class="heading text-primary text-bold text-center q-mt-md">ORDERS</div> -->

    <!-- Table Head  -->
    <div
      class="row justify-evenly text-center q-my-md q-pt-md text-bold text-subtitle1 head_text"
    >
      <div class="col-2">Order ID</div>
      <div class="col-2">Item</div>
      <div class="col-1">Qty</div>
      <div class="col-2">Price</div>
      <div class="col-2">Status</div>
      <div class="col-2"></div>
    </div>

    <q-page
      v-if="!orders[0] && skeleton === false"
      style="margin: 0 auto"
      class="column flex-center"
    >
      <div class="text-center text-primary text-h5 text-bold">
        No Orders yet
      </div>
      <q-icon name="shopping_cart" size="3rem" color="primary" />
    </q-page>

    <div :class="skeleton === false ? 'hide-skeleton' : ''">
      <q-skeleton
        v-model="skeleton"
        type="rect"
        class="q-mx-sm q-my-md"
        height="50px"
        v-for="n in 7"
        :key="n"
      />
    </div>

    <div
      v-show="orders[0]"
      v-for="order in JSON.parse(JSON.stringify(orders))"
      :key="order._id"
      class="q-my-sm row justify-evenly text-center items-center bg-grey-3 body_text"
      style=""
    >
      <div class="col-2 q-py-md">{{ order.txn_id }}</div>
      <div class="col-2 q-py-md">
        {{ JSON.parse(order.cart)[0].product.name }}
      </div>
      <div class="col-1 q-py-md">
        {{ JSON.parse(order.cart)[0].quantity }}
      </div>
      <div class="col-2 q-py-md">{{ order.totalPrice }}</div>
      <div class="col-2 q-py-md text-orange">{{ order.shipStatus }}</div>
      <div
        @click="(open = true), getSingleSellerOrder(order._id)"
        class="col-2 text-caption underline"
      >
        details
        <!-- <q-btn icon="more_horiz" class="icon" round :ripple="false" flat /> -->
      </div>
    </div>
  </q-page>

  <q-dialog v-model="open" full-height>
    <OrderDialog :order="order" :cart="cart" :buyer="buyer" />
  </q-dialog>
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

  methods: {
    getSingleSellerOrder(id) {
      this.$store
        .dispatch("moduleExample/getSingleSellerOrder", id)
        .then((response) => {
          this.order = response;
          this.cart = JSON.parse(response.cart)[0];
          this.getSinglePerson(response.buyer);
        });
    },
    getSinglePerson(id) {
      this.$store
        .dispatch("moduleExample/getSingleSeller", id)
        .then((response) => {
          this.buyer = response;
        });
    },
    getOrders() {
      this.$store.dispatch("moduleExample/getSellerOrders").then((response) => {
        this.orders = response;
        if (!response[0]) {
          this.skeleton = false;
        }
        this.skeleton = false;
        console.log(this.orders);
      });
    },
    item(item) {
      // console.log(JSON.parse(item));
      let a = JSON.parse(item);
      return a.quantity;
    },
  },
  mounted() {
    this.getOrders();
  },
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
