import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';

Chart.register(...registerables);

const useHome = () => {
  const [mondayItems, setMondayItems] = useState([]);
  const [tuesdayItems, setTuesdayItems] = useState([]);
  const [wednesdayItems, setWednesdayItems] = useState([]);
  const [thursdayItems, setThursdayItems] = useState([]);
  const [fridayItems, setFridayItems] = useState([]);
  const [saturdayItems, setSaturdayItems] = useState([]);
  const [sundayItems, setSundayItems] = useState([]);

  const addItemToDay = itemsSetter => item => {
    itemsSetter(items => [...items, item]);
  };

  const allDayItems = [...mondayItems, ...tuesdayItems, ...wednesdayItems, ...thursdayItems, ...fridayItems, ...saturdayItems, ...sundayItems];

  const labelsSet = [...new Set(allDayItems)];

  const labelMap = labelsSet.reduce((acc, curr) => ((acc[curr] = 0), acc), {});
  allDayItems.forEach(item => labelMap[item]++);

  const labels = Object.keys(labelMap);
  const itemData = Object.values(labelMap);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(65, 3, 252)',
          'rgb(242, 61, 206)',
          'rgb(20, 201, 20)',
          'rgb(135, 95, 15)',
          'rgb(235, 192, 232)'
        ],
        data: itemData
      }
    ]
  };

  const chartConfig = {
    type: 'doughnut',
    data: data,
    options: {}
  };

  const makeChart = () => {
    const itemsChart = new Chart(document.getElementById('chart'), chartConfig);
  };

  return {
    makeChart,
    addItemToDay,
    mondayItems,
    tuesdayItems,
    wednesdayItems,
    thursdayItems,
    fridayItems,
    saturdayItems,
    sundayItems,
    setMondayItems,
    setTuesdayItems,
    setWednesdayItems,
    setThursdayItems,
    setFridayItems,
    setSaturdayItems,
    setSundayItems
  };
};

export { useHome };
