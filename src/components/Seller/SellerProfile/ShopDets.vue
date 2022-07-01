<template>
  <div class="text-bold text-h6 q-mb-lg">Shop Details</div>
  <q-form class="q-gutter-md">
    <q-input filled v-model="store.name" label="Shop Name" />
    <q-input filled v-model="store.phoneNumber" label="Shop Phone number" />

    <q-input filled v-model="store.bankAccountName" label="Bank Account Name" />

    <q-input
      filled
      v-model="store.bankAccountNumber"
      label="Bank Account Number"
    />

    <q-input filled v-model="store.bankName" label="Bank Name" />

    <div>
      <q-btn label="Update" @click="updateShopDetails()" color="primary" />
    </div>
  </q-form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      desc: "a",
      bankAccountName: "",
      bankName: "",
      bankAccountNumber: "",
      phoneNumber: null,
      store: "",
    };
  },
  methods: {
    updateShopDetails() {
      let data = {
        name: this.name,
        desc: this.desc,
        bankAccountName: this.bankAccountName,
        bankName: this.bankName,
        bankAccountNumber: this.bankAccountNumber,
        phoneNumber: this.phoneNumber,
      };
      this.$store.dispatch("moduleExample/updateShopDetails", data);
    },
    getSeller() {
      let id = localStorage.getItem("sellerId");
      this.$store
        .dispatch("moduleExample/getSingleSeller", id)
        .then((response) => {
          this.store = response.store;
          console.log(this.store);
        });
    },
  },
  mounted() {
    this.getSeller();
  },
};
</script>

<style scoped></style>
