import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import { generateExerciseData } from '../../../utilities/exercise';
import { generateMuscleData } from '../../../utilities/muscle';

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
    itemsSetter(items => [...items, null]);
  };

  const allDayItems = [...mondayItems, ...tuesdayItems, ...wednesdayItems, ...thursdayItems, ...fridayItems, ...saturdayItems, ...sundayItems].filter(
    item => !!item
  );

  const { labels: exerciseLabels, data: exerciseData } = generateExerciseData(allDayItems);
  const { labels: muscleLabels, data: muscleData } = generateMuscleData(allDayItems);

  const exerciseChartData = {
    labels: exerciseLabels,
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
        data: exerciseData
      }
    ]
  };

  const muscleChartData = {
    labels: muscleLabels,
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
        data: muscleData
      }
    ]
  };

  const pieChartConfig = {
    type: 'doughnut',
    data: exerciseChartData,
    options: {}
  };

  const barChartConfig = {
    type: 'bar',
    data: muscleChartData,
    options: {}
  };

  const lineChartConfig = {
    type: 'line',
    data: exerciseChartData,
    options: {}
  };

  const generateChart = () => {
    new Chart(document.getElementById('pie-chart'), pieChartConfig);
    new Chart(document.getElementById('bar-chart'), barChartConfig);
    new Chart(document.getElementById('line-chart'), lineChartConfig);
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

  const importWorkout = () => {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';

    inputElement.onchange = e => {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');

      reader.onload = readerEvent => {
        const content = readerEvent.target.result;
        const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = JSON.parse(content);
        setMondayItems(monday);
        setTuesdayItems(tuesday);
        setWednesdayItems(wednesday);
        setThursdayItems(thursday);
        setFridayItems(friday);
        setSaturdayItems(saturday);
        setSundayItems(sunday);
      };
    };

    inputElement.click();
  };

  return {
    importWorkout,
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
