import { useEffect, useState } from 'react';
import * as data from '../../../../exercises.json';
import { hydrate } from '../../../utilities/hydrate';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    if (!searchTerm) return;

    const results = data.exercises.filter(exercise => {
      const normalizedName = exercise.name.toLowerCase();
      const normalizedTerm = searchTerm.toLowerCase();
      return normalizedName.includes(normalizedTerm);
    });

    const hydratedResults = results.map(hydrate);

    setSearchResults(hydratedResults);
  }, [searchTerm]);

  return { setSearchTerm, searchResults };
};

export { useSearch };
