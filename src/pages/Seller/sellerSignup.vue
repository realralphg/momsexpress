<template>
  <q-page>
    <q-card class="relative-position card">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pb-lg">
          <!-- Login Form  -->
          <div class="q-px-lg">
            <p class="text-center text-h4 text-bold text-primary q-my-xl">
              Register
            </p>

            <q-input
              outlined
              elevated
              v-model="name"
              placeholder="Full Name"
              class="q-mb-md q-mt-md q-mx-auto"
              color="black"
              style="width: 90%"
            >
              <template v-slot:append>
                <q-avatar>
                  <q-icon name="person" size="1.8rem" />
                </q-avatar>
              </template>
            </q-input>

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
                  <q-icon name="mail" size="1.8rem" />
                </q-avatar>
              </template>
            </q-input>

            <q-input
              v-model="password1"
              :type="isPwd1 ? 'password' : ''"
              placeholder="Enter Password"
              outlined
              class="q-mb-md q-mt-md q-mx-auto"
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

            <q-input
              v-model="password2"
              :type="isPwd2 ? 'password' : ''"
              placeholder="Re-type Password"
              outlined
              class="q-mb-md q-mt-md q-mx-auto"
              color="black"
              style="width: 90%"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd2 ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd2 = !isPwd2"
                />
              </template>
            </q-input>

            <!-- Signup Button  -->
            <div class="row q-my-md">
              <q-space />
              <q-btn
                @click="registerSeller()"
                unelevated
                color="primary"
                text-color="white"
                v-on:keyup.enter="registerSeller()"
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
              <p class="q-my-auto">Already a Seller?</p>
              <router-link
                to="/seller/login"
                class="issue text-center text-subtitle1 text-primary text-bold q-mx-md"
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
            background-image: url('UserAuth/beautiful-african-female-posting-social-media-using-her-smartphone-about-her-shopping-spree.jpg');
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

export default defineComponent({
  name: "PageIndex",
  components: {},
  data() {
    return {
      model: ref("one"),
      secondModel: ref("one"),
      tab: ref("Login"),
      name: "",
      email: "",
      password1: "",
      password2: "",
      isPwd1: ref(true),
      isPwd2: ref(true),
    };
  },
  methods: {
    registerSeller() {
      if (this.valid()) {
        console.log("hello");
        this.$store
          .dispatch("moduleExample/sellerRegister", {
            email: this.email,
            fullname: this.name,
            password: this.password1,
            password2: this.password2,
          })
          .then(({ status }) => {
            console.log(status);
            this.$router.replace("/seller/login");
          })
          .catch((error) => {
            // console.log(error)
          });
      }
    },
    valid() {
      return this.password1 === this.password2;
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
  margin: 8% auto 2%;
}

.or_text span {
  background: #fff;
  padding: 0 10px;
}
</style>
