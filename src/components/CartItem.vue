<template>
  <div class="test row q-mt-sm q-py-xs q-px-sm">
    <q-img class="col-4 image" :src="`Homepage/${item.product.image}`" />

    <div class="col-8 column q-pb-md justify-between">
      <div>
        <div
          class="q-pl-md text-bold text-subtitle1 row items-center align-items justify-between"
        >
          <div>{{ item.product.title }}</div>
          <q-btn icon="close" flat round dense @click="deleteProduct()" />
        </div>

        <div class="q-pl-md reduce_text" style="width: 80%">
          {{ item.product.description }}
        </div>
      </div>

      <div class="two row justify-between q-pl-md">
        <div class="col-3 reduce_text">
          <div>Price</div>
          <div class="text-bold">{{ item.product.price * item.quantity }}</div>
          <!-- <p>{{ item.quantity }}</p> -->
        </div>

        <div class="row col-9 justify-end">
          <q-btn
            icon="remove"
            @click="decrement()"
            size="1rem"
            :disable="item.quantity <= 1"
            class="q-mr-sm button"
            round
            dense
            flat
            color="primary"
          />
          <input v-model="item.quantity" class="text-center" />
          <q-btn
            icon="add"
            @click="increment()"
            size="1rem"
            class="q-ml-sm button"
            round
            dense
            flat
            color="primary"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CartItem",
  props: ["item"],
  data() {
    return {
      num: this.item.quantity,
      total: ref(0),
    };
  },
  methods: {
    increment() {
      this.$emit("increment");
    },
    decrement() {
      this.$emit("decrement");
    },
    deleteProduct() {
      this.$emit("delete");
    },
  },
  computed: {},
  mounted() {
    // console.log(this.item)
  },
};
</script>

<style scoped>
.image {
  height: 115px;
  margin: auto 0;
}
.test {
  border: 1px solid rgb(128, 128, 128, 0.3);
  /* height: 25vh; */
}

input {
  width: 25%;
  /* height: 50%; */
  margin: auto 0;
}

@media screen and (max-width: 451px) {
  .button {
    font-size: 0.7rem !important;
  }
  input {
    width: 20%;
  }
  .reduce_text {
    font-size: 0.8rem !important;
  }
}
</style>
