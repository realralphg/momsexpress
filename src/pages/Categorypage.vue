<template>
  <div>
    <div class="row bg-white q-mt-sm">

      <!-- side bar with filter  -->

      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12" style="border-right: 1px solid lightgrey">
        <q-card class="q-mr-sm no-shadow">
          <q-card-section class="text-subtitle1 text-grey-8">
          Filter By
          </q-card-section>
          <transition-group
            appear
            enter-active-class="animated fadeInLeft"
          >
            <q-list v-for="item in filters_list" :key="item.label">
              <q-item-label class="text-weight-bolder text-grey-9 q-pt-md q-pb-sm" header>{{item.label}}</q-item-label>
              <q-item class="q-pa-none" v-for="it in item.items" :key="it.model" tag="label" v-ripple dense>
                <q-item-section side class="q-px-md text-caption">
                  <q-checkbox @input="searched_results=[],show_load_more=false,log_offset=0,do_search()" dense
                              v-model="it[it.model]">
                    {{it.label}}({{it.count}})
                  </q-checkbox>
                </q-item-section>
              </q-item>
              <q-item class="q-py-none text-weight-bold text-indigo text-caption cursor-pointer"
                      style="min-height: 10px">
                View All
              </q-item>
            </q-list>
          </transition-group>
        </q-card>
      </div>

      <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
        <div class="q-py-md q-px-lg row" style=" margin: 0 auto">



            <q-card
              class="my-card col-lg-3 col-md-4 col-sm-6 col-xs-6  q-my-md"
              v-for="product in products"
              :key="product.id"
              style="cursor:pointer"
            >
              <q-img :src='`Homepage/${product.image}`' class="image" @click="$router.push('/details')" />
              <q-card-section class="card">
                <q-btn
                  fab
                  color="primary"
                  icon="eva-shopping-cart-outline"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%);"
                  @click="addToCart()"
                />

                <div class="row no-wrap items-center">
                    <div class="col text-subtitle2 ellipsis-2-lines text-grey-10" style="max-width:80%" @click="$router.push('/details')">
                      {{product.title}}
                    </div>
                </div>
                <q-rating v-model="stars" :max="5" size="17px" color="orange-7"/>

              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="row q-my-sm  justify-between">
                  <div class="row">
                    <p class="q-my-auto text-bold text-h6"> {{ product.price }}</p>
                    <span class="q-my-auto text-subtitle3 text-grey-6 q-mx-sm" style="text-decoration:line-through"> {{product.price + product.price}}</span>
                  </div>
                  <q-chip color="primary" text-color="white" size="0.8rem"> -50% </q-chip>
                </div>



              </q-card-section>
            </q-card>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "category.vue",
    data() {
      return {
        products: [],
        product: null,
        stars: 4,
        class_val: "shadow-1 my-card",
        filters_list: [
          {
            "label": "Discount",
            "items": [
              {
                "Product": false,
                "count": 51,
                "label": "50% or more",
                "model": "Product"
              },
              {
                "Product": false,
                "count": 3,
                "label": "40% or more",
                "model": "Product"
              },
              {
                "Product": false,
                "count": 41,
                "label": "30% or more",
                "model": "Product"
              },
              {
                "Product": false,
                "count": 16,
                "label": "20% or more",
                "model": "Product"
              },
              {
                "Product": false,
                "count": 16,
                "label": "10% or more",
                "model": "Product"
              }
            ]
          },

          {
            "label": "Sleeve",
            "items": [
              {
                "Period": false,
                "count": 51,
                "label": "3/4 Sleeve",
                "model": "Period"
              },
              {
                "Period": false,
                "count": 3,
                "label": "Full Sleeve",
                "model": "Period"
              },
              {
                "Period": false,
                "count": 23,
                "label": "Half Sleeve",
                "model": "Period"
              },
              {
                "Period": false,
                "count": 65,
                "label": "Short Sleeve",
                "model": "Period"
              }
            ]
          },
          {
            "label": "Size",
            "items": [
              {
                "AssetType": false,
                "count": 51,
                "label": "XXS",
                "model": "AssetType"
              },
              {
                "AssetType": false,
                "count": 3,
                "label": "XS",
                "model": "AssetType"
              },
              {
                "AssetType": false,
                "count": 23,
                "label": "S",
                "model": "AssetType"
              },
              {
                "AssetType": false,
                "count": 65,
                "label": "M",
                "model": "AssetType"
              },
              {
                "AssetType": false,
                "count": 35,
                "label": "L",
                "model": "AssetType"
              },
              {
                "AssetType": false,
                "count": 23,
                "label": "XL",
                "model": "AssetType"
              },
              {
                "AssetType": false,
                "count": 12,
                "label": "XXL",
                "model": "AssetType"
              }
            ]
          }
        ]
      }
    },
    methods: {
      addToCart(){
        this.$store.dispatch('moduleExample/addProductToCart', {
          product: this.product,
          quantity: 1
        })
      }
    },

    mounted() {
      // return this.$store.state.products
       this.products = this.$store.getters['moduleExample/getProduct']
       console.log(this.products);
    },
    computed: {
      win_width() {
        return this.$q.screen.width - 59;
      },
      win_height() {
        return this.$q.screen.height - 0;
      }
    }
  }
</script>

<style scoped>
  .my-card {
    /* width: 100%;
    max-width: 250px; */
    /* height: 300px; */
  }
  .image{
    height: 150px;
    width: 100%;
  }
</style>
