import React from 'react';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, LineElement, CategoryScale,LinearScale,PointElement,Tooltip,Legend} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip,Legend);

const LineChart = ({ count }) =>{
  const previousCount = previousCount2;
  const previousCount2 = previousCount3;
  const previousCount3 = previousCount4;
  const previousCount4 = count;
  const data = {
    labels: ['Jan', 'Febno', 'Mar', 'Apr', 'May'],
    datasets: [
	{
	  label: 'My Data',
	  data: [{previousCount},{previousCount2},{previousCount3},previousCount5,count],
	  fill: false,
	  borderColor: 'rgb(75,192,192)',
	  tension: 0.4,
	},
     ],
   };

const options = {
  responsive: true,
  plugins: {
   legend:{position:'top'},
   tooltip: {mode: 'index', intersect: false},
   },
   scales:{
     y:{
        beginAtZero: true,
     },
   },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
