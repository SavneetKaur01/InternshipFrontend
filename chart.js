document.addEventListener('DOMContentLoaded', function () {
const data = {
  labels: ['20$', ' ', '25$', ' ', '30$', ' ', '35$', ' ', '40$', ' ', '60$', ' ', '65$'],
  datasets: [
    {
      label: 'Employer: K73500',
      backgroundColor: 'rgba(0, 0, 153, 0.6)',
      data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
    },
    {
      label: 'Employee: K52500',
      backgroundColor: 'rgba(51, 51, 255, 0.6)',
      data: [2, 5, 8, 12, 15, 20, 25, 30, 35, 40, 65, 70, 75],
    },
    {
      label: 'Total Interest: K244313',
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      data: [8, 12, 18, 22, 28, 33, 38, 45, 50, 55, 60, 65, 90],
    },
  ],
};

const options = {
  responsive: false,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      ticks: {
        userCallback: function (value) {
          return value;
        },
      },
    },
    y: {
      min: 0,
      max: 300,
        
      stacked: true,
      ticks: {
        userCallback: function (value) {
          return value + '$';
        },
        stepSize: 100
        
      },
    },
  },
};

const ctx = document.getElementById('barChart').getContext('2d');
const myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options,
});






//DOUGHNUT CHARTS-----------------------------




const data1 = {
  labels: ['Average', 'Remaining'],
  datasets: [
    {
      data: [78, 100 - 78],
      backgroundColor: ['#4BC0C0', '#E2E2E2'],
      borderWidth: 0,
    },
  ],
  
};

const options1 = {
 
  cutoutPercentage: 78,
  // rotation: -Math.PI / 2,
  // circumference: Math.PI,
  //rotation: -Math.PI, // Rotate to make it start from the top
    circumference: Math.PI,
     responsive: false,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: '#fff',
      formatter: (value) => value + '%',
    },
  },
};

const ctx1 = document.getElementById('doughnutChart1').getContext('2d');
new Chart(ctx1, {
  type: 'doughnut',
  data: data1,
  //options: options1,
});




// Doughnut Chart 2
const data2 = {
  labels: ['Top', 'Remaining'],
  datasets: [
    {
      data: [95, 100 - 95],
      backgroundColor: ['#4BC0C0', '#E2E2E2'],
      borderWidth: 0,
    },
  ],
};

const options2 = {
  responsive: false,
  cutoutPercentage: 95,
  rotation: -Math.PI / 2,
  circumference: Math.PI,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: '#fff',
      formatter: (value) => value + '%',
    },
  },
};

const ctx2 = document.getElementById('doughnutChart2').getContext('2d');
new Chart(ctx2, {
  type: 'doughnut',
  data: data2,
  //options: options2,
});






// Doughnut Chart 3
const data3 = {
  labels: ['Me', 'Remaining'],
  datasets: [
    {
      data: [59, 100 - 59],
      backgroundColor: ['#4BC0C0', '#E2E2E2'],
      borderWidth: 0,
    },
  ],
};

const options3 = {
  responsive: false,
  cutoutPercentage: 59,
  rotation: -Math.PI / 2,
  circumference: Math.PI,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: '#fff',
      formatter: (value) => value + '%',
    },
  },
};

const ctx3 = document.getElementById('doughnutChart3').getContext('2d');
new Chart(ctx3, {
  type: 'doughnut',
  data: data3,
  //options: options3,
});



  


});



