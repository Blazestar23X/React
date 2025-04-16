import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, LineElement, CategoryScale,LinearScale,PointElement,Tooltip,Legend} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip,Legend);

/*const previousCount = 0;
const previousCount2 = 0;
const previousCount3 = 0;
const previousCount4 = 0;
*/
const LineChart = ({ count }) =>{
  const [prevCount, setPrev] = useState(0);
  const [prevCount1,setPrev1] = useState(0);
  const [prevCount2,setPrev2] = useState(0);
  const [prevCount3,setPrev3] = useState(0);
  const [prevCount4,setPrev4] = useState(0);
  useEffect(()=>{
    setPrev(prevCount1);
    setPrev1(prevCount2);
    setPrev2(prevCount3);
    setPrev3(prevCount4);
    setPrev4(count);
  }, [count]);
  /*previousCount = previousCount2;
  previousCount2 = previousCount3;
  previousCount3 = previousCount4;
  previousCount4 = setPrev;*/
  const data = {
    labels: ['120', '90', '60', '30', '0'],
    datasets: [
	{
	  label: 'Balance',
	  data: [prevCount,prevCount1,prevCount2,prevCount3,prevCount4],
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
