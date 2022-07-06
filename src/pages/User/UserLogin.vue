<template>
  <q-page class="relative-position">
    <q-card
      class="q-mt-lg relative-position card"
      style="width: 80%; margin: 6% auto"
    >
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pb-lg">
          <!-- Login Form  -->
          <div class="q-px-lg">
            <p class="text-center text-h4 text-bold text-primary q-my-xl">
              Login
            </p>

            <div class="text-center q-mt-xl">
              <a
                href="https://moms-express.herokuapp.com/api/facebook"
                @click="userUsedOpenAuth()"
                target="_blank"
              >
                <q-avatar
                  style="cursor: pointer"
                  class="q-mx-md"
                  v-ripple="true"
                  size="2rem"
                >
                  <q-img loading="eager" src="Seller/facebooklogo.png" />
                </q-avatar>
              </a>
              <a
                :href="`https://moms-express.herokuapp.com/api/google?host=https://moms-express.netlify.app`"
                @click="userUsedOpenAuth()"
              >
                <!-- <a @click="userUsedOpenAuth()"> -->
                <q-avatar
                  style="cursor: pointer"
                  class="q-mx-md"
                  v-ripple="true"
                  size="2rem"
                >
                  <q-img loading="eager" src="Seller/google.png" />
                </q-avatar>
              </a>
            </div>

            <p class="or_text"><span>OR</span></p>

            <q-input
              outlined
              elevated
              v-model="email"
              placeholder="Email"
              class="q-mb-md q-mt-md q-mx-auto"
              color="black"
              style="width: 90%"
            >
              <template v-slot:append>
                <q-icon v-if="email === ''" name="email" />
                <q-icon
                  v-else
                  name="clear"
                  class="cursor-pointer"
                  @click="email = ''"
                />
              </template>
            </q-input>

            <q-input
              outlined
              v-model="password"
              :type="isPwd1 ? 'password' : ''"
              placeholder="Password"
              class="q-mb-lg q-mx-auto"
              color="black"
              style="width: 90%"
            >
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
              <q-space />
              <q-btn
                @click="buyerLogin()"
                unelevated
                text-color="white"
                color="primary"
                v-on:keyup.enter="buyerLogin()"
                label="Login"
                class="q-my-auto q-mb-md text-bold"
                style="width: 40%"
              />
              <q-space />
            </div>

            <!-- Forgotten Password link  -->
            <div class="row q-my-sm space-evenly">
              <q-space />
              <router-link
                to="/forgotPassword"
                class="forgot-password text-center text-subtitle2 q-my-auto text-black q-mx-md"
                style="text-decoration: none"
                >Forgot Password?</router-link
              >

              <router-link
                to="/signup"
                class="text-center text-subtitle1 text-bold text-primary q-mx-md"
                style="text-decoration: none"
                >Signup</router-link
              >
              <q-space />
            </div>
          </div>
        </div>

        <div
          class="col-6"
          style="
            background-image: url('UserAuth/one.jpg');
            background-size: cover;
            background-position: center;
          "
        ></div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "PageIndex",
  components: {},
  data() {
    return {
      model: ref("one"),
      secondModel: ref("one"),
      tab: ref("Login"),
      isPwd1: ref(true),
      email: "",
      password: "",
      location: location.origin,
      user: localStorage.getItem("openAuth"),
    };
  },
  methods: {
    buyerLogin() {
      this.$store.dispatch("moduleExample/buyerLogin", {
        email: this.email,
        password: this.password,
      });
    },
    getMe() {
      this.$store.dispatch("moduleExample/getMe");
    },
    userUsedOpenAuth() {
      let x = location.href;
      // console.log(x);
      // localStorage.setItem("openAuth", "Open Auth was Used");
    },
  },
});
</script>

<style scoped>
.card {
  width: 80%;
  margin: 6% auto;
}

@media screen and (max-width: 830px) {
  .card {
    margin: 0 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
  }
}

@media screen and (max-width: 370px) {
  .card {
    width: 95% !important;
  }
}
.text {
  position: relative;
  top: 15%;
}

.forgot-password {
  display: inline-block;
}

.or_text {
  width: 55%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 4% auto;
}

.or_text span {
  background: #fff;
  padding: 0 10px;
}
</style>
