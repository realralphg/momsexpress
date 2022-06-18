<template>
  <q-page class="bg-grey-2">
    <div class="row" style="height: 100%">
      <div
        class="col-lg-2 col-md-2 col-sm-12 col-xs-12"
        style="border-right: 1px solid lightgrey"
      >
        <q-card class="q-mr-sm no-shadow">
          <q-expansion-item
            expand-separator
            label="Filter By"
            class="text-grey-8 q-pa-md"
            :default-opened="value"
          >
            <div>
              <q-card-section>
                <transition-group
                  appear
                  enter-active-class="animated fadeInLeft"
                >
                  <q-list v-for="item in filters_list" :key="item.label">
                    <q-item-label
                      class="text-weight-bolder text-grey-9 q-pt-md q-pb-sm"
                      header
                      >{{ item.label }}</q-item-label
                    >
                    <q-item
                      class="q-pa-none"
                      v-for="it in item.items"
                      :key="it.model"
                      tag="label"
                      v-ripple
                      dense
                    >
                      <q-item-section side class="q-px-md text-caption">
                        <q-checkbox
                          @input="
                            (searched_results = []),
                              (show_load_more = false),
                              (log_offset = 0),
                              do_search()
                          "
                          dense
                          v-model="it[it.model]"
                        >
                          {{ it.label }}({{ it.count }})
                        </q-checkbox>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </transition-group>
              </q-card-section>
            </div>
          </q-expansion-item>
        </q-card>
      </div>

      <div class="bg-grey-2 col-lg-10 col-md-10 col-sm-12 col-xs-12">
        <!-- <div class="text-h4 text-primary text-bold q-px-md q-pt-md">
          {{ productName }}
        </div> -->
        <div class="q-py-md card-container" style="margin: 0 auto">
          <div
            class="bg-white col-lg-2 col-md-2 col-sm-3 col-xs-4 card text-left"
            v-for="product in products"
            :key="product.id"
          >
            <DetailedProductCard :product="product" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import DetailedProductCard from "../../components/DetailedProductCard.vue";

export default {
  name: "category.vue",
  data() {
    return {
      value: window.innerWidth >= 1024 ? true : false,
      products: [],
      productName: "",

      class_val: "shadow-1 my-card",
      filters_list: [
        {
          label: "Discount",
          items: [
            {
              Product: false,
              count: 51,
              label: "50% or more",
              model: "Product",
            },
            {
              Product: false,
              count: 3,
              label: "40% or more",
              model: "Product",
            },
            {
              Product: false,
              count: 41,
              label: "30% or more",
              model: "Product",
            },
            {
              Product: false,
              count: 16,
              label: "20% or more",
              model: "Product",
            },
            {
              Product: false,
              count: 16,
              label: "10% or more",
              model: "Product",
            },
          ],
        },
      ],
    };
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch("moduleExample/addProductToCart", {
        product: this.products[id - 1],
        quantity: 1,
      });
    },
    getProducts() {
      this.$store
        .dispatch("moduleExample/getSingleCategory", this.productName)
        .then((response) => {
          console.log(response);
          this.products = response;
        });
    },
  },
  mounted() {
    let route = location.href.split("category/");
    this.productName = route[1];
    // let b = this.productName.split("%20");
    // let c = "";
    // for (let a of b) {
    //   c = a;
    //   console.log(c);
    // }
    // console.log(b);
    // this.$store.dispatch("moduleExample/getProductsLocal");
    this.getProducts();
  },
  components: { DetailedProductCard },
};
</script>

<style scoped>
.card-container {
  padding: 2%;
  display: grid;
  gap: 8px;
  grid-auto-flow: row;
  grid-template-columns: repeat(5, 1fr);
}

@media screen and (max-width: 830px) {
  .card-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 650px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }

  .add-btn {
    height: 10px;
    margin: auto 0;
  }
}

@media screen and (max-width: 470px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .product-title {
    font-size: 0.9rem !important;
  }
}

.scroll {
  height: 60vh;
}
</style>
