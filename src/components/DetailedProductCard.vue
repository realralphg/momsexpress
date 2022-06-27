<template>
  <q-img
    class="rounded-borders img"
    :src="product.img[0].url"
    loading="eager"
    @click="this.$router.push(`/details/${product._id}`)"
  >
  </q-img>
  <div class="q-pa-sm card">
    <div class="row justify-between relative-position">
      <div>
        <div
          class="text-subtitle1 text-bold product-title"
          @click="this.$router.push(`/details/${product._id}`)"
        >
          {{ product.name }}
        </div>
        <q-rating
          class=""
          v-model="stars"
          :max="5"
          size="0.7rem"
          color="primary"
          disable
        />
        <span class="q-my-auto q-ml-sm text-right text-caption">(4.8)</span>
      </div>
      <!-- <q-checkbox
        v-model="val"
        checked-icon="favorite"
        keep-color
        unchecked-icon="favorite_border"
        class="favorite-btn"
        @click="addToWishlist(product), (val = true)"
      /> -->
    </div>
    <div class="text-caption text-weight-bold text-grey ellipsis-2-lines">
      {{ product.desc.color }}
    </div>
    <div class="q-my-xs">
      <span class="text-bold">N{{ product.price }}</span
      ><span
        class="q-ml-sm text-grey-6"
        style="text-decoration: line-through"
        v-if="discount !== 0"
        >N{{ discount }}</span
      >
      <q-chip
        size="0.5rem"
        color="primary"
        class="text-white q-ml-xs q-my-auto"
      >
        {{ product.desc.size }}%
      </q-chip>
    </div>
    <div class="row justify-between q-mt-md">
      <q-space />
      <q-btn
        outline
        rounded
        size="0.6rem"
        color="primary"
        class="q-py-none add-btn"
        @click="addToCart(product)"
      >
        <q-icon name="add" />
        Cart
      </q-btn>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["product"],
  computed: {
    discount() {
      let discount =
        this.product.price * (this.product.desc.size / 100) +
        this.product.price;
      return discount;
    },
  },
  data() {
    return {
      stars: 4,
      val: ref(false),
    };
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("moduleExample/addProductToCart", {
        product: product,
        quantity: 1,
      });
      // console.log(this.$store);
    },
    // addToWishlist(product) {
    //   console.log("added");
    //   console.log(product);
    //   this.$store.dispatch("moduleExample/addProductToWishlist", {
    //     product: product,
    //   });
    // },
    // deleteFromWishlist(id) {
    //   console.log("delete");
    //   console.log(id);
    //   let products = this.$store.state.moduleExample.wishlist.filter(
    //     (item) => item.product._id !== id
    //   );
    //   console.log(products);
    //   this.$store.dispatch("moduleExample/setCart", this.products);
    // },
  },
};
</script>

<style scoped>
.add-btn {
  height: 15px;
  margin: auto 0;
}

.card {
  border-radius: 12px;
}
.img {
  height: 150px;
  width: 100%;
}

@media screen and (max-width: 335px) {
  .favorite-btn {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-10%);
  }
}
</style>
