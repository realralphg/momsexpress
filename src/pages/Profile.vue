<template>
    <div>
        <!-- Auth Buttons  -->
        <div class="row justify-evenly q-my-md" v-if="buyerToken !== ''">
            <q-btn  color="primary" class="bg-secondary button q-mt-md" to="/auth/Signup" flat label="SIGN UP"  size="1.1rem" />
            <q-btn  color="white" class="bg-primary button q-mt-md" to="/auth" flat label="login"  size="1.1rem" />
        </div>


            <div class="row justify-evenly" v-if="buyerToken == ''" >
              <!-- Profile Image and Details -->
              <div class=" row q-px-md items-center col-lg-5 col-md-5 col-sm-5 col-xs-10 q-my-md">
                  <q-avatar size="4rem" font-size="2.5rem" color="teal" class="q-mr-md" text-color="white" icon="person" />
                  <div>
                    <div class="row justify-between">
                      <div class="q-my-xs text-bold text-h5"> Big Billy</div>
                      <q-btn icon="edit" size="0.8rem" class="q-ml-md" v-ripple="false" flat round >
                        <q-tooltip anchor="bottom middle" self="center middle">
                          Edit Profile
                        </q-tooltip>
                      </q-btn>
                    </div>
                    <div class="q-my-xs">tobiikupolati33@gmail.com</div>
                    <div class="q-my-xs">08012345678</div>
                  </div>
                </div>


                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-10 q-px-md q-my-md" >
                  <div class="row justify-between q-my-sm items-center">
                    <div class="text-bold text-h6">Delivery Address</div>
                    <q-btn icon="edit" size="0.8rem" v-ripple="false" flat round >
                      <q-tooltip anchor="bottom middle" self="center middle">
                            Change Address
                          </q-tooltip>
                    </q-btn>
                  </div>
                  <div>Lorem address and palce and location and timezone and region and country haaaaaa.</div>
                </div>
            </div>


        <q-separator size="1px" class="q-mt-xl q-mb-md" />

         <q-list class="q-py-md q-px-md">
                <q-item
                  clickable
                  class="q-mb-lg list_font text-h6"
                  v-ripple
                  to="/order"
                  style="border-radius: 15px"
                  >
                    <q-item-section avatar>
                        <q-icon name="auto_awesome_motion" size="2rem" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Orders</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item
                  clickable
                  class="q-mb-lg list_font text-h6"
                  v-ripple
                  to="/cart"
                  style="border-radius: 15px"
                >

                <q-item-section avatar>
                    <q-icon name="shopping_cart" size="2rem"/>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Cart</q-item-label>
                </q-item-section>
                </q-item>

                <q-item clickable class="q-mb-lg list_font text-h6"
                v-ripple
                style="border-radius: 15px"
                to="/wishlist"
                >

                <q-item-section avatar>
                    <q-icon name="favorite" color="red" size="2rem" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Wishlists</q-item-label>
                </q-item-section>
                </q-item>
            </q-list>



            <q-separator size="1px" class="q-mt-sm q-mb-md" />

            <q-list class="q-py-md q-px-md">
                    <q-item
                      clickable
                      class="q-mb-lg list_font text-h6"
                      v-ripple
                      to="/sell"
                      style="border-radius: 15px"
                      >
                        <q-item-section>
                            <q-item-label>Sell on MOMS</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item
                      clickable
                      class="q-mb-lg list_font text-h6"
                      v-ripple
                      to="/help"
                      style="border-radius: 15px"
                    >
                    <q-item-section>
                        <q-item-label>Help</q-item-label>
                    </q-item-section>
                    </q-item>

                    <q-item
                    clickable
                    class="q-mb-lg list_font text-h6"
                    to="/contact"
                    v-ripple
                    style="border-radius: 15px"
                    >
                    <q-item-section>
                        <q-item-label>Contact</q-item-label>
                    </q-item-section>
                    </q-item>



                    <q-item
                    clickable
                    class="q-mb-lg list_font text-h6"
                    to="/about-us"
                    v-ripple
                    style="border-radius: 15px"
                    >
                    <q-item-section>
                        <q-item-label>About Us</q-item-label>
                    </q-item-section>
                    </q-item>


                    <q-item
                    clickable
                    class="q-mb-lg list_font text-h6"
                    to="/about-us"
                    v-ripple
                    style="border-radius: 15px"
                    v-if="buyerToken == ''"
                    @click="logout()"
                    >
                    <q-item-section>
                        <q-item-label>Logout</q-item-label>
                    </q-item-section>
                    </q-item>

                </q-list>

                <q-separator size="1px" class="q-mt-sm" />

                <!-- <q-list class="q-px-md"> -->
                   <div class="bg-secondary" >
                    <div class="q-mr-md text-center q-py-xs text-weight-bold text-primary" style="">
                      ©MomsExpress
                    </div>
                  </div>
                <!-- </q-list> -->


    </div>
</template>

<script>
export default {
  data(){
    return{
      role: localStorage.getItem('userRole'),
      sellerToken: localStorage.getItem('sellerToken'),
      buyerToken: localStorage.getItem('buyerToken')
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('moduleExample/logout')
      .then(()=>{
          // this.$router.replace('/')
      })
      .catch((error) =>{

      })
    }
  }
}
</script>

<style scoped>
  .button{
    width: 40%;
  }

  @media screen and (max-width: 401px) {
    .list_font{
      font-size: 1rem;
    }
  }

</style>
