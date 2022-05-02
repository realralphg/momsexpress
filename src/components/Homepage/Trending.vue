<template>
  <div class="q-my-lg" style="padding: 0 4%">

    <div class="row  justify-between q-mx-auto q-my-md q-pl-md q-py-sm" style="border-bottom: 2px solid #003348;">
      <h5 class="text-h5 text-bold q-my-auto text-primary homepage_heading_font">Trending Products</h5>
      <q-btn color="primary" to="/shop" class="q-pr-none" label="View all" icon-right="chevron_right" flat size="0.7rem"/>
    </div>

   <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap" style="overflow-x: hidden;">
          <div
            @click="$router.push('/details')"
            class="col-lg-2 col-md-2 col-sm-3 col-xs-4 cursor-pointer hover_border_grey text-left"
            v-for="image in pictures" :key="image.name"
          >
            <q-img
              style=""
              class="rounded-borders img"
              :src="image.image"
            >
            </q-img>
            <div>{{ image.name }}</div>
            <div class="text-caption text-weight-bold text-primary">Product Description</div>
            <div>
              <span>N2000</span
              ><span class="q-ml-sm text-grey-6" style="text-decoration: line-through"
                >N4000</span
              >
            </div>
          </div>
        </div>
  </div>


</template>

<script>
import { ref } from 'vue'

const images = [
  {
    name: 'Suit',
    image: '/Homepage/books.jpg',
  },
   {
    name: 'Female shoe',
    image: '/Homepage/camera.jpg',
  },
   {
    name: 'MacBook',
    image: '/Homepage/laptop.jpg',
  },
   {
    name: 'T-shirts',
    image: '/Homepage/shirts.jpg',
  },
   {
    name: 'Watch',
    image: '/Homepage/watch.jpg',
  },
  //  {
  //   name: 'Suit',
  //   image: '/Homepage/suit.jpg',
  // },
  //  {
  //   name: 'Wardrobe',
  //   image: '/Homepage/wardrobe.jpg',
  // },
  //  {
  //   name: 'Television',
  //   image: '/Homepage/television.jpg',
  // },
  //  {
  //   name: 'Socks',
  //   image: '/Homepage/socks.jpg',
  // },
  //  {
  //   name: 'Light',
  //   image: '/Homepage/Lights.jpg',
  // },
   {
    name: 'Speaker',
    image: '/Homepage/speaker.jpg',
  },
  //  {
  //   name: 'Pods',
  //   image: '/Homepage/pods.jpg',
  // },

]

export default {
  name: 'Rename',
  components:{

  },
  data(){
    return{
      pictures: images,
      icon: ref(false),
      latest_slide: 1
    }
  }


}
</script>

<style scoped>


div{

}
</style>


