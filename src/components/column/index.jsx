import React from 'react';

const Cell = ({ item, index, editItem }) => {
  return (
    <input
      className="w-full py-3 px-4 my-1 rounded-lg bg-white focus:outline-none"
      type="text"
      value={item}
      onChange={e => editItem(e.currentTarget.value, index)}
    />
  );
};

const Column = ({ header, items, editItem, addItem }) => {
  return (
    <div className="flex flex-col m-2 w-full">
      <h1 className="capitalize text-lg font-bold px-3 py-2">{header}</h1>
      <div className="bg-gray-100 rounded-lg w-full">
        {items.map((item, index) => (
          <Cell item={item} index={index} editItem={editItem} />
        ))}
        <button className="w-full font-bold py-3 px-4 my-1 rounded-lg bg-white focus:outline-none" onClick={addItem}>
          +
        </button>
      </div>
    </div>
  );
};
export { Column };
