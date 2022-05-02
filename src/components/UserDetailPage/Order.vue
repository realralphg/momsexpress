<template>
  <q-page class="padding">

      <div class="heading text-primary text-bold text-center q-mt-md"> ORDERS </div>

    <!-- Table Head  -->
      <div class="row justify-evenly text-center q-my-md q-pt-md text-bold text-subtitle1 head_text">
          <div class="col-2">Order ID</div>
          <div class="col-2">Order Date</div>
          <div class="col-1">Qty</div>
          <div class="col-2">Price</div>
          <div class="col-2">Status</div>
          <div class="col-2"> </div>
      </div>


       <div v-for="n in 10" :key="n" class="q-my-sm row justify-evenly text-center items-center bg-grey-3 body_text" style="">
          <div class="col-2 q-py-md">0001</div>
          <div class="col-2 q-py-md">1/1/2002</div>
          <div class="col-1 q-py-md">40</div>
          <div class="col-2 q-py-md">N20000</div>
          <div class="col-2 q-py-md">Completed</div>
          <div class="col-2"> <q-btn icon="more_horiz" class="icon" round :ripple="false" flat  /> </div>
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

  @media screen and (max-width: 601px) {
    .padding{
      padding: 0 5%;
    }
    .heading{
      /* margin-left: 0 !important; */
    }
  }

  @media screen and (max-width:421px) {
    .heading{
      font-size: 1.1rem;
    }

    .head_text{
      font-size: 0.84rem !important;
    }

    .body_text{
      font-size: 0.7rem;
    }

    .icon{
      font-size: 0.7rem !important;
    }
  }

</style>
