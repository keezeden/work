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
    <div className="w-screen h-screen bg-gray-200 py-6 px-10">
      <div className="flex flex-row mb-12">
        <div className="w-full flex flex-row">
          <Column header="monday" items={mondayItems} onAdd={addItemToDay(setMondayItems)} />
          <Column header="tuesday" items={tuesdayItems} onAdd={addItemToDay(setTuesdayItems)} />
          <Column header="wednesday" items={wednesdayItems} onAdd={addItemToDay(setWednesdayItems)} />
          <Column header="thursday" items={thursdayItems} onAdd={addItemToDay(setThursdayItems)} />
          <Column header="friday" items={fridayItems} onAdd={addItemToDay(setFridayItems)} />
          <Column header="saturday" items={saturdayItems} onAdd={addItemToDay(setSaturdayItems)} />
          <Column header="sunday" items={sundayItems} onAdd={addItemToDay(setSundayItems)} />
        </div>
        <button className="font-bold text-lg bg-orange-400 rounded-lg px-4 py-3 absolute bottom-0 right-0 m-8 focus:outline-none" onClick={makeChart}>
          Generate
        </button>
      </div>
      <div className="w-1/3 bg-white rounded-lg px-4 py-2">
        <canvas id="chart"></canvas>
      </div>
    </div>
  );
};

export { Home };
