<template>
  <div class="row justify-center q-mt-md first">
    <div class="col-lg-3 col-md-5 col-sm-8 col-xs-12 box">
      <div class="upper-cards row items-center q-py-sm" style="height: 85px">
        <q-icon
          name="attach_money"
          class="q-ml-lg"
          size="3rem"
          color="primary"
        />
        <p class="q-my-none writings text-bold">Sales</p>
      </div>
      <p class="number text-right">
        <!-- {{ overview !== null ? overview.sales : 0 }} -->
      </p>
    </div>

    <div class="col-lg-3 col-md-5 col-sm-8 col-xs-12 box">
      <div class="upper-cards row items-center q-py-sm">
        <q-icon name="show_chart" class="q-ml-lg" size="3rem" color="primary" />
        <p class="q-my-none writings q-ml-xs text-bold">This Month</p>
      </div>
      <p class="number text-right">
        <!-- N{{ overview !== null ? overview.totalRevenue : 0 }} -->
      </p>
    </div>

    <div class="col-lg-3 col-md-10 col-sm-8 col-xs-12 box">
      <div class="upper-cards row items-center q-py-sm">
        <q-icon
          name="stacked_line_chart"
          class="q-ml-lg"
          size="3rem"
          color="primary"
        />
        <p class="q-my-none writings text-right text-bold q-ml-xs">
          Total Revenue
        </p>
      </div>
      <p class="number text-right">
        <!-- N{{ overview !== null ? overview.totalRevenue : 0 }} -->
      </p>
    </div>
  </div>

  <div id="chart" class="graph">
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  // computed: {
  //   overview() {
  //     return this.$store.getters["moduleExample/overview"];
  //   },
  // },
  data() {
    return {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        yaxis: {},
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.box {
  height: 200px;
  border: 3px solid rgba(128, 128, 128, 0.2);
  border-radius: 20px;
  padding: 3% 1.5%;
  margin: 2% 1% 0;
  position: relative;
}

.writings {
  font-size: 1.5rem;
}

.number {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
}

@media screen and (max-width: 500px) {
  .number {
    font-size: 1.5rem;
  }
}

.first {
  width: 90%;
  margin: 0 auto;
}
.graph {
  border-radius: 20px;
  padding: 1.5%;
  width: 75%;
  margin: 2.5% auto;
  border: 3px solid rgba(128, 128, 128, 0.2);
}

@media screen and (max-width: 771px) {
  .box {
    width: 60%;
  }
  .graph {
    margin-bottom: 3%;
    width: 95%;
  }
}

@media screen and (max-width: 501px) {
  .box {
    width: 100%;
  }
}
</style>
