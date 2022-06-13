<template>


  <q-card class="q-mt-lg relative-position" style="width:80%; margin: 5% auto">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-py-md">
            <!-- Login Form  -->
            <div class="q-px-lg ">
              <p class="text-center text-h4  text-black q-mt-xl ">Forgot Password?</p>
              <p class="text-center text-subtitle1 text-italic text-black q-mb-lg ">Not to worry</p>

              <q-input  outlined elevated v-model="email" placeholder="Email" clearable class="q-mb-md q-mt-md q-mx-auto"  color="black" style="width:90%">
                <template v-slot:append>
                  <q-avatar>
                    <q-icon name="mail" size="1.8rem"/>
                  </q-avatar>
                </template>
              </q-input>

              <!-- Signup Button  -->
              <div class="row q-my-md">
                <q-space/>
                <q-btn @click="forgotPass()" unelevated  color="primary" text-color="secondary" v-on:keyup.enter="forgotPass()" label="submit"  class="q-my-auto q-mb-md"  style="width: 40%;"/>
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
import { Notify } from 'quasar';

export default defineComponent({
  name: 'PageIndex',
  components:{
  },
  data () {
    return {
      email: ref(""),
    }
  },
   methods: {
    forgotPass(){
        this.$store.dispatch('moduleExample/forgotPassword', {
          email: this.email,
        })
        .then((success) => {
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
