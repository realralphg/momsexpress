<template>
  <div class="q-my-md" style="padding: 0 3%">
    <!-- Heading  -->
    <div
      class="row justify-between q-mx-auto q-pl-md q-my-md q-py-sm"
      style="border-bottom: 2px solid #003348"
    >
      <h5
        class="text-h5 text-bold q-my-auto text-primary homepage_heading_font"
      >
        Featured Shops
      </h5>
    </div>

    <div class="column q-col-gutter-sm shops">
      <div v-if="skeleton" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-skeleton height="300px" />
      </div>
      <div
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
        v-for="shop in shops"
        :key="shop._id"
        @click="this.$router.push(`/shop/${shop._id}`)"
      >
        <div class="div1">
          <div
            class="flex flex-center items-center one absolute-bottom items-center q-py-xl"
          >
            <h4
              class="text-white text-bold text-h4 text-center shop_text q-my-none"
            >
              {{ shop.store.name }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Rename",
  components: {},
  data() {
    return {
      shops: [],
      skeleton: ref(true),
    };
  },
  methods: {
    getShops() {
      this.$store.dispatch("moduleExample/getShops").then((response) => {
        this.skeleton = false;
        let a = response.splice(3, response.length - 1);
        // console.log(a);
        this.shops = response;
      });
    },
  },
  mounted() {
    this.getShops();
  },
};
</script>

<style scoped>
.shops {
  height: 50vh;
  width: 100%;
  margin: 0 auto;
}

@media screen and (max-width: 830px) {
  .shops {
    height: 40vh;
  }
}

@media screen and (max-width: 450px) {
  .shops {
    height: 30vh;
  }
  .two,
  .three {
    display: block;
    background: hsl(0, 0%, 0%, 40%);
    height: 20%;
  }
}
.div1 {
  background-image: url("/Homepage/books.jpg");
}

.div2 {
  background-image: url("/Homepage/furniture.jpg");
}

.div3 {
  background-image: url("/Homepage/laptop.jpg");
}

.one,
.two,
.three {
  /* display: none; */
  background: hsl(0, 0%, 0%, 40%);
  height: 15%;
  width: 100%;
}

.div1,
.div2,
.div3 {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  position: relative;
  cursor: pointer;
}

.div1:hover .one {
  display: flex;
}

.div2:hover .two {
  display: flex;
}

.div3:hover .three {
  display: flex;
}

@media screen and (max-width: 830px) {
  .one,
  .two,
  .three {
    display: block;
    background: hsl(0, 0%, 0%, 40%);
    height: 50%;
    width: 100%;
  }

  .shop_text {
    font-size: 1.5rem;
    margin: auto 0;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .div1:hover .one {
    display: block;
  }

  .div2:hover .two {
    display: block;
  }

  .div3:hover .three {
    display: block;
  }
}
</style>
