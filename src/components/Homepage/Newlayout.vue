<template>



  <div class="main row">
      <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <div
            @click="$router.push('/details')"
            class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover_border_grey text-left"
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







   <div class="main row">
      <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <div
            @click="$router.push('/details')"
            class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover_border_grey text-left"
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
    data(){
      return{
        pictures: images,
        latest_slide: 1,
        latest_slides: 1
      }
    }
}
</script>

<style scoped>
  .main{
    height: 40vh;
    /* background: red; */
    width: 80%;
    margin: 2% auto;
  }

  .img{
    /* width: 80%;
    height: 100%; */
  }
</style>
