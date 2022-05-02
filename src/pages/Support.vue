<template>

  <div  class="random" >

        <q-tabs
          v-model="tab"
          dense
          no-caps
          spread
          class="text-grey tabs"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          indicator
          style="width: 22%; font-size:1.5rem"
        >

          <q-tab name="Contacts" label="Contact Us" class="button" />
          <q-tab name="Faqs" label="FAQS" class="button" />
        </q-tabs>

        <q-separator />



        <!-- Contact Us section -->
        <q-tab-panels v-model="tab" class="tabs " >
          <q-tab-panel name="Contacts" class="q-py-xl justify-evenly">

            <div class="row">
              <div class="getin col-7 q-pr-xl ">
                <h3 class="text-center">Get in touch</h3>
                <div class="row text-center justify-evenly ">
                  <div class="" style="max-width:200px">
                    <q-avatar size="60px"  class="q-my-sm"  color="primary">
                      <q-icon name="place" color="white" />
                    </q-avatar>
                    <h6>Address</h6>
                    <p>Lorem Ipsum and Lorem Lorem Ipsum and Lorem Lorem Ipsum and Lorem Lorem Ipsum and Lorem</p>
                  </div>
                   <div class="" style="max-width:200px">
                    <q-avatar size="60px" class="q-my-sm" color="primary">
                      <q-icon name="phone" color="white" />
                    </q-avatar>
                    <h6>Phone</h6>
                    <p>Lorem Ipsum and Lorem Lorem Ipsum and Lorem Lorem Ipsum and Lorem Lorem Ipsum and Lorem</p>
                  </div>
                   <div class="" style="max-width:200px">
                    <q-avatar size="60px" class="q-my-sm" color="primary">
                      <q-icon name="chat" color="white" />
                    </q-avatar>
                    <h6>Email</h6>
                    <p>Lorem Ipsum and Lorem Lorem Ipsum and Lorem Lorem Ipsum and Lorem Lorem Ipsum and Lorem</p>
                  </div>
                </div>
              </div>
              <div class="col-4 q-px-lg q-pb-sm" style="border: 1px solid grey; border-radius:4px ">
                <h3 class="">Message Us</h3>
                <div class="row justify-between">
                  <q-input class="q-mb-lg" outlined v-model="text" type="text" placeholder="First Name" style="width:45%" />
                  <q-input class="q-mb-lg" outlined v-model="text" type="text" placeholder="Last Name" style="width:45%"/>
                  <q-input class="q-mb-lg" outlined v-model="text" type="email" placeholder="E-mail" style="width:100%" />
                  <q-input class="q-mb-lg" outlined v-model="text" placeholder="Message" style="width:100%"/>
                </div>
                <!-- Submit Button -->
                <div class="row q-pb-lg">
                  <q-space />
                  <q-btn class="q-px-xl btn" style="width:80%" color="primary">Send us message</q-btn>
                  <q-space />
                </div>
              </div>
            </div>

          </q-tab-panel>


             <!-- FAQS -->
          <q-tab-panel v-for="n in 100" :key="n" name="Faqs" class="q-py-lg q-px-xl">
             <div class="q-pa-md q-mx-auto" style="width: 90%">
                <q-list bordered>
                  <q-expansion-item
                    group="somegroup"
                    label="What is life Lmaooo?"
                    header-class=""
                  >
                    <q-card>
                      <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>

                  <q-separator />

                  <q-expansion-item group="somegroup"  label="What is life Lmaooo?" header-class="">
                    <q-card>
                      <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>

                  <q-separator />

                  <q-expansion-item group="somegroup"  label="What is life Lmaooo?" header-class="">
                    <q-card>
                      <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>

                  <q-separator />

                  <q-expansion-item
                    group="somegroup"
                    label="What is life Lmaooo?"
                    header-class=" text-black"
                    expand-icon-class=""
                  >
                    <q-card class="">
                      <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-list>
              </div>
          </q-tab-panel>


        </q-tab-panels>


      </div>
</template>


<script>
import { defineComponent } from 'vue';
import { ref } from 'vue'


export default defineComponent({
  name: 'PageIndex',
  components:{

  },
  setup () {
    return {
      model: ref('one'),
      secondModel: ref('one'),
      tab: ref('Contacts')
    }
  }
})
</script>




<style scoped>
  h6{
    margin-top: 0;
    margin-bottom: 0;
  }
  p{
    font-size: 1rem;
  }
  .random{
    padding-top: 2%;
  }
  .tabs{
    margin:0 ;
  }
  .log2{
    /* padding-right: 10%; */
  }

  .button{
    height: 60px;
    margin: 0 auto;
  }
  .btn{
    width: 40%;
  }

  h5{
    text-align: center;
    margin: 0;
  }


</style>
