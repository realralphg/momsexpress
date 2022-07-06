<template>
  <q-page>
    <q-card class="q-mt-lg relative-position card">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pb-lg">
          <!-- Login Form  -->
          <div class="q-px-lg">
            <p class="text-center text-h4 text-bold text-primary q-my-xl">
              Register
            </p>

            <div class="text-center q-mt-xl">
              <q-avatar
                style="cursor: pointer"
                class="q-mx-md"
                v-ripple="true"
                size="2rem"
              >
                <q-img loading="eager" src="Seller/facebooklogo.png" />
              </q-avatar>
              <q-avatar
                style="cursor: pointer"
                class="q-mx-md"
                v-ripple="true"
                size="2rem"
              >
                <q-img loading="eager" src="Seller/google.png" />
              </q-avatar>
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
                <q-avatar>
                  <q-icon v-if="email === ''" name="email" />
                  <q-icon
                    v-else
                    name="clear"
                    class="cursor-pointer"
                    @click="email = ''"
                  />
                </q-avatar>
              </template>
            </q-input>

            <!-- Signup Button  -->
            <div class="row q-my-md">
              <q-space />
              <q-btn
                @click="registerBuyer()"
                unelevated
                color="primary"
                text-color="white"
                v-on:keyup.enter="registerBuyer()"
                label="Signup"
                class="q-my-auto q-mb-md"
                style="width: 40%"
              />
              <q-space />
            </div>

            <!-- Forgotten Password link  -->
            <div class="row q-my-sm justify-between">
              <q-space />
              <!-- <q-space/> -->
              <p class="q-my-auto text-caption">Already have an account?</p>
              <router-link
                to="/login"
                class="issue text-center text-subtitle1 text-bold text-primary q-mx-md"
                style="text-decoration: none"
                >Login</router-link
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

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center text-primary text-bold">
            Welcome to MOMS Express
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
          You have successfully created and logged in to your account. A mail
          has been sent to your inbox which contains your password.
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            outline
            label="Shop Now!"
            color="primary"
            v-close-popup
            to="/"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {},
  data() {
    return {
      model: ref("one"),
      secondModel: ref("one"),
      tab: ref("Login"),
      email: "",
      alert: ref(false),
    };
  },
  methods: {
    registerBuyer() {
      this.$store.dispatch("moduleExample/buyerRegister", {
        email: this.email,
      });
      this.alert = true;
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

.head {
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
.middle {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.issue {
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
  background: #fff;
  padding: 0 10px;
}
</style>
