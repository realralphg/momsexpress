<template>
    <!-- Add New Product  -->
     <q-dialog v-model="icon" >
      <q-card style="width: 100%; max-width: 100%;">
        <q-card-section class="row items-center q-pb-none">
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <Addproduct />
        </q-card-section>
      </q-card>
    </q-dialog>

<!-- Add new products button  -->

    <q-page-sticky position="bottom-right" style="z-index: 1" :offset="[18, 18]">
      <q-btn fab icon="add" @click="icon = true" color="primary" />
    </q-page-sticky>

    <!-- Products Cards  -->
    <div class=" q-mx-auto" style="max-width: 90%">
        <div>
          <!-- <q-card-section> -->
            <div class="pro row q-mb-xl margin  q-mx-auto ">

              <div class="col-4 grid-boxes q-mt-xl q-mx-auto" v-for="n in 8" :key="`lg-${n}`">

                <q-card flat bordered class="my-card bg-grey-1 grid-boxes">
                    <q-card-section >
                      <q-img style="height: 220px" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
                      <div class="row items-center no-wrap q-my-md">
                        <div class="col">
                          <div class="text-h6">Lorem Item</div>
                          <div class="text-subtitle2 text-primary"> Sales: <span class="text-black q-ml-sm"> 20/40 </span> </div>
                        </div>

                        <!-- Option Button  -->
                        <div class="col-auto">
                          <q-btn color="grey-7" round flat icon="more_vert">
                            <q-menu cover auto-close>
                              <q-list>
                                <q-item clickable>
                                  <q-item-section @click="this.$router.push('/seller/productDetail')" >Edit Item</q-item-section>
                                </q-item>
                                <q-item clickable>
                                  <q-item-section>Delete Item</q-item-section>
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

          <!-- </q-card-section> -->
        </div>

    <!-- </q-list> -->
  </div>










</template>

<script>

import { ref } from 'vue'
import Addproduct from 'components/Seller/Addproduct.vue'

export default {
  name: 'Products',
  components: {
    Addproduct
  },
  setup(){
    return{
      icon: ref(false),
       lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    }
  }
}
</script>

<style scoped>

  p{
    display: inline;
  }

  .my-menu-link {
    color: blue
}

   .grid-boxes{
    height: 320px;
    width: 250px;
    cursor: pointer;
  }

  .list-boxes{
    height: 50px;
    width: 100%;
    border: 2px solid blue;
    border-radius: 4px;
    padding: 3% 1.5%;
  }



  .pro{
    width: 100%;
  }

  .title{
  visibility: visible;
}




</style>
