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

  const editItemOnDay = itemsSetter => (item, index) => {
    itemsSetter(items => {
      const updated = [...items];
      updated.splice(index, 1, item);
      return updated;
    });
  };

  const addItemToDay = itemsSetter => () => {
    itemsSetter(items => [...items, '']);
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
        label: 'Workout Plan',
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

  const pieChartConfig = {
    type: 'doughnut',
    data: data,
    options: {}
  };

  const barChartConfig = {
    type: 'bar',
    data: data,
    options: {}
  };

  const lineChartConfig = {
    type: 'line',
    data: data,
    options: {}
  };

  const generateChart = () => {
    new Chart(document.getElementById('pie-chart'), pieChartConfig);
    new Chart(document.getElementById('bar-chart'), barChartConfig);
    new Chart(document.getElementById('another-chart'), lineChartConfig);
  };

  const exportWorkout = () => {
    const downloadElement = document.createElement('a');
    var dataBlob = new Blob(
      [
        JSON.stringify({
          monday: mondayItems,
          tuesday: tuesdayItems,
          wednesday: wednesdayItems,
          thursday: thursdayItems,
          friday: fridayItems,
          saturday: saturdayItems,
          sunday: sundayItems
        })
      ],
      {
        type: 'application/json'
      }
    );
    downloadElement.href = window.URL.createObjectURL(dataBlob);
    downloadElement.download = 'Workout Plan';
    downloadElement.click();
  };

  return {
    exportWorkout,
    generateChart,
    addItemToDay,
    editItemOnDay,
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
