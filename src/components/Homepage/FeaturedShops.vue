<template>
  <div class="q-my-md" style="padding: 0 3%">



    <!-- Heading  -->
    <div class="row  justify-between q-mx-auto q-pl-md q-my-md q-py-sm" style="border-bottom: 2px solid #003348" >
      <h5 class="text-h5 text-bold q-my-auto text-primary homepage_heading_font">Featured Shops</h5>
      <q-btn color="primary" to="/shop" class="q-pr-none" label="View all" icon-right="chevron_right" flat size="0.7rem"/>

    </div>

    <div class="column q-col-gutter-sm" style="height: 50vh; width:100%; margin: 0 auto">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" @click="this.$router.push('/shop')">
        <div class="div1">
          <div class="absolute flex flex-center one items-center q-py-xl" >
            <h4 class="text-white text-bold text-h4 text-center shop_text q-my-none">Lorem Shop</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" @click="this.$router.push('/shop')">
        <div class="div2">
          <div class="absolute flex flex-center two  items-center q-py-xl" >
              <h4 class="text-white text-bold text-h4 text-center shop_text q-my-none">Lorem Shop</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 " @click="this.$router.push('/shop')">
        <div class="div3">
            <div class="absolute flex flex-center three items-center q-py-xl" >
              <h4 class="text-white text-bold text-h4 text-center shop_text q-my-none">Lorem Shop</h4>
            </div>
        </div>
      </div>
    </div>



  </div>


</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Rename',
  components:{

  },
  data(){
    return{

    }
  }


}
</script>

<style scoped>
.shit{
  height: 100%;
  background: red;
  border-radius: 4px;
}

.div1{
  background-image: url('/Homepage/books.jpg');
}

.div2{
  background-image: url('/Homepage/furniture.jpg');
}

.div3{
  background-image: url('/Homepage/laptop.jpg');
}

.one, .two, .three{
  display: none;
  background: hsl(0, 0%, 0%, 40%);
  height:100%;
  width:100%
}

.div1, .div2, .div3{
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  position: relative;
  cursor: pointer;
}

.div1:hover .one{
  display:flex;
}

.div2:hover .two{
  display:flex;
}

.div3:hover .three{
  display:flex;
}

@media screen and (max-width: 771px) {
    .one, .two, .three{
    display: block;
    background: hsl(0, 0%, 0%, 40%);
    height:50%;
    width:100%
  }

    .shop_text{
      font-size: 1.5rem;
      margin: auto 0;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }

  .div1:hover .one{
  display:block;
}

.div2:hover .two{
  display:block;
}

.div3:hover .three{
  display:block;
}
}

</style>


