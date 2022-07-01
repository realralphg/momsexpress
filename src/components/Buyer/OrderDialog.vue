<template>
  <q-card class="column full-height" style="width: 500px; max-width: 500px">
    <q-card-section>
      <div class="text-h6">Order (#{{ order.txn_id }})</div>
    </q-card-section>

    <q-card-section class="col q-pt-none text-subtitle1">
      <div class="row justify-between q-mx-md q-my-sm">
        <div class="text-bold">Store :</div>
        <div class="text-subtitle2 text-weight-light">
          {{ seller }} {{ seller.includes("shop") ? " " : "shop" }}
        </div>
      </div>
      <div class="row justify-between q-mx-md q-my-sm">
        <div class="text-bold">Item :</div>
        <div class="text-subtitle2 text-weight-light">
          {{ productName }}
        </div>
      </div>
      <div class="row justify-between q-mx-md q-my-sm">
        <div class="text-bold">Quantity :</div>
        <div class="text-subtitle2 text-weight-light">{{ quantity }}</div>
      </div>
      <div class="row justify-between q-mx-md q-my-sm">
        <div class="text-bold">Total Price :</div>
        <div class="text-subtitle2 text-weight-light">
          N {{ order.totalPrice }}
        </div>
      </div>
      <div class="row justify-between q-mx-md q-my-sm">
        <div class="text-bold">Transaction ref :</div>
        <div class="text-subtitle2 text-weight-light">{{ order.txn_ref }}</div>
      </div>
      <div class="row justify-between q-mx-md q-my-sm">
        <div class="text-bold">Transaction Status :</div>
        <div class="text-subtitle2 text-weight-light">
          {{ order.txn_status }}
        </div>
      </div>
      <div class="row justify-between q-mx-md q-my-sm">
        <div class="text-bold">Order Date :</div>
        <div class="text-subtitle2 text-weight-light">
          {{ date }}
        </div>
      </div>
    </q-card-section>

    <q-card-actions align="right" class="bg-white text-primary">
      <q-btn flat label="Close" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: ["order", "productName", "quantity", "seller", "date"],
};
</script>
