const ctx = document.getElementById('weatherChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ["Rain", "Temperature", "Sky"],
    datasets: [{
      label: "Confidence Levels",
      data: [0, 0, 0], 
      backgroundColor: [
        "rgba(0, 119, 204, 0.2)",
        "rgba(204, 119, 0, 0.2)",
        "rgba(119, 204, 0, 0.2)"
      ],
      borderColor: [
        "rgba(0, 119, 204, 1)",
        "rgba(204, 119, 0, 1)",
        "rgba(119, 204, 0, 1)"
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      r: {
        min: -1,
        max: 1
      }
    }
  }
});


window.chart = chart;
