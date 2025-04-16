import React, { useState } from 'react';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, LineElement, CategoryScale,LinearScale,PointElement,Tooltip,Legend} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip,Legend);

/*const previousCount = 0;
const previousCount2 = 0;
const previousCount3 = 0;
const previousCount4 = 0;
*/
const [prevCount, setPrev] = useState(0);
const LineChart = ({ count }) =>{
  setPrev(count);
  /*previousCount = previousCount2;
  previousCount2 = previousCount3;
  previousCount3 = previousCount4;
  previousCount4 = setPrev;*/
  const data = {
    labels: ['Jan', 'Febno', 'Mar', 'Apr', 'May'],
    datasets: [
	{
	  label: 'My Data',
	  data: [3,4,5,prevCount,count],
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
