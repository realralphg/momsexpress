<template>

  <q-card class="q-mt-xl relative-position" style="width:80%; margin: 7% auto">

      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pb-lg">

            <!-- Login Form  -->
            <div class="q-px-lg ">
              <p class="text-center text-h4 text-bold text-primary q-my-xl ">Login</p>

                <q-input  outlined elevated v-model="email" placeholder="Email" clearable class="q-mb-md q-mt-md q-mx-auto"  color="black" style="width:90%">
                    <template v-slot:append>
                      <q-avatar>
                        <q-icon name="mail"   size="1.8rem"/>
                      </q-avatar>
                    </template>
                  </q-input>

                  <q-input  outlined v-model="password" placeholder="Password" clearable type="password" class="q-mb-lg q-mx-auto"  color="black" style="width:90%;">
                    <template v-slot:append>
                      <q-avatar>
                        <q-icon name="password"   size="1.8rem"/>
                      </q-avatar>
                    </template>
                  </q-input>
            <!-- Sign in Button  -->
              <div class="row q-my-md">
                <q-space/>
                <q-btn @click="login()" unelevated  text-color="secondary" color="primary" v-on:keyup.enter="login()" label="Login"  class="q-my-auto q-mb-md text-bold"  style="width: 40%;"/>
                <q-space/>
              </div>

              <!-- Forgotten Password link  -->
              <div class="row q-my-sm space-evenly">
                <q-space/>
                  <router-link to="/forgotPassword" class=" issue  text-center text-italic text-subtitle2 q-my-auto  text-black q-mx-md" style="text-decoration: none; ">Forgot Password?</router-link>
                <!-- <q-space/> -->
                  <router-link to="/sell/auth/Signup" class=" issue  text-center text-subtitle1 text-bold  text-primary q-mx-md " style="text-decoration: none;">Signup</router-link>
                <q-space/>
              </div>

          </div>
        </div>

        <div class="col-6" style="background-image: url('UserAuth/beautiful-african-female-posting-social-media-using-her-smartphone-about-her-shopping-spree.jpg'); background-size: cover; background-position: center"></div>

      </div>
  </q-card>



</template>


<script>
import { defineComponent } from 'vue';
import { ref } from 'vue'
import { Notify } from 'quasar';

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
      password:""
    }
  },
  methods:{
    login(){
      this.$store.dispatch('moduleExample/sellerLogin', {
        email: this.email,
        password: this.password
      })
      .then((res)=>{
        this.$router.replace('/seller/dashboard')
        console.log('hi');
        Notify.create({
              message: 'Login Success.',
              caption: 'User successfully authenticated.',
              color: 'blue'
            })
        // this.$router.replace("/seller/dashboard")
      })
      .catch(error => {

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
