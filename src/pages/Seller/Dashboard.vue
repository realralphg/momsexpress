<template>
   <div class="row justify-center q-mt-md first">

      <div class="col-lg-3 col-md-3 col-sm-8 col-xs-8 box" >
        <div class="upper-cards row justify-between items-center q-py-sm"  style="height:85px">
          <q-icon name="attach_money" class="q-ml-lg" size="3rem" color="primary"/>
          <p class="q-my-none writings" style="max-width:150px">Sales</p>
        </div>
        <p class="number text-right" style="font-size:1rem">25</p>
        <q-separator color="" class="q-mt-xl"/>
        <div class="row q-mb-md">
          <q-space/>
          <q-btn color="primary" class="q-pr-none" label="View all" icon-right="chevron_right" flat size="0.7rem"/>
        </div>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-8 col-xs-8 box">
       <div class="upper-cards row justify-between items-center q-py-sm">
          <q-icon name="show_chart" class="q-ml-lg" size="3rem" color="primary"/>
          <p class="q-my-none writings text-right" style="max-width:150px">This Month's Revenue</p>
        </div>
        <p class="number text-right" style="font-size:1rem">N20,000</p>
        <q-separator color="" class="q-mt-xl"/>
        <div class="row q-mb-md">
          <q-space/>
          <q-btn color="primary" class="q-pr-none" label="View all" icon-right="chevron_right" flat size="0.7rem"/>
        </div>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-8 col-xs-8 box">
        <div class="upper-cards row justify-between items-center q-py-sm">
          <q-icon name="stacked_line_chart" class="q-ml-lg" size="3rem"  color="primary"/>
          <p class="q-my-none writings text-right" style="max-width:150px">Total Gross Revenue</p>
        </div>
        <p class="number text-right" style="font-size:1rem">N250,000</p>
        <q-separator color="" class="q-mt-xl"/>
        <div class="row q-mb-md">
          <q-space/>
          <q-btn color="primary" class="q-pr-none" label="View all" icon-right="chevron_right" flat size="0.7rem"/>
        </div>
      </div>
    </div>

    <div class="graph ">

    </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>


<style scoped>
  .box{
    height: 250px;
    width: 300px;
    border: 3px solid rgba(128,128,128,0.2);
     border-radius:20px;
    padding: 3% 1.5%;
    margin: 2% 1% 0 ;
  }

  .writings{
    font-size: 1.5rem;
  }



  .first{
    /* width: 90%; */
  }
  .graph{
    border-radius: 20px;
    padding: 1.5%;
    height: 250px;
    width: 80%;
    margin: 5% auto;
    border: 3px solid rgba(128,128,128,0.2);
  }

  @media screen and (max-width: 771px) {
    .box{
      width: 60%
    }
  }

  @media screen and (max-width: 501px) {
    .box{
      width: 80%
    }
  }
</style>
