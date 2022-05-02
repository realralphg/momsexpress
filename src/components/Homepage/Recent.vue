<template>
  <div class="q-my-lg bg-white" style="padding: 0 4%;">

    <div class="row  justify-between q-mx-auto q-my-md q-py-sm q-pl-md" style="border-bottom: 2px solid #00EAAB" >
      <h5 class="text-h5 text-bold q-my-auto text-primary homepage_heading_font">Newly Added</h5>
      <q-btn color="primary" to="/category" class="q-pr-none" label="View all"  flat icon-right="chevron_right"  size="0.7rem"/>

    </div>

   <div class="q-px-md row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap" style="overflow-x: hidden;" >
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
    name: 'Books',
    image: '/Homepage/books.jpg',
  },
   {
    name: 'Camera',
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
.my-card{
  width: 100%;;
  max-width: 220px;
  }
  .cards_container{
    display:flex;
    justify-content:center;
    padding:2rem;
  }
   .grid-boxes{
    height: 280px;
    width: 200px;
  }
  .image{
    height: 180px;


  }


  /* .main:hover{
   transform: scale(1.2, 1.2);
  } */

  @media screen and (max-width: 980px) {
    .grid-boxes{
    height: 220px;
    width: 180px;
  }
  .image{
    /* width: 150px; */
    height: 130px;
  }

  .text-h6{
    font-size: 1rem;
  }
  }

  .flip-card {
  background-color: transparent;
  width: 100%;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 170px;
  height: 170px;
  transition: transform 0.6s;
  /* transform-style: preserve-3d; */
}

.flip-card:focus {
    outline: 0;
}

.flip-card:hover .flip-card-inner,
.flip-card:focus .flip-card-inner{
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  /* width: 100%; */
  height: 100%;
  /* backface-visibility: hidden; */
}

.flip-card-front {
  /* background: linear-gradient(to left, #4364f7, #6fb1fc); */
  /* color: black; */
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flip-card-back {
  /* background: linear-gradient(to right, #4364f7, #6fb1fc); */
  /* color: white; */
  transform: rotateY(180deg);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}



</style>


