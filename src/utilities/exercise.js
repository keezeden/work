const generateExerciseData = allItems => {
  const labelNames = [...allItems].map(item => item?.name);

  const labelMap = {};

  labelNames.map(item => {
    if (!item) return;
    labelMap[item] = 0;
  });

  allItems.forEach(item => labelMap[item.name]++);

  const labels = Object.keys(labelMap);
  const data = Object.values(labelMap);

  return { labels, data };
};

export { generateExerciseData };
