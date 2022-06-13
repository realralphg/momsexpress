<template>

  <q-card class="q-mt-lg relative-position" style="width:80%; margin: 10% auto">

      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pb-lg">

            <!-- Login Form  -->
            <div class="q-px-lg ">
              <p class="text-center text-h4 text-bold text-primary q-my-xl ">Register</p>

              <div class="text-center q-mt-xl">
                <q-avatar style="cursor:pointer" class="q-mx-md" v-ripple="true" size="2rem">
                    <q-img src="Seller/facebooklogo.png" />
                </q-avatar>
                <q-avatar style="cursor:pointer" class="q-mx-md" v-ripple="true" size="2rem">
                    <q-img src="Seller/google.png" />
                </q-avatar>
              </div>


              <p class="or_text"> <span>OR</span> </p>


              <q-input  outlined elevated v-model="email" placeholder="Email"  class="q-mb-md q-mt-md q-mx-auto"  color="black" style="width:90%">
                  <template v-slot:append>
                    <q-avatar>
                      <q-icon   v-if="email === ''" name="email" />
                      <q-icon  v-else name="clear" class="cursor-pointer" @click="email = ''" />
                    </q-avatar>
                  </template>
                </q-input>


      <!-- Signup Button  -->
        <div class="row q-my-md">
          <q-space/>
          <q-btn @click="registerBuyer()" unelevated  color="primary" text-color="secondary" v-on:keyup.enter="registerBuyer()" label="Signup"  class="q-my-auto q-mb-md"  style="width: 40%;"/>
          <q-space/>
        </div>

        <!-- Forgotten Password link  -->
        <div class="row q-my-sm justify-between">
          <q-space/>
          <!-- <q-space/> -->
            <p class="q-my-auto text-caption">Already have an account?</p>
            <router-link to="/auth" class=" issue  text-center text-subtitle1 text-bold  text-black q-mx-md " style="text-decoration: none;">Login</router-link>
          <q-space/>
        </div>
      </div>
    </div>



        <div class="col-6" style="background-image: url('UserAuth/one.jpg'); background-size: cover; background-position: center"></div>


      </div>
  </q-card>



</template>


<script>
import { defineComponent } from 'vue';
import { ref } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components:{
  },
  data () {
    return {
      model: ref('one'),
      secondModel: ref('one'),
      tab: ref('Login'),
      email: "",
    }
  },
   methods: {
    registerBuyer(){
        this.$store.dispatch('moduleExample/buyerRegister', {
          email: this.email,
        })
        .then(({ status}) => {
          console.log(status)
          this.$router.replace('/auth')
        })
        .catch(error => {
          // console.log(error)
        })
      }
    }

})
</script>


<style scoped>

  .text{
    position: relative;
    top: 15%;
  }

  .head{
    width: 20%;
    /* height: 20%; */
    border: 5px solid white;
    text-align: center;
    border-radius: 30px;
    position: absolute;
    /* top: 50%; */
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
    background-color: white;
  }
  .middle{
    position: relative;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .issue{
    display: inline-block;
    /* margin: 0 auto */
  }

  .or_text {
   width: 55%;
   text-align: center;
   border-bottom: 1px solid #000;
   line-height: 0.1em;
   margin: 4% auto;
}

.or_text span {
    background:#fff;
    padding:0 10px;
}
</style>
