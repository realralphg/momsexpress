<template>
  <q-page class="bg-grey-2 padding-footer">
    <div class="q-py-lg column flex-center q-pt-lg">
      <!-- <div class="text-center text-bold text-h6 text-uppercase q-my-md">
        Confirmation of Order
      </div> -->

      <q-card class="q-pa-lg card">
        <div class="text-subtitle1">
          <div class="q-mb-md">
            <div class="text-bold text-h6 text-primary text-center">
              Delivery Details
            </div>
          </div>
          <div class="text-subtitle1 text-capitalize q-mb-md">
            <div class="text-bold">{{ user.fullname }}</div>
            <div class="">09012345678</div>
          </div>

          <q-input
            filled
            v-model="name"
            placeholder="Please type in your address"
          />

          <!-- <div>Sabon Tasha, Kaduna South. Kaduna state, Nigeria</div> -->
        </div>
        <q-separator class="q-my-md" />

        <div class="row justify-between">
          <div class="text-subtitle1 text-bold">Items</div>

          <div class="text-subtitle1 text-bold">Quantity</div>
        </div>

        <div
          class="row justify-between"
          v-for="item in itemsInCart"
          :key="item.id"
        >
          <div>
            <div>
              {{ item.product.name }}
            </div>
          </div>
          <div>
            <div class="text-center">
              {{ item.quantity }}
            </div>
          </div>
        </div>

        <q-separator class="q-my-md" />

        <div class="q-my-md text-bold text-h6 row items-center justify-between">
          <div>TOTAL:</div>
          <div class="text-subtitle1 text-bold">N {{ amount / 100 }}</div>
        </div>

        <div class="row">
          <q-space />
          <paystack
            class="q-pa-sm text-subtitle1 text-primary paystack-btn"
            buttonClass="'button-class  btn btn-primary'"
            buttonText="Make Payment"
            :publicKey="publicKey"
            :email="email"
            :amount="amount"
            :reference="reference"
            :onSuccess="onSuccessfulPayment"
            :onCanel="onCancelledPayment"
            :metadata="metadata"
          ></paystack>
          <q-space />
        </div>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import paystack from "vue3-paystack";

export default {
  components: {
    paystack,
  },
  data() {
    return {
      name: "",
      itemsInCart: [],
      sellerId: "",
      discount: "0",
      user: this.$store.getters["moduleExample/user"],
      //Paystack
      publicKey: "pk_test_285bb7525b2d3876efffce201f7a271d7c809839",
      amount: localStorage.getItem("cartTotal") * 100,
      email: "momsexpress@gmail.com",
      firstname: "MomS",
      lastname: "Express",
      metadata: {
        custom_fields: [
          {
            display_name: "Country",
            variable_name: "country_name",
            value: "Nigeria",
          },
          // {
          //   display_name: "Cart Items",
          //   variable_name: "cart_items",
          //   value: "",
          // },
          {
            display_name: "Delivery Address",
            variable_name: "address",
            value: this.name,
          },
        ],
      },
    };
  },

  computed: {
    reference: function () {
      let text;
      let randomRef = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 15; i++)
        text += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );

      return randomRef;
    },
  },
  methods: {
    channels() {
      return ["card"];
    },
    onSuccessfulPayment: function (response) {
      console.log(response);
      let data = {
        cart: JSON.stringify(this.itemsInCart),
        sellerId: this.sellerId,
        totalPrice: this.amount,
        txnId: response.trans,
        txnReference: response.trxref,
        txnMessage: response.message,
        txnStatus: response.status,
        discount: this.discount,
        shippingAddress: this.name,
        trackingId: "1001111",
        trackingUrl: "https://www.google.com",
      };
      console.log(data.cart);
      console.log(JSON.parse(data.cart));
      this.$store.dispatch("moduleExample/createOrder", data);
      console.log("hello success");
      // localStorage.removeItem("cart");
    },
    onCancelledPayment: function () {
      console.log("Payment cancelled by user");
    },
    getCartDetailsLocalStorage() {
      let cart = localStorage.getItem("cart");
      cart = JSON.parse(cart);
      this.itemsInCart = cart;
      // let cartItemsStr = "";
      cart.forEach((item) => {
        this.sellerId = item.product.seller;
      });

      // cart.forEach((item, i) => {
      //   cartItemsStr +=
      //     item.product.name +
      //     `${
      //       i === cart.length - 2 ? " and " : i === cart.length - 1 ? "." : ", "
      //     }`;
      // });
      // this.metadata.custom_fields[1].value = cartItemsStr;
    },
  },
  mounted() {
    this.getCartDetailsLocalStorage();
    let cart = localStorage.getItem("cart");
    console.log(JSON.parse(cart));
  },
};
</script>

<style scoped>
.card {
  width: 50%;
}
.paystack-btn {
  width: 40%;
  border-radius: 8px;
  border: 1px solid #d56c33;
}

@media screen and (max-width: 830px) {
  .padding-footer {
    padding-bottom: 10%;
  }
}

@media screen and (max-width: 500px) {
  .padding-footer {
    padding-bottom: 15%;
  }
}

@media screen and (max-width: 725px) {
  .card {
    width: 70%;
  }
}

@media screen and (max-width: 520px) {
  .card {
    width: 80%;
  }
  .paystack-btn {
    width: 60%;
  }
}

@media screen and (max-width: 330px) {
  .card {
    width: 90%;
  }
  .paystack-btn {
    width: 80%;
  }
}
</style>
