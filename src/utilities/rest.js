const countRestDays = (baseDaysToCheck, allOtherDaysOrdered, counter) => {
  const [first, second, third, fourth, fifth, sixth] = allOtherDaysOrdered;
  baseDaysToCheck.forEach(name => {
    let count = 0;
    if (first.includes(name)) return (counter[name] = count);
    count++;
    if (second.includes(name)) return (counter[name] = count);
    count++;
    if (third.includes(name)) return (counter[name] = count);
    count++;
    if (fourth.includes(name)) return (counter[name] = count);
    count++;
    if (fifth.includes(name)) return (counter[name] = count);
    count++;
    if (sixth.includes(name)) return (counter[name] = count);
    count++;
  });
};

const generateRestData = allItems => {
  const [mondayNames, tuesdayNames, wednesdayNames, thursdayNames, fridayNames, saturdayNames, sundayNames] = allItems.map(day =>
    day.map(item => item?.category?.name)
  );

  const daysBetween = {
    monday: {},
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {},
    saturday: {},
    sunday: {}
  };

  countRestDays(mondayNames, [tuesdayNames, wednesdayNames, thursdayNames, fridayNames, saturdayNames, sundayNames], daysBetween.monday);
  countRestDays(tuesdayNames, [wednesdayNames, thursdayNames, fridayNames, saturdayNames, sundayNames, mondayNames], daysBetween.tuesday);
  countRestDays(wednesdayNames, [thursdayNames, fridayNames, saturdayNames, sundayNames, mondayNames, tuesdayNames], daysBetween.wednesday);
  countRestDays(thursdayNames, [fridayNames, saturdayNames, sundayNames, mondayNames, tuesdayNames, wednesdayNames], daysBetween.thursday);
  countRestDays(fridayNames, [saturdayNames, sundayNames, mondayNames, tuesdayNames, wednesdayNames, thursdayNames, fridayNames], daysBetween.friday);
  countRestDays(saturdayNames, [sundayNames, mondayNames, tuesdayNames, wednesdayNames, thursdayNames, fridayNames], daysBetween.saturday);
  countRestDays(sundayNames, [mondayNames, tuesdayNames, wednesdayNames, thursdayNames, fridayNames, saturdayNames], daysBetween.sunday);

  const problemDays = {};

  Object.entries(daysBetween).forEach(([day, exercises]) => {
    Object.entries(exercises).forEach(([name, count]) => {
      if (count <= 0) {
        if (!problemDays[day]) problemDays[day] = [];

        problemDays[day].push(name);
      }
    });
  });

  console.warn({ problemDays });

  // const labels = [];
  // const data = [];

  // Object.entries(problemDays).forEach(([day, name]) => {
  //   labels.push(day);
  //   data.push(name);
  // });

  // return { labels, data };

  console.warn(Object.entries(problemDays));

  return { problemDays: Object.entries(problemDays) };
};

export { generateRestData };
