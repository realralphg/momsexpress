<template>
  <q-page class="flex flex-center">
    <paystack
      buttonClass="'button-class btn btn-primary'"
      buttonText="Pay Online"
      :publicKey="publicKey"
      :email="email"
      :amount="amount"
      :reference="reference"
      :onSuccess="onSuccessfulPayment"
      :onCanel="onCancelledPayment"
      :metadata="metadata"
    ></paystack>
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
      publicKey: "pk_test_285bb7525b2d3876efffce201f7a271d7c809839",
      amount: 1000000, //Expressed in lowest demonitation, so 1000kobo is equivalent to 10Naira
      email: "somteacodes@gmail.com",
      firstname: "Somtea", //optional field remember to pass as a prop of firstname if needed
      lastname: "Codes", //optional field remember to pass as a prop of lastname if needed
      metadata: {
        custom_fields: [
          {
            display_name: "Country",
            variable_name: "country_name",
            value: "Nigeria",
          },
          {
            display_name: "Cart Items",
            variable_name: "cart_items",
            value: "3 bananas, 12 mangoes",
          },
        ],
      },
    };
  },

  // computed
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
  // methods
  methods: {
    onSuccessfulPayment: function (response) {
      console.log(response);
    },
    onCancelledPayment: function () {
      console.log("Payment cancelled by user");
    },
  },
};
</script>
