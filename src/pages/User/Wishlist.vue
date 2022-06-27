<template>
  <q-page
    v-if="!products[0]"
    style="margin: 0 auto"
    class="column flex-center items-center"
  >
    <div class="text-center text-primary text-h5 text-bold">
      No Item in Wishlist
    </div>
    <q-icon name="favorite_outline" size="3rem" color="primary" />
  </q-page>
  <!-- <div class="master">
    <div class="q-py-md card-container">
      <div
        class="bg-white card text-left"
        v-for="product in products"
        :key="product._id"
      >
        <div class="main" @click="this.$router.push(`/details/${product._id}`)">
          <q-img
            class="rounded-borders img"
            :src="product.img"
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
                  color="orange-7"
                />
                <span class="q-my-auto q-ml-sm text-right text-caption"
                  >(4.8)</span
                >
              </div>
              <q-checkbox
                v-model="val"
                checked-icon="favorite"
                keep-color
                unchecked-icon="favorite_border"
                class="favorite-btn"
                @click="deleteFromWishlist(product._id)"
              />
            </div>
            <div
              class="text-caption text-weight-bold text-grey ellipsis-2-lines"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              repellat consequuntur, laudantium eum, voluptate nam nemo minima
              qui aspernatur mollitia tenetur velit, esse maxime sapiente? Id
              iste placeat molestiae ipsam!
            </div>
            <div class="q-my-xs">
              <span class="text-bold">N{{ product.price }}</span
              ><span
                class="q-ml-sm text-grey-6"
                style="text-decoration: line-through"
                v-if="discount !== 0"
                >{{ discount }}</span
              >
            </div>
            <div class="row justify-between">
              <q-space />
              <q-btn
                outline
                rounded
                size="0.6rem"
                color="primary"
                class="q-py-none q-my-sm add-btn"
                @click="addToCart(product)"
              >
                <q-icon name="add" />
                Cart
              </q-btn>
              <q-space />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { ref } from "vue";

export default {
  name: "Recent",
  data() {
    return {
      products: [],
      stars: 5,
      val: ref(true),
    };
  },
  methods: {
    // getWishlists() {
    //   this.products = this.$store.getters["moduleExample/getWishlist"];
    //   this.products = JSON.parse(JSON.stringify(this.products));
    //   console.log(this.products);
    // },
    // addToCart(product) {
    //   this.$store.dispatch("moduleExample/addProductToCart", {
    //     product: product,
    //     quantity: 1,
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
    //   this.products = products;
    //   this.setCart();
    // },
  },
  mounted() {
    // this.getWishlists();
  },
};
</script>

<style scoped>
.main {
  cursor: pointer;
}
.add-btn {
  height: 15px;
  margin: auto 0;
}

.card {
  border-radius: 10px;
}
.img {
  height: 150px;
  width: 100%;
}
.master {
  padding: 0 4%;
}
.card-container {
  display: grid;
  gap: 8px;
  grid-auto-flow: row;
  grid-template-columns: repeat(5, 1fr);
  position: relative;
  justify-content: center;
}

.card-container::-webkit-scrollbar {
  display: none; /* hiding the scrollbar for Chrome, Safari, and Opera */
}
@media screen and (min-width: 1024px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 975px) {
  .card-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 777px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 585px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 360px) {
  .card-container {
    grid-template-columns: repeat(1, 70%);
  }
  .card {
    margin: 0 auto !important;
  }
}
</style>
