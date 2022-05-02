<template>
    <div class="row items-center q-mx-sm q-mb-xl">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-sm q-px-xl">
          <div class="row  justify-between q-mx-auto q-px-md" >
            <p class="text-h5 text-bold q-my-auto text-primary">New Products</p>
            <q-btn color="primary" to="/shop" class="q-pr-none" label="View all" icon-right="chevron_right" flat size="0.7rem"/>

          </div>
          <!-- <q-carousel
            v-model="trending_slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            navigation
            padding
            arrows
            height="260px"
            class="rounded-borders"
          > -->
            <!-- <q-carousel-slide
              v-for="(val, idx) in [1, 2, 3]"
              :name="val"
              :key="idx"
              class="column no-wrap"
            > -->
              <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img
                  @click="$router.push('/category')"
                  v-for="n in 4" :key="n"
                  style="border:1px solid lightgrey;"
                  class="rounded-borders col-lg-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer full-height"
                  src="https://www.graphicsprings.com/filestorage/stencils/1cdf3eae16b6d0da3f16ff12f7650a24.png"
                >
                  <div
                    class="absolute-bottom custom-caption"
                    style="background-color:rgba(0, 0, 0, .5);"
                  >
                    <div class="text-h6 text-center text-weight-bolder">Lorem Category</div>
                  </div>
                </q-img>
              </div>
            <!-- </q-carousel-slide> -->
          <!-- </q-carousel> -->
        </div>
      </div>
</template>

<script>
export default {
    data() {
    return {
      slide: "first",
      trending_slide: 1,
    };
  },
}
</script>

<style scoped>

</style>
