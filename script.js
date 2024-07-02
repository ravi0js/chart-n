// Common dataset and color combinations
const commonData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  backgroundColors: [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
  ],
  borderColors: [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ],
};

// Anime.js animation for element movement
anime({
  targets: ".css-selector-demo .el",
  translateX: 250,
  rotate: "1turn",
  backgroundColor: "#FFF",
  duration: 2000,
  easing: "easeInOutQuad",
  loop: true,
  direction: "alternate",
});

// Chart.js setup
const ctx = document.getElementById("myChart").getContext("2d");
let chart;

function createChart(chartType, data, options) {
  if (chart) {
    chart.destroy();
  }
  chart = new Chart(ctx, {
    type: chartType,
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: commonData.backgroundColors,
          borderColor: commonData.borderColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      animation: {
        duration: 2000,
        easing: "easeInOutQuad",
      },
    },
  });
}

// Initialize default chart
document
  .getElementById("chartTypeSelect")
  .addEventListener("change", function () {
    const chartType = this.value;
    createChart(chartType, commonData, {});
  });

createChart("bar", commonData, {});
