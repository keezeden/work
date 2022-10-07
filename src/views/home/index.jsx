import React from 'react';
import { Column } from '../../components/column';
import { Search } from '../../components/search';
import { useHome } from './hook';

const Home = () => {
  const {
    inadequateRestDays,
    importWorkout,
    exportWorkout,
    generateChart,
    editItemOnDay,
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
    <div className="w-full h-screen bg-gray-100 py-6 px-10 overflow-y-scroll">
      <div className="flex flex-row mb-12">
        <div className="w-full flex flex-row">
          <Column header="monday" items={mondayItems} editItem={editItemOnDay(setMondayItems)} addItem={addItemToDay(setMondayItems)} />
          <Column header="tuesday" items={tuesdayItems} editItem={editItemOnDay(setTuesdayItems)} addItem={addItemToDay(setTuesdayItems)} />
          <Column header="wednesday" items={wednesdayItems} editItem={editItemOnDay(setWednesdayItems)} addItem={addItemToDay(setWednesdayItems)} />
          <Column header="thursday" items={thursdayItems} editItem={editItemOnDay(setThursdayItems)} addItem={addItemToDay(setThursdayItems)} />
          <Column header="friday" items={fridayItems} editItem={editItemOnDay(setFridayItems)} addItem={addItemToDay(setFridayItems)} />
          <Column header="saturday" items={saturdayItems} editItem={editItemOnDay(setSaturdayItems)} addItem={addItemToDay(setSaturdayItems)} />
          <Column header="sunday" items={sundayItems} editItem={editItemOnDay(setSundayItems)} addItem={addItemToDay(setSundayItems)} />
        </div>
        <div className="flex fixed bottom-0 right-0 m-8 space-x-2 p-2 rounded-lg bg-white">
          <button
            className="font-bold text-lg border-2 border-orange-400 text-orange-400 uppercase rounded-lg px-4 py-3 focus:outline-none"
            onClick={exportWorkout}
          >
            Export
          </button>
          <button
            className="font-bold text-lg border-2 border-orange-400 text-orange-400 uppercase rounded-lg px-4 py-3 focus:outline-none"
            onClick={importWorkout}
          >
            Import
          </button>
          <button className="font-bold text-lg bg-orange-400 text-white uppercase rounded-lg px-4 py-3 focus:outline-none" onClick={generateChart}>
            Generate
          </button>
        </div>
      </div>
      <div className="flex w-full space-x-2">
        <div className="w-1/3 bg-white rounded-lg px-4 py-2 flex justify-content items-center">
          <canvas id="pie-chart"></canvas>
        </div>
        <div className="w-1/3 bg-white rounded-lg px-4 py-2 flex justify-content items-center">
          <canvas id="bar-chart"></canvas>
        </div>
        <div className="w-1/3 bg-white rounded-lg px-4 py-2 grid grid-cols-2 grid-rows-6 gap-4">
          {inadequateRestDays.map(([day, exercises]) => (
            <div className="w-full min-h-20 py-3 px-4 rounded-lg bg-orange-400 focus:outline-none flex flex-col">
              <p className="font-bold text-white capitalize">{day}</p>
              <p className="text-white capitalize">Inadequate rest: {exercises.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Home };
