<template>
  <div class="row">
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
          <q-scroll-area class="scroll">
            <q-card>
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
                    <q-item
                      class="q-py-none text-weight-bold text-indigo text-caption cursor-pointer"
                      style="min-height: 10px"
                    >
                      View All
                    </q-item>
                  </q-list>
                </transition-group>
              </q-card-section>
            </q-card>
          </q-scroll-area>
        </q-expansion-item>
      </q-card>
    </div>

    <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
      <div class="shop_img relative-position">
        <div
          class="text-primary text-h4 text-bold text-center shop_name bg-white absolute-top"
        >
          <p class="q-my-auto absolute-center">Lorem Shop</p>
        </div>
      </div>

      <div class="q-py-md row q-gutter-md" style="margin: 0 auto">
        <q-card
          class="my-card col-lg-3 col-md-3 col-sm-2 col-xs-12 content-center"
          v-for="n in 17"
          :key="n"
          style="cursor: pointer"
        >
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="card">
            <q-btn
              fab
              color="primary"
              icon="eva-shopping-cart-outline"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
            />

            <div class="row no-wrap items-center">
              <div
                class="col text-subtitle2 ellipsis-2-lines text-grey-10"
                style="max-width: 80%"
              >
                Benling C200-BLK Smartwatch (Black Strap Free Size)
              </div>
            </div>
            <q-rating v-model="stars" :max="5" size="17px" color="orange-7" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="row q-my-sm justify-between">
              <div class="row">
                <p class="q-my-auto text-bold text-h6">N2000</p>
                <span
                  class="q-my-auto text-subtitle3 text-grey-6 q-mx-sm"
                  style="text-decoration: line-through"
                >
                  N4000</span
                >
              </div>
              <q-chip color="primary" text-color="white" size="0.8rem">
                -50%
              </q-chip>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: window.innerWidth >= 1024 ? true : false,
      window: {
        width: 0,
        height: 0,
      },
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

        {
          label: "Sleeve",
          items: [
            {
              Period: false,
              count: 51,
              label: "3/4 Sleeve",
              model: "Period",
            },
            {
              Period: false,
              count: 3,
              label: "Full Sleeve",
              model: "Period",
            },
            {
              Period: false,
              count: 23,
              label: "Half Sleeve",
              model: "Period",
            },
            {
              Period: false,
              count: 65,
              label: "Short Sleeve",
              model: "Period",
            },
          ],
        },
        {
          label: "Size",
          items: [
            {
              AssetType: false,
              count: 51,
              label: "XXS",
              model: "AssetType",
            },
            {
              AssetType: false,
              count: 3,
              label: "XS",
              model: "AssetType",
            },
            {
              AssetType: false,
              count: 23,
              label: "S",
              model: "AssetType",
            },
            {
              AssetType: false,
              count: 65,
              label: "M",
              model: "AssetType",
            },
            {
              AssetType: false,
              count: 35,
              label: "L",
              model: "AssetType",
            },
            {
              AssetType: false,
              count: 23,
              label: "XL",
              model: "AssetType",
            },
            {
              AssetType: false,
              count: 12,
              label: "XXL",
              model: "AssetType",
            },
          ],
        },
      ],
    };
  },
  // created() {
  //       window.addEventListener('resize', this.handleResize);
  //       this.handleResize();
  //       // closeMe();
  //   },
  //   destroyed() {
  //       window.removeEventListener('resize', this.handleResize);
  //   },
  //   methods: {
  //       handleResize() {
  //           this.window.width = window.innerWidth;
  //           this.window.height = window.innerHeight;
  //       }
  //   },
  // watch: {
  //  handleResize() {
  //     if(this.window.width <= 1025){
  //       this.value === false
  //       alert('Hello')
  //     }
  //   }
  // }
};
</script>

<style scoped>
.scroll {
  height: 60vh;
}

.shop_img {
  border-radius: 8px;
  margin: 0 auto;
  width: 100%;
  height: 20vh;
  background: url("/Homepage/black-friday-elements-assortment.jpg");
  background-size: cover;
  background-position: center;
  z-index: 1;
}
.shop_name {
  height: 100%;
  width: 40%;
  border-radius: 8px 0 0 8px;
  /* border: 2px solid #00EAAB; */
  border-top: none;
  opacity: 0.7;
}
.my-card {
  width: 100%;
  max-width: 18%;
}

/* @media screen and (max-width: 1025px) {

    .scroll{
      height: 15vh
    }

  } */

@media screen and (max-width: 800px) {
  .my-card {
    max-width: 29%;
    width: 100%;
  }
}

@media screen and (max-width: 575px) {
  .my-card {
    max-width: 40%;
  }
}

@media screen and (max-width: 410px) {
  .my-card {
    max-width: 80%;
  }
}
</style>
