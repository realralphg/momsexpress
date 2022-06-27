<template>
  <div class="text-bold text-h6 q-mb-lg">Shop Details</div>
  <q-form class="q-gutter-md">
    <q-input filled v-model="name" label="Shop Name" />
    <q-input filled v-model="phoneNumber" label="Shop Phone number" />

    <q-input filled v-model="bankAccountName" label="Bank Account Name" />

    <q-input filled v-model="bankAccountNumber" label="Bank Account Number" />

    <q-input filled v-model="bankName" label="Bank Name" />

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
      console.log(
        this.name,
        this.desc,
        this.bankAccountNumber,
        this.bankName,
        this.bankAccountName,
        this.phoneNumber
      );
      this.$store.dispatch("moduleExample/updateShopDetails", data);
    },
  },
};
</script>

<style scoped></style>
