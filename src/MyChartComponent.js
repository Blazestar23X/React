import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2019",1000,400],
  ["2020",1170,460],
  ["2021",660,1120],
  ["2022","1030","540"],
];

const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales and Expeses: 2019-2022",
  };
};

function MyChartComponent () {
  return (
  	<Chart chartType="Bar" width="100%" height="400px" data={data} options={options} />
  );
}

export default MyChartComponent;
