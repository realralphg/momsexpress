<template>
  <q-list bordered padding class="list q-py-sm" separator>
    <q-item class="q-ml-sm">
      <q-item-section top thumbnail>
        <q-checkbox v-model="val" dense="" />
      </q-item-section>
      <q-item-section top thumbnail class="q-ml-none">
        <img
          :class="toggle === 'Disabled' ? 'disabled-img' : ''"
          src="https://cdn.quasar.dev/img/mountains.jpg"
        />
      </q-item-section>

      <q-item-section>
        <q-item-label
          :class="toggle === 'Disabled' ? 'disable-text' : ''"
          class="text-subtitle1 text-bold"
          ><span class="text-uppercase text">Sample</span> Black Dress
          <span class="text-weight-light text-subtitle2 q-ml-sm">0008</span>
        </q-item-label>
        <q-item-label class="q-my-xs">
          <q-toggle
            :label="toggle"
            color="green"
            dense
            size="1.7rem"
            :class="toggle === 'Disabled' ? 'text-secondary' : 'text-green'"
            false-value="Disabled"
            true-value="Enabled"
            v-model="toggle"
          />
          <span class="text-weight-light q-my-auto q-ml-xs"> In Stock</span>
        </q-item-label>
        <q-item-label caption>1 Option</q-item-label>
      </q-item-section>

      <q-item-section
        side
        top
        :class="toggle === 'Disabled' ? 'disable-text' : ''"
        class="text-h6 text-bold text-secondary"
      >
        <q-item-label>N5 000.00</q-item-label>
      </q-item-section>

      <q-item-section
        side
        top
        :class="toggle === 'Disabled' ? 'disable-text' : ''"
      >
        <q-item-label>
          <q-btn-dropdown
            color="secondary"
            outline
            label="Edit Product"
            no-caps=""
            class="bordered-btn text-caption text-bold"
            :class="toggle === 'Disabled' ? 'disable-text' : ''"
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
          </q-btn-dropdown></q-item-label
        >
      </q-item-section>

      <q-item-section side>
        <q-btn
          flat
          icon="chevron_right"
          to="/seller/product_detail"
          class="chevron_right"
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: "Product Item",
  data() {
    return {
      val: false,
      toggle: "Enabled",
    };
  },
};
</script>

<style scoped>
.list:hover {
  background-color: rgb(0, 0, 0, 0.1);
}

.disable-text {
  color: grey !important;
}

.disabled-img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.chevron_right:hover {
  background: none !important;
  outline: 0 !important;
}
</style>
