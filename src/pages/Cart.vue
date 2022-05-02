<template>

    <div class="row" style="width: 90%; margin: 0 auto; position: relative">
        <div class="column q-col-gutter-sm col-lg-8 col-md-8 col-sm-12 col-xs-12" style="margin: 0 auto; min-height: 70vh">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="shit column  q-py-lg bg-grey-1">

              <CartItem v-for="item in products" :key="item.id" :item="item" @hello="deleteProduct(id)" />

            </div>
          </div>
    </div>

    <div class="column q-col-gutter-sm col-lg-4 col-md-4 col-sm-12 col-xs-12" style="  margin: 0 auto;position:sticky; top: 16%">
      <div class="col-lg-8 col-md-6 col-sm-6 col-xs-12">
        <div class="q-py-md q-px-xl shit bg-grey-1 ">
            <div class="text-h6 text-center text-bold q-my-xs">Total Price Details</div>
            <div class="row justify-between"> <span>No. of Items</span> <span> 4 </span> </div>
            <div class="row justify-between"> <span>Price</span> <span> N2000 </span> </div>
            <div class="row justify-between"> <span>Shipping Fee</span> <span> N0 </span> </div>
            <q-separator spaced />
            <div class="row justify-between"> <span>Total Amount</span> <span> N200 </span> </div>
            <q-btn label="Checkout" to="/checkout" push color="primary" text-color="secondary" style="width:100%" class="q-my-sm"  />
            <div class="text-caption"> Lorem ipsium and estimated delivery date or period</div>
        </div>
      </div>
      <!-- <div class="col-lg-4 col-md-6 col-sm-6 col-xs-0 " style="">
        <div class="shit bg-grey-1">

        </div>
      </div> -->
    </div>
    </div>

</template>

<script>
import { ref } from "vue"
import CartItem from "src/components/CartItem.vue"

export default {
  name: 'Cart',
  components:{
    CartItem
  },
  data(){
    return{
      cart: ref(1),
      products: []
    }
  },
  methods:{
    deleteProduct(id){
      let products = this.products.filter(item => item.id !== id);
      this.products = products;
    },
  },
   mounted() {
      // return this.$store.state.products
       this.products = this.$store.getters['moduleExample/getProduct']
       console.log(this.products);
    },


}
</script>

<style scoped>

.row > div {
  padding: 0.5%;
  }

.row + .row {
  margin-top: 1rem; }

.shit{
  /* height: 100%; */
  /* background: red; */
  border-radius: 4px;
}



</style>
