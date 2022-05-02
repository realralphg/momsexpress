<template>

   <q-toolbar class="position-relative row justify-between main">
        <!-- <q-btn
          flat
          dense
          round
          color="primary"
          icon="menu"
          aria-label="Menu"
          @click="leftDrawer=leftDrawer"
        /> -->


        <!-- Company's Logo -->
        <div class=" q-py-sm" style="cursor:pointer">
           <h6  @click="this.$router.push('/')" class="text-primary q-my-none text-bold text-h6 paragraph">MOMS  <span class="text-secondary"> EXPRESS </span> </h6>
           <!-- <p class="q-my-none q-ml-lg text-black text-bold text-subtitle2">EXPRESS</p> -->
        </div>



        <q-toolbar-title>
          <q-input  outlined dense bg-color="white"  class="input" placeholder="Search for Products/Categories"  >
            <template v-slot:append >
              <q-icon name="search" class="q-pr-xs search_icon" color="primary" style="cursor:pointer" />
            </template>
          </q-input>
        </q-toolbar-title>




        <!-- Click to Open search Box  -->
          <!-- <q-input
            standout="bg-grey-2"
            v-model="text"
            dense
            clearable
            rounded
            fixed
            :class="{ 'closed' : searchClosed && !text }"
            @focus="searchClosed = false"
            @blur="searchClosed = true"
            class="cursor-pointer"
            color="primary"
            bg-color="white"
          >
            <template v-slot:prepend>
              <q-icon name="search" color="primary" />
            </template>
          </q-input> -->

        <!--Hover to open Search Box  -->
         <!-- <div class = 'search-box bg-grey-5'>
            <input class = "search-text text-white" type="text" placeholder = "Search Anything">
              <q-icon name="search" class="search-btn" size="1.5rem" />
        </div> -->




        <div class="hide">
            <q-btn-dropdown
              color="primary"
              flat
              no-caps
              label="English"
              icon="flag"
              dense
            >
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick" v-for="n in 5" :key="n">
                  <q-item-section avatar>
                    <q-avatar icon="flag"  text-color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Yoruba</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>


        <!-- Account and Cart buttons -->
        <div class="hide">
          <q-tabs class="q-mr-lg">
            <q-btn round color="primary" to="/auth" :ripple="false" dense  flat icon="perm_identity"  class="q-ma-md"/>
            <q-btn class="q-mr-md" to="/cart" color="primary" dense round flat icon="shopping_cart">
              <q-badge color="red" class="text-bold" floating transparent>
                4
              </q-badge>
            </q-btn>
          </q-tabs>
        </div>
      </q-toolbar>


      <!-- 2nd Navbar  -->
      <!-- <q-toolbar class="" style="border-top: 2px solid #00EAAB; width:80%;margin: 0 auto; padding: 0;height: 40px">

        <nav role="navigation" class="primary-navigation">
          <ul class="text-subtitle2 q-ml-lg">
            <li><router-link to="/sell">Sell On MOMS</router-link></li>
            <li><router-link to="/sell">Promotions</router-link></li>
            <li><router-link to="/sell">Trending Deals</router-link></li>
          </ul>
        </nav>
      </q-toolbar> -->

</template>

<script>
import { defineComponent, ref } from 'vue'

export default {
   data () {

    return {
      searchClosed: ref(true),
      text: ref(null),
      hover: ref(false)
    }
  }
}
</script>

<style scoped>

.main{
  height: 70px;
  padding: 0 5%
}

.paragraph{
  display:inline
}

.input{
  width:100%;
  /* border-radius: 0 8px 8px 0 */
}

  .middle{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .closed{
    max-width:45px;
  }
  .search-box {
  height: 40px;
  border-radius: 40px;
  margin-left: 10px;
}

/* .search-box:hover  .search-text{
  width: 18rem;
  padding: 0 6px;
} */
/* .search-box:hover  .search-btn{
  background: #1976D2;
  color: white;

} */
.search-btn {
  color: white;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  cursor: pointer;
  text-decoration: none;
  background-color: #1976D2

}
.search-text {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 16px;
  font-weight: normal;
  transition: 0.4s;
  line-height: 40px;
  padding: 0 6px;
  width: 18rem;
  /* background-color:lightblue */
}







nav.primary-navigation {
  /* margin: 0 auto; */
  display: block;
  text-align: left;
  font-size: 16px;
  padding: 0;
  margin: 0;
}

ul{
  padding: 0;
}

nav.primary-navigation ul li {
  list-style: none;
  margin: 0 auto;
  display: inline-block;
  padding-right: 20px;
  position: relative;
  text-decoration: none;
  text-align: left;
}
nav.primary-navigation li a {
  color: black;
}
nav.primary-navigation li a:hover {
  color: #00EAAB;
}
nav.primary-navigation li:hover {
  cursor: pointer;
}
.dropdown {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  padding-left: 0;
  left: 0;
  display: none;
  background: white;
}
nav.primary-navigation ul li:hover .dropdown {
  visibility: visible;
  opacity: 1;
  display: block;
  min-width: 225px;
  text-align: left;
  padding-top: 20px;
  box-shadow: 0px 3px 5px -1px #ccc;
  background-color: white
}
nav.primary-navigation ul li ul li {
  clear: both;
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  border-style: none;
}
nav.primary-navigation ul li ul li a:hover {
  padding-left: 10px;
  border-left: 2px solid #00EAAB;
  transition: all 0.3s ease;
}
a {
  text-decoration: none;
}
a:hover {
  color: #00EAAB;
}
ul li ul li a {
  transition: all 0.5s ease;
}


@media screen and (max-width: 800px) {
  .hide{
    display: none;
  }
}

@media screen and (max-width: 700px) {
  .paragraph{
    font-size: 1rem;
  }
}

@media screen and (max-width: 500px) {
  .search_icon{
    padding-right: 0 !important;
    font-size: 1.3rem;
  }

  .main{
    padding-right: 0 !important;
  }
}

@media screen and (max-width: 355px) {
  .paragraph{
    font-size: 0.9rem;
  }
}
</style>
