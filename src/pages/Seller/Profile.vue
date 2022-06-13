<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">US Region</div>
              <div class="text-h5 q-mt-sm q-mb-xs">Mayur Patel</div>
              <div class="text-caption text-grey">
                Sales and Marketing Executive | Graduate and past committee |
                Keynote speaker on Selling and Recruiting Topics
              </div>
            </q-card-section>

            <q-card-section class="col-5 flex flex-center">
              <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/boy-avatar.png"
              />
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-section>
            Assessing clients needs and present suitable promoted products.
            Liaising with and persuading targeted doctors to prescribe our
            products utilizing effective sales skills.
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
            <BankDets />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import ShopDets from "src/components/Seller/SellerProfile/ShopDets.vue";
import AdditionalInfo from "src/components/Seller/SellerProfile/AdditionalInfo.vue";
import BankDets from "src/components/Seller/SellerProfile/BankDets.vue";
import Password from "src/components/Seller/SellerProfile/Password.vue";
export default {
  data() {
    return {
      user: {
        first_name: "Ikupolati",
        last_name: "Tobi",
        email: "tobi@moms.com",
        phone: "08012345678",
      },
    };
  },
  components: { ShopDets, AdditionalInfo, BankDets, Password },
};
</script>

<style scoped>
.flex-break {
  flex: 1 0 100% !important;
  width: 0 !important;
}
</style>
