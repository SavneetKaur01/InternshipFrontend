//DOUGHNUT CHARTS-----------------------------

const data1 = {
  labels: ['Average', 'Remaining'],
  datasets: [
    {
      data: [78, 100 - 78],
      backgroundColor: ['#FF6384', '#E2E2E2'],
      borderWidth: 0,
    },
  ],
};

const options1 = {
  cutoutPercentage: 78,
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

const ctx1 = document.getElementById('doughnutChart1').getContext('2d');
new Chart(ctx1, {
  type: 'doughnut',
  data: data1,
  options: options1,
});




// Doughnut Chart 2
const data2 = {
  labels: ['Top', 'Remaining'],
  datasets: [
    {
      data: [95, 100 - 95],
      backgroundColor: ['#36A2EB', '#E2E2E2'],
      borderWidth: 0,
    },
  ],
};

const options2 = {
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
  options: options2,
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
  options: options3,
});
  



