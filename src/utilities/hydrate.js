import * as data from '../../categories.json';

const hydrate = root => {
  return {
    ...root,
    category: data.categories.find(category => category.id === root.category)
  };
};

export { hydrate };
