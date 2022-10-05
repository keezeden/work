import React from 'react';
import { Search } from '../search';

const Cell = ({ item, index, editItem }) => {
  return (
    <div>
      {!item ? (
        <Search onClick={result => editItem(result, index)} />
      ) : (
        <div className="w-64 py-3 px-4 my-1 rounded-lg bg-white focus:outline-none">
          <p className="font-bold">{item.name}</p>
          <p className="text-gray-500">{item.category.name}</p>
        </div>
      )}
    </div>
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
