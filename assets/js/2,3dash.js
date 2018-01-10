
var ctx = document.getElementById("sessionsPlayers").getContext("2d");
data = {
            labels: ["09/07/2016", "09/14/2016", "09/21/2016", "09/28/2016", "10/05/2016", "10/12/2016", "10/19/2016"],
            datasets: [{
                label: "CIML Foot",
                backgroundColor: "rgba(77,179,77,0.5)",
                data: [10, 10, 3, 5, 10, 10, 8],
                borderColor: "transparent"
            },{
                label: "La Drink Team",
                backgroundColor: "rgba(77,79,177,0.5)",
                data: [12, 12, 1, 4, 12, 12, 8],
                borderColor: "transparent"
            }]
        };
var myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    elements: {
      rectangle: {
        borderWidth: 2,
        borderColor: 'rgb(0, 255, 0)',
        borderSkipped: 'bottom'
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Nombre d\'inscrits'
    }
  }
});


var ctx2 = document.getElementById("sessionsTypes").getContext("2d");
var myChart = new Chart(ctx2, {
    type: 'radar',
    data: {
      labels: ["Water-Polo", "Football", "Squash", "Badminton", "Pétanque"],
      datasets: [{
        label: "Mes types de sessions",
        backgroundColor: "rgba(77,179,77,0.5)",
        pointBackgroundColor: "rgba(77,179,77,0.8)",
        data: [25, 10, 3, 2, 5]
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Mes types de sessions'
      },
      scale: {
        reverse: false,
        ticks: {
          beginAtZero: true
        }
      }
    }
});