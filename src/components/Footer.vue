<template>
  <!--<q-footer class="footer">-->

  <div class="footer_hide">
    <div class="row justify-between q-px-md bg-primary q-py-xl q-px-xl">
      <div class="col-lg-4 col-md-5 col-sm-5 col-xs-12 text-white">
        <div class="text-subtitle1 text-weight-bold">
          <div class="text-subtitle2 hover_underline_white q-my-sm">
            Get the latest information about newly posted products
          </div>
          <div class="row">
            <q-input
              outlined
              dense
              color="white"
              standout
              bg-color="white"
              label="E-mail Address"
              class="col-7"
            />
            <q-btn
              label="Subscribe"
              class="bg-secondary text-primary q-ml-sm q-px-sm col-4"
              style="width: 37%"
              dense
            />
          </div>

          <div class="row q-mt-md">
            <q-icon
              class="q-mr-sm cursor-pointer icon"
              size="1.4rem"
              name="facebook"
            />
            <q-icon
              class="q-mr-sm cursor-pointer icon"
              size="1.4rem"
              name="eva-twitter"
            />
            <q-icon
              class="q-mr-sm cursor-pointer icon"
              size="1.4rem"
              name="eva-linkedin"
            />
          </div>
        </div>
      </div>
      <!-- <q-space/> -->
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12"></div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-10 text-white">
        <div class="text-h6 text-weight-bold">Services</div>
        <div class="text-caption hover_underline_white q-mt-sm">Contact us</div>
        <div class="text-caption hover_underline_white">About Us</div>
        <div class="text-caption hover_underline_white">
          Sell on MOMS Express
        </div>
      </div>

      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-white">
        <div class="text-h6 text-weight-bold">Policy</div>
        <div class="text-caption hover_underline_white q-mt-sm">
          Return Policy
        </div>
        <div class="text-caption hover_underline_white">Terms Of Use</div>
        <div class="text-caption hover_underline_white">
          Cancellation & Returns
        </div>
      </div>

      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-white">
        <div class="text-h6 text-weight-bold">Help</div>
        <div class="text-caption hover_underline_white q-mt-sm">Payments</div>
        <div class="text-caption hover_underline_white">Shipping</div>
        <div class="text-caption hover_underline_white">FAQ</div>
        <div class="text-caption hover_underline_white">Security</div>
      </div>
    </div>
    <div class="bg-secondary">
      <div
        class="q-mr-md text-center q-py-xs text-weight-bold text-primary"
        style=""
      >
        ©MomsExpress
      </div>
    </div>
  </div>
  <!--</q-footer>-->
</template>

<script>
import { defineComponent } from "vue";

export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style scoped>
.footer {
  height: 20rem;
  display: flex;
  justify-content: space-evenly;
  /* border-top:1px solid #778899; */
  background-color: rgb(0, 0, 0);
  padding: 3% 5% 0;
  font-family: Josefin Sans;
  margin: 5% 0 0;
}

.footer_categories {
  font-size: 1.5rem;
  width: 30%;
}

.list_cover {
  font-size: 1.2rem;
  list-style-type: none;
  justify-content: center;
  cursor: pointer;
  padding: 0;
}
.list_cover li {
  /* align-items:center; */
  margin: 1.5% 0;
  font-size: 1.1rem;
}

h4 {
  margin: 0;
}

.icon:hover {
  color: #00eaab;
}

@media screen and (max-width: 830px) {
  .footer_hide {
    display: none;
  }
}
</style>
