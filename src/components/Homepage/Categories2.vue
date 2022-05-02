<template>
    <div class="story-super-container">

        <div class="row  justify-between q-mx-auto   q-py-sm" >
          <q-btn color="primary" to="/allCategory" class="q-pr-none" label="All categories" icon-right="chevron_right" flat size="0.7rem"/>
          <q-space/>
        </div>

        <div class = "story-container">
            <div class = "story-item">
                <!-- <Story  /> -->
                <div class = "story text-center" v-for="n in 12" :key="n">
                  <div>
                      <q-btn round class="avatar-container" to="/category">
                          <q-avatar class="avatar" size = "60px">
                              <img src = "Homepage/laptop.jpg" />
                          </q-avatar>
                      </q-btn>
                  </div>
                  Category
              </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Stories",
    components: {
    }
}
</script>

<style scoped>

 .avatar-container{
        margin: 5px 10px;
        /* background: linear-gradient(to right, rgb(206, 64, 64), rgb(128, 1, 60)); */
        padding: 2px
    }
    .story-container{


        width: 100%;
        height: 120px;
        white-space: nowrap;
        position: relative;
        overflow-x: scroll;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none; /* hiding the scrollbar for Internet Explorer, Edge */
        scrollbar-width: none; /* hiding the scrollbar for Firefox */
    }

    .story-container::-webkit-scrollbar {
        display: none; /* hiding the scrollbar for Chrome, Safari, and Opera */
    }

    .story-super-container{
        border-radius: 3px;
        margin-top: 25px;
        /* border: 1px solid #ccc; */
        /* padding: 15px 0px 0px 10px; */
        padding: 0 4%;
        display: none;
    }

    .story-item{
        float: none;
        display: flex;
        zoom: 1;
    }


    @media screen and (max-width:771px) {
      .story-super-container{
        display: block;
      }
    }

    @media screen and (max-width:501px) {
      .avatar{
        font-size: 40px !important;
      }

      .story-container{
        height: 80px;
      }
    }
</style>
