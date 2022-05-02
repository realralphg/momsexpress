<template>


  <q-card class="q-mt-lg relative-position" style="width:80%; margin: 6% auto">

      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pb-lg">

            <!-- Login Form  -->
            <div class="q-px-lg ">
              <p class="text-center text-h4 text-bold text-primary q-my-xl ">Login</p>

              <div class="text-center q-mt-xl">

                <a href="https://moms-express.herokuapp.com/api/facebook" target="_blank" >
                  <q-avatar style="cursor:pointer" class="q-mx-md" v-ripple="true" size="2rem" >
                    <q-img src="Seller/facebooklogo.png" />
                </q-avatar>
                </a>
                <a :href="`https://moms-express.herokuapp.com/api/google?host=${location}`"  >
                  <q-avatar style="cursor:pointer" class="q-mx-md" v-ripple="true" size="2rem" >
                      <q-img src="Seller/google.png"/>
                  </q-avatar>
                </a>
              </div>


                <p class="or_text"> <span>OR</span> </p>


                <q-input  outlined elevated v-model="email" placeholder="Email" class="q-mb-md q-mt-md q-mx-auto"  color="black" style="width:90%">
                    <template v-slot:append>
                        <q-icon   v-if="email === ''" name="email" />
                        <q-icon  v-else name="clear" class="cursor-pointer" @click="email = ''" />
                    </template>
                  </q-input>

                  <q-input  outlined v-model="password" :type="isPwd1 ? 'password' : ''" placeholder="Password"  class="q-mb-lg q-mx-auto"  color="black" style="width:90%;">
                    <template v-slot:append>
                        <q-icon
                          :name="isPwd1 ? 'visibility_off' : 'visibility'"
                          class="cursor-pointer"
                          @click="isPwd1 = !isPwd1"
                        />
                    </template>
                  </q-input>



            <!-- Sign in Button  -->
              <div class="row q-my-md">
                <q-space/>
                <q-btn @click="loginBuyer()" unelevated  text-color="secondary" color="primary" v-on:keyup.enter="loginBuyer()" label="Login"  class="q-my-auto q-mb-md text-bold"  style="width: 40%;"/>
                <q-space/>
              </div>

              <div class="row q-my-md">
                <q-space/>
                <q-btn @click="logoutBuyer()" unelevated  text-color="secondary" color="blue"  label="Logout"  class="q-my-auto q-mb-md text-bold"  style="width: 40%;"/>
                <q-space/>
              </div>

              <!-- Forgotten Password link  -->
              <div class="row q-my-sm space-evenly">
                <q-space/>
                  <router-link to="/forgotPassword" class=" issue  text-center text-italic text-subtitle2 q-my-auto  text-black q-mx-md" style="text-decoration: none; ">Forgot Password?</router-link>
                <!-- <q-space/> -->
                  <router-link to="/auth/signup" class=" issue  text-center text-subtitle1 text-bold  text-primary q-mx-md " style="text-decoration: none;">Signup</router-link>
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
      isPwd1: ref(true),
      email: "",
      password:"",
      location: location.origin
    }
  },
  methods:{
    loginBuyer(){
      this.$store.dispatch('moduleExample/buyerLogin', {
        email: this.email,
        password: this.password
      })
      .then(success => {
        console.log(success);
        this.$router.replace("/")
      })
      .catch(error => {
        // console.log(error);
      })
    },
    logoutBuyer(){
      this.$store.dispatch('moduleExample/buyerLogout' )
      .then(success => {
        console.log(success);
        this.$router.replace("/")
      })
      .catch(error => {
        // console.log(error);
      })
    },
    facebookAuth(){
      this.$store.dispatch('moduleExample/buyerFacebookAuth')
      .then(success => {
        this.$router.replace('/')
      })
      .catch(error => {

      })
    },
    googleAuth(){
      this.$store.dispatch('moduleExample/buyerGoogleAuth')
      .then(success => {
        this.$router.replace('/')
      })
      .catch(error => {

      })
    }
  },
  mounted(){
    // console.log(location.origin)
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
