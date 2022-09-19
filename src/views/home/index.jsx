import React from 'react';
import { Column } from '../../components/column';
import { useHome } from './hook';

const Home = () => {
  const {
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
  } = useHome();

  return (
    <div className="w-screen h-screen flex flex-row bg-gray-200 py-6 px-10">
      <div className="w-full flex flex-row">
        <Column header="monday" items={mondayItems} onAdd={addItemToDay(setMondayItems)} />
        <Column header="tuesday" items={tuesdayItems} onAdd={addItemToDay(setTuesdayItems)} />
        <Column header="wednesday" items={wednesdayItems} onAdd={addItemToDay(setWednesdayItems)} />
        <Column header="thursday" items={thursdayItems} onAdd={addItemToDay(setThursdayItems)} />
        <Column header="friday" items={fridayItems} onAdd={addItemToDay(setFridayItems)} />
        <Column header="saturday" items={saturdayItems} onAdd={addItemToDay(setSaturdayItems)} />
        <Column header="sunday" items={sundayItems} onAdd={addItemToDay(setSundayItems)} />
      </div>
      <div>
        <button onClick={makeChart}>Make Chart</button>
        <canvas id="chart"></canvas>
      </div>
    </div>
  );
};

export { Home };
