// Anime.js animation
anime({
  targets: ".el",
  translateX: 250,
  rotate: "1turn",
  backgroundColor: "#FFF",
  duration: 2000,
  easing: "easeInOutQuad",
  loop: true,
  direction: "alternate",
});

// Chart.js setup
var ctx = document.getElementById("myChart").getContext("2d");
var chart;

function createChart(chartType, data, options) {
  if (chart) {
    chart.destroy();
  }
  chart = new Chart(ctx, {
    type: chartType,
    data: data,
    options: Object.assign({}, options, {
      animation: {
        duration: 2000,
        easing: "easeInOutQuad",
      },
    }),
  });
}

var chartData = {
  bar: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  line: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  },
  pie: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  radar: {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  },
};

var chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

document
  .getElementById("chartTypeSelect")
  .addEventListener("change", function () {
    var chartType = this.value;
    createChart(chartType, chartData[chartType], chartOptions);
  });

// Initialize default chart
createChart("bar", chartData.bar, chartOptions);
