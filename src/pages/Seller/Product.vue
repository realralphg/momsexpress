<template>
  <!-- Add New Product  -->
  <q-dialog v-model="icon">
    <q-card class="addProduct">
      <q-card-section class="row items-center q-pb-none">
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <Addproduct />
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-page-sticky position="bottom-right" style="z-index: 1" :offset="[18, 18]">
    <q-btn fab icon="add" @click="icon = true" color="primary" />
  </q-page-sticky>

  <q-page v-if="!products[0]" class="column flex-center">
    <div class="text-center text-primary text-h5 text-bold">
      No Products in Store
    </div>
    <!-- <q-icon name="add" size="3rem" color="primary" /> -->
  </q-page>

  <!-- Products Cards  -->
  <div class="q-mx-auto" v-if="products[0]" style="max-width: 90%">
    <div>
      <div class="container q-mb-xl margin q-mx-auto">
        <div
          class="card q-mt-xl q-mx-auto"
          v-for="product in products"
          :key="product.id"
        >
          <q-card flat bordered class="bg-grey-1 q-mx-auto">
            <q-card-section>
              <q-img style="height: 220px" :src="product.img[0].url"></q-img>
              <div class="row items-center no-wrap q-my-md">
                <div class="col">
                  <div class="text-h6">{{ product.name }}</div>
                  <div class="text-subtitle2 text-primary">
                    Sales:
                    <span class="text-black q-ml-sm">
                      0/{{ product.qtyInStore }}
                    </span>
                  </div>
                </div>

                <!-- Option Button  -->
                <div class="col-auto">
                  <q-btn color="grey-7" round flat icon="more_vert">
                    <q-menu cover auto-close>
                      <q-list>
                        <q-item clickable>
                          <q-item-section
                            @click="
                              this.$router.push(
                                `/seller/productDetail/${product._id}`
                              )
                            "
                            >Edit Item</q-item-section
                          >
                        </q-item>
                        <q-item clickable>
                          <q-item-section @click="deleteProduct(product._id)">
                            Delete Item</q-item-section
                          >
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Addproduct from "components/Seller/Addproduct.vue";

export default {
  name: "Products",
  components: {
    Addproduct,
  },
  data() {
    return {
      icon: ref(false),
      products: [],
      id: "",
    };
  },
  methods: {
    getProducts() {
      this.$store
        .dispatch("moduleExample/getSellerProducts")
        .then((response) => {
          this.products =
            this.$store.getters["moduleExample/getSellerProducts"];
        });
    },
    deleteProduct(id) {
      this.$store.dispatch("moduleExample/deleteProduct", id);
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.addProduct {
  width: 100%;
  max-width: 100%;
}
@media screen and (min-width: 1024px) {
  .addProduct {
    width: 70% !important;
  }
}
p {
  display: inline;
}

.my-menu-link {
  color: blue;
}

. {
  height: 320px;
  width: 250px;
  cursor: pointer;
}

.list-boxes {
  height: 50px;
  width: 100%;
  border: 2px solid blue;
  border-radius: 4px;
  padding: 3% 1.5%;
}

.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

@media screen and (max-width: 1175px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 870px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 831px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 620px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 430px) {
  .container {
    grid-template-columns: repeat(1, 80%);
    place-content: center;
  }
  .card {
  }
}

.card {
  width: 100%;
}

.title {
  visibility: visible;
}
</style>
