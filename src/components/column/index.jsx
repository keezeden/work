import React, { useState } from 'react';

const Cell = ({ item }) => {
  return <div className="bg-white capitalize">{item}</div>;
};

const Column = ({ header, items, onAdd }) => {
  const [newItem, setNewItem] = useState('');
  return (
    <div className="flex flex-col m-2">
      <h1 className="capitalize text-lg font-bold px-3 py-2">{header}</h1>
      <div className="py-4 bg-white rounded-lg px-4">
        {items.map(item => (
          <Cell item={item} />
        ))}
        <div className="flex flex-row">
          <input className="w-3/4" type="text" onChange={e => setNewItem(e.currentTarget.value)} />
          <button className="w-1/4 bg-white" onClick={() => onAdd(newItem)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export { Column };
