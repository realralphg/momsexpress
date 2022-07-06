<template>
  <q-page class="q-px-xl">
    <div class="secondary text-h4 text-bold q-my-sm">General Settings</div>

    <!-- <ProductItem v-for="n in 5" :key="n" /> -->
  </q-page>
</template>

<script>
import ShopDets from "src/components/Seller/SellerProfile/ShopDets.vue";
import AdditionalInfo from "src/components/Seller/SellerProfile/AdditionalInfo.vue";
import Password from "src/components/Seller/SellerProfile/Password.vue";
export default {
  data() {
    return {
      username: "",
      sellerStore: null,
    };
  },
  components: { ShopDets, AdditionalInfo, Password },
  methods: {},
};
</script>

<style scoped>
.flex-break {
  flex: 1 0 100% !important;
  width: 0 !important;
}
</style>
