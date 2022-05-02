<template>
    <div class="category bg-grey-3 border_radius">
        <!-- <div class="text-bold text-h5 text-center">Categories</div> -->

        <nav @mouseleave="show=false" role="navigation" class="primary-navigation">
          <!-- <q-scroll-area style="width:100%"> -->
            <!-- <div class="row no-wrap"> -->
              <ul v-for="n in 12" :key="n">
                <li><a @mouseenter="show=true" @click="this.$router.push('/category')" class="text-primary text-bold text-subtitle2 row items-center"> <q-icon name="settings" class="q-mx-md" /> Category </a>
                  <div v-if="show" @mouseleave="show=false" class="dropdown row" >
                    <div  v-for="n in 6" :key="n" class="category-group col-4">
                        <p class="text-bold">Category X</p>
                        <div class="category-group-list text-caption">
                            <li> <a href=""></a> Sub-category Y </li>
                            <li> <a href=""></a> Sub-category Y </li>
                            <li> <a href=""></a> Sub-category Y </li>
                        </div>
                    </div>
                  </div>
                </li>
              </ul>

            <!-- </div> -->
          <!-- </q-scroll-area> -->
        </nav>
    </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: 'Categories',
  data(){
    return{
      show: ref(false)
    }
  }
}
</script>

<style scoped>

h5{
  margin: 0 0 5%;
}

ul{
  padding: 0;
}

.category{
  height: 100%;
  /* background-color: #3CA0E7; */
  position: relative;
  /* margin-bottom: 3%; */
  margin: 0;
  padding: 0;
}

.category-group{
  padding: 0 2%;
  margin: 0;
  display: block;
}

.category-group-list li{
  padding: 0;
  margin: 0;
}
  nav.primary-navigation {
  margin: 0 auto;
  /* display: flex; */
  text-align: left;
  padding: 0 10%;
  font-size: 16px;

}

.primary-navigation ul{
  /* width: 11%; */
  padding: 0;
  /* margin: 0 1%; */
  margin: 0;
}
nav.primary-navigation ul li {
  /* list-style: none; */
  margin: 3% 0;
  display: inline-block;
  /* position: relative; */
  text-decoration: none;
  /* text-align: center; */
  /* position: relative; */
}
nav.primary-navigation li a {
  color: black;
}

nav.primary-navigation li:hover {
  cursor: pointer;
}
/* .dropdown {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  padding-left: 0;
  left: 0;
  display: none;
  background: white;
  z-index: 1;
} */
.dropdown {
  visibility: visible;
  opacity: 0.9;
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;
  left: 100%;
  width: 285%;
  text-align: left;
  padding-top: 20px;
  box-shadow: 0px 1px 2px -1px #ccc;
  background-color: white;
  z-index: 1;
}
.dropdown li {
  clear: both;
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  border-style: none;
}
.dropdown li a:hover {
  padding-left: 10px;
  border-left: 2px solid #3ca0e7;
  transition: all 0.3s ease;
}
a {
  text-decoration: none;
}
a:hover {
  color: #3CA0E7;
}
.dropdown li a {
  transition: all 0.5s ease;
}
</style>
