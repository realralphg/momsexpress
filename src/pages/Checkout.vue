<template>

     <q-dialog v-model="inception">
        <q-card style="width: 70%">
          <q-card-section>
            <div class="text-h6">Select Addreess</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
               <q-option-group
                  v-model="group"
                  :options="options"
                  color="primary"
                />
          </q-card-section>

          <q-card-actions align="right" class="text-primary ">
            <!-- <q-space/> -->
            <q-btn flat label="Create New Address" @click="secondDialog = true" />
            <q-btn flat label="Save" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>



      <!-- Create New Address  -->
      <q-dialog v-model="secondDialog" persistent transition-show="scale" transition-hide="scale">
        <q-card class="">
          <q-card-section>
            <div class="text-h6">New Address</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="row">
              <div class="col-6">
                <label for="" class="text-caption"> Full Contact Name</label>
                <q-input dense outlined class="col-6" />
              </div>

              <div class="col-6">
                <label for="" class="text-caption"> Phone Number</label>
                <q-input dense outlined class="col-6" />
              </div>

              <div class="col-12">
                <label for="" class="text-caption"> Delivery Address</label>
                <q-input dense outlined class="col-6" />
              </div>

              <div class="col-4">
                <label for="" class="text-caption"> Region/City</label>
                <q-input dense outlined class="col-6" />
              </div>

              <div class="col-4">
                <label for="" class="text-caption"> State</label>
                <q-input dense outlined class="col-6" />
              </div>

              <div class="col-4">
                <label for="" class="text-caption"> Country</label>
                <q-input dense outlined class="col-6" />
              </div>

            </div>

          </q-card-section>

          <q-card-actions align="right" class="">
            <q-btn label="Save" flat v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>



    <div class="row" style="width: 90%; margin: 0 auto; position: relative">
        <div class="column q-col-gutter-sm col-lg-8 col-md-8 col-sm-12 col-xs-12" style="margin: 0 auto; min-height: 70vh">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="shit column  q-py-lg bg-grey-1">

              <div class="text-center text-bold text-h5">  Checkout </div>

              <div class="q-pa-md">
                <q-stepper
                  v-model="step"
                  ref="stepper"
                  color="primary"
                  animated
                  style="max-width:100%"
                >
                  <q-step
                    :name="1"
                    title="Shipping & Address"
                    icon="delivery_dining"
                    :done="step > 1"
                  >
                    <div>
                      <div class="row">
                        <div class="text-bold text-h6 text-primary">Address</div>
                        <q-space/>
                        <q-btn icon="edit" flat size="0.8rem" color="secondary" @click="inception = true" round>
                          <q-tooltip anchor="bottom middle" self="center middle">
                            Select Address
                          </q-tooltip>
                        </q-btn>
                      </div>
                      <div class="row text-bold text-subtitle1">
                        <div>Tobi Ikupolati</div>
                        <div class="q-mx-md">(09012345678)</div>
                      </div>

                      <div>Lorem street, ipsium area, lorem and ipsium region. ipsium state, Nigeria</div>

                    </div>


                  </q-step>

                  <q-step
                    :name="2"
                    title="Payment"
                    icon="payments"
                    :done="step > 2"
                  >
                    An ad group contains one or more ads which target a shared set of keywords.
                  </q-step>

                  <q-step
                    :name="3"
                    title="Order Summary"
                    icon="summarize"
                  >
                    Try out different ad text to see what brings in the most customers, and learn how to
                    enhance your ads using features like ad extensions. If you run into any problems with
                    your ads, find out how to tell if they're running and how to resolve approval issues.
                  </q-step>

                  <template v-slot:navigation>
                    <q-stepper-navigation>
                      <q-btn @click="$refs.stepper.next()" color="secondary" text-color="primary"  :label="step === 3 ? 'Finish' : 'Next'" />
                      <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                    </q-stepper-navigation>
                  </template>
                </q-stepper>
              </div>

            </div>
          </div>
        </div>


    </div>

</template>

<script>
import { ref } from "vue"

export default {
  name: 'Cart',
  data(){
    return{
      step: ref(1),
      inception: ref(false),
      secondDialog: ref(false),
       group: ref('op1'),

      options: [
        {
          label: 'Option 1',
          value: 'op1'
        },
        {
          label: 'Option 2',
          value: 'op2'
        },
        {
          label: 'Option 3',
          value: 'op3'
        }
      ]
    }
  }

}
</script>

<style scoped>

.row > div {
  padding: 0.5%;
  }

.row + .row {
  margin-top: 1rem; }

.shit{
  /* height: 100%; */
  /* background: red; */
  border-radius: 4px;
}



</style>
