import React from 'react';
import { useSearch } from './hook';

const Search = ({ onClick }) => {
  const { setSearchTerm, searchResults } = useSearch();
  return (
    <div>
      <input
        className="w-64 py-3 px-4 my-1 rounded-lg bg-white focus:outline-none"
        type="text"
        onChange={e => setSearchTerm(e.currentTarget.value)}
      />
      {searchResults && (
        <div className="z-10 overflow-y-scroll max-h-64 absolute flex flex-col">
          {searchResults.map(result => (
            <button className="w-64 py-3 px-4 my-1 rounded-lg bg-white focus:outline-none" onClick={() => onClick(result)}>
              <p className="font-bold">{result.name}</p>
              <p className="text-gray-500">{result.category.name}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export { Search };
