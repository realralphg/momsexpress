<template>
  <q-page class="q-mb-md">
    <div class="heading text-primary text-bold text-center q-mt-md"> WISHLISTS </div>
        <div class="row justify-center q-mt-md q-mx-md  bg-grey-3" v-for="n in 4" :key="n" >
          <q-img class="col-lg-4 col-md-4 col-sm-3 col-xs-4"  src="Homepage/speaker.jpg" />
          <div class="col-lg-8 col-md-8 col-sm-9 col-xs-8 q-py-sm body_text column justify-between">
            <div>
                <div class="q-pl-md text-bold text-subtitle1 row items-center align-items justify-between">
                  <div>Lorem</div>
                  <q-btn icon="close" flat round dense  />
                </div>
                <div class="q-pl-md">Lorem description</div>
            </div>
            <div class="two row justify-between q-pl-md">
              <div class="">
                <div>Price</div>
                <div class="text-bold">N3000</div>
              </div>
              <q-btn label="Add to cart" class="button" color="primary" icon="shopping_cart" dense />
            </div>
          </div>
        </div>
  </q-page>
</template>

<script>

export default {
  data() {
      return {

      }
  },

}
</script>

<style scoped>
  .heading{
    font-size: 1.3rem;
  }

   @media screen and (min-width: 771px) {

    .heading{
      display: none;
  }
  }

  @media screen and (max-width: 771px) {
    .button{
      font-size: 0.8rem !important;
    }
  }

  @media screen and (max-width: 500px) {
    .button{
      font-size: 0.6rem !important;
    }
  }

   @media screen and (max-width: 370px) {
    .body_text{
      font-size: 0.7rem !important;
    }
  }
</style>
