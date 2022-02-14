

new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["Sales", "Marketing", "Development", "Customer Support", "Information Technology", "Adminstration"],
      datasets: [
        {
          label: "Allocated Budget",
          fill: true,
          backgroundColor: "rgb(84 112 198)",
          borderColor: "rgb(84 112 198)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(84 112 198)",
          data: [486.2,750.2,691.21,652.146,916.82]
        }, {
          label: "Actual Spending",
          fill: true,
          backgroundColor: "rgb(145 204 117)",
          borderColor: "rgb(145 204 117)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(145 204 117)",
          pointBorderColor: "#fff",
          data: [964.5,653.5,960.1,707.5,500.45]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution in % of world population'
      }
    }
});





new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Search Engine", "Direct", "Email", "Union Ads", "Video Ads"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["rgb(84 112 198)", "rgb(145 204 117)","rgb(250 200 88)","rgb(238 102 102)","rgb(115 192 222)"],
          data: [6312,7127,4004,714,732]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});