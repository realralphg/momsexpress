<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs">
      <!-- <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-h5 q-mt-sm q-mb-xs">{{ username }}</div>
            </q-card-section>

            <q-card-section class="col-5 flex flex-center">
              <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/boy-avatar.png"
              />
            </q-card-section>
          </q-card-section>

          <q-separator />
        </q-card>
      </div> -->

      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section>
            <ShopDets />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section>
            <AdditionalInfo />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section>
            <Password />
          </q-card-section>
        </q-card>
      </div>
    </div>
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
