import React, { useState } from 'react';

const Cell = ({ item }) => {
  return <div className="bg-white">{JSON.stringify(item)}</div>;
};

const Column = ({ header, items, onAdd }) => {
  const [newItem, setNewItem] = useState('');
  return (
    <div className="flex flex-col m-2">
      <h1 className="uppercase text-xl font-bold">{header}</h1>
      <div>
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
