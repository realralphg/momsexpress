<template>
    <div style="padding: 2% 5%" class="row text-center">
        <div class="col-lg-1 col-md-1 col-sm-2 col-xs-2 q-my-md q-mx-sm" v-for="n in 12" :key="n" style="cursor:pointer">
           <div>
              <q-btn round class="avatar-container" to="/category">
                  <q-avatar size = "60px">
                      <img src = "Homepage/laptop.jpg" />
                  </q-avatar>
              </q-btn>
          </div>
          Category
        </div>
    </div>


    <Trending />


</template>
<script>
import Trending from 'components/Homepage/Trending.vue'
export default {
  components:{
    Trending
  }
}
</script>

<style scoped>

</style>
