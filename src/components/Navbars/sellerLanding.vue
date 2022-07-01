<template>
  <q-toolbar class="position-relative bord" style="height: 70px; padding: 0 2%">
    <!-- Company's Logo -->
    <q-toolbar-title
      class="q-ml-lg q-py-sm"
      style="cursor: pointer"
      @click="this.$router.push('/')"
    >
      <h6 class="text-primary q-my-none text-bold middle paragraph">
        MOMS <span class="text-secondary"> EXPRESS </span>
      </h6>
    </q-toolbar-title>

    <div>
      <nav class="primary-navigation">
        <ul>
          <!-- <li><router-link to="/">Blog</router-link></li> -->
          <li><router-link to="/">Faq</router-link></li>
          <li><router-link to="/">Contact Us</router-link></li>
        </ul>
      </nav>
    </div>

    <div>
      <!-- <q-tabs class=""> -->
      <q-btn
        color="primary"
        to="/seller/login"
        :ripple="false"
        flat
        rounded
        label="LOGIN"
        class="q-ma-md button"
      />
      <q-btn
        color="white"
        class="bg-secondary button"
        to="/seller/Signup"
        flat
        rounded
        label="SIGN UP"
      />
      <!-- </q-tabs> -->
    </div>
  </q-toolbar>
</template>

<script>
export default {};
</script>

<style scoped>
.primary-navigation {
  margin: 0 auto;
  display: block;
  text-align: center;
  font-size: 16px;
}
li {
  list-style: none;
  margin: 0 auto;
  display: inline-block;
  padding: 0 0.7rem;
  position: relative;
  text-decoration: none;
  text-align: center;
}
li a {
  color: black;
}
li a:hover {
  color: #00eaab;
}
li:hover {
  cursor: pointer;
}

a {
  text-decoration: none;
}
a:hover {
  color: #00eaab;
}

.bord {
  border-bottom: 1px solid #d56c33;
}

.button {
  font-size: 1.1rem;
}

/* .paragraph{
  width: 20% !important;
} */

@media screen and (max-width: 700px) {
  .primary-navigation {
    display: none;
  }

  .paragraph {
    font-size: 1rem;
  }
}

@media screen and (max-width: 500px) {
  .button {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 355px) {
  .button {
    font-size: 0.75rem;
  }

  .paragraph {
    font-size: 0.9rem;
  }
}
</style>
