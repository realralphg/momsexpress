<template>

  <!-- Shop Text Section  -->
  <div class="relative-position">
    <!-- Background Carousel  -->
    <div>
      <q-carousel
        animated
        v-model="slide"
        infinite
        :autoplay="autoplay"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        style="height: 400px"
      >
        <q-carousel-slide :name="1" img-src="/images/black-friday-elements-assortment.jpg" />
        <q-carousel-slide :name="2" img-src="/images/black-headphones-digital-device.jpg" />
        <q-carousel-slide :name="3" img-src="/images/cyber-monday-retail-sales.jpg" />
      </q-carousel>
    </div>

    <div class="column text-center shop-text absolute-top" style="width: 100%; height:400px">
      <q-space/>
      <div>
        <h2 class="q-mb-none text-bold" >SHOP</h2>
        <h5 class="q-mt-none text-bold">Lorem Ipsum</h5>
      </div>
      <q-space/>
    </div>
  </div>





  <!-- Categories Section  -->
  <div class=" q-mx-auto q-my-xl Sticky q-px-xl" style="width:100%;">
    <h5 class="text-center text-bold q-mb-none text-primary">CATEGORIES</h5>
    <div class="story-container q-mx-auto  q-px-lg"   style="width:100%;">
      <q-card class="my-card q-mx-sm q-mt-md"  style="width:100px;  " v-for="image in pictures" :key="image.name">
        <Shopcategories :image="image.image" :name="image.name" />
      </q-card>
    </div>
    <div class="row q-my-xs">
      <q-space/>
      <q-btn color="primary" class="q-pr-none" label="View all" icon-right="chevron_right" flat size="0.7rem"/>
    </div>
  </div>


 <!-- Products section  -->
  <div class=" q-mx-auto q-pb-xl" style="width:90%">
    <q-infinite-scroll @load="onLoad" :offset="250" class="row justify-center">
      <div v-for="(item, index) in items" :key="index" class="caption" style="">
            <div class=" grid-boxes  q-mr-md q-mt-xl">
              <q-card flat bordered class="my-card bg-grey-1 grid-boxes" style="cursor:pointer"  @click="icon = true"  v-ripple>
                  <q-card-section>
                    <q-img style="height: 180px" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>

                        <div class="row items-center justify-between no-wrap q-my-md">
                          <div class="">
                          <div class="text-h6">Lorem Item</div>
                          <div class="text-subtitle2">N2000</div>
                        </div>
                        <div>
                          <p><span>Qty:</span> 5</p>
                        </div>
                      </div>

                  </q-card-section>
              </q-card>
          </div>
      </div>
    </q-infinite-scroll>
  </div>

   <!-- Product Modal  -->
  <q-dialog v-model="icon" >
      <q-card style="width: 90%; max-width: 70%;">
        <q-card-section class="row items-center q-pb-none">
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <Viewproduct />
        </q-card-section>
      </q-card>
    </q-dialog>
</template>

<script>
import { ref } from 'vue'
import Shopcategories from '../components/Shopcategories'
import Viewproduct from '../components/Viewproduct'

const images = [
  {
    name: 'Phones',
    image: "/images/phones.jpg"
  },
  {
    name: 'Camera',
    image: '/images/camera.jpg'
  },
  {
    name: 'Kitchen',
    image: '/images/kitchen.jpg'
  },
  {
    name: 'Light',
    image: '/images/lights.jpg'
  },
  {
    name: 'Shoes',
    image: '/images/shoes.png'
  },
  {
    name: 'Shirts',
    image: '/images/shirts.jpg'
  },
  {
    name: 'Furniture',
    image: '/images/furniture.jpg'
  },
   {
    name: 'Books',
    image: "/images/books.jpg"
  },
  {
    name: 'Glasses',
    image: '/images/glasses.jpg'
  },
  {
    name: 'TV',
    image: '/images/television.jpg'
  },
  {
    name: 'Watches',
    image: '/images/watch.jpg'
  },
  {
    name: 'Phones',
    image: '/images/phones.jpg'
  },
  {
    name: 'Socks',
    image: '/images/socks.jpg'
  },
  {
    name: 'Laptops',
    image: '/images/laptop.jpg'
  },
   {
    name: 'Speakers',
    image: "/images/speaker.jpg"
  },
  {
    name: 'Headset',
    image: '/images/headphones.jpg'
  },
  {
    name: 'Airpods',
    image: '/images/pods.jpg'
  },
  {
    name: 'Braces',
    image: '/images/bracelet.jpg'
  },
  {
    name: 'Wardrobe',
    image: '/images/wardrobe.jpg'
  },
  {
    name: 'Suits',
    image: '/images/suit.jpg'
  },
]

export default {
  components:{
    Shopcategories,
    Viewproduct
  },
  setup () {
    const items = ref([ {}, {}, {}, {}, {}, {}, {} ])

    return {
      pictures: images,
      slide: ref(1),
      autoplay: ref(true), items,
      onLoad (index, done) {
        setTimeout(() => {
          items.value.push({}, {}, {}, {}, {}, {}, {})
          done()
        }, 250)
      }
    }
  }
}
</script>






<style  scoped>

.shop-text{
  background: rgb(0, 0, 0, 0.6);
  color: white;
}
.Sticky{
  position: sticky;
  top: 0;
  z-index: 1000;
  background: white;
}
.my-card{
  /* width: 100%;
  max-width: 300px;
  float: left; */

  float: none;
display: inline-block;
        zoom: 1;

}
.story-container{
        /* height: 110px;
        wi
        padding: 10px 0; */

        width: 100%;
        /* height: 100px; */
        white-space: nowrap;
        position: relative;
        overflow-x: scroll;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;

        -ms-overflow-style: none; /* hiding the scrollbar for Internet Explorer, Edge */
        scrollbar-width: none; /* hiding the scrollbar for Firefox */
    }

    .story-container::-webkit-scrollbar {
        display: none; /* hiding the scrollbar for Chrome, Safari, and Opera */
    }
    .grid-boxes{
    height: 275px;
    width: 220px;
  }

</style>
