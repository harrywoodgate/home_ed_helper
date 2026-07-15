function getFirstMonday(year) {
  const date = new Date(year, 0, 1);

  while (date.getDay() !== 1) {
    date.setDate(date.getDate() + 1);
  }

  return date;
}

function getWeekDates(year) {
  const weeks = [];
  const date = getFirstMonday(year);
  const todaysDate = new Date();

  // error 2 29th Marches maybe dont use ISO string might fix it
  while (date.getFullYear() === year) {
    let monday = new Date(date).toISOString().split("T")[0];
    const [monYear, monMonth, monDay] = monday.split("-");
    const formattedMonday = `${monDay}/${monMonth}/${monYear}`;
    if (
      monDay > todaysDate.getDate() &&
      Number(monMonth) === Number(todaysDate.getMonth()) + 1
    ) {
      break;
    }
    date.setDate(date.getDate() + 6);
    let sunday = new Date(date).toISOString().split("T")[0];
    const [sunYear, sunMonth, sunDay] = sunday.split("-");
    const formattedSunday = `${sunDay}/${sunMonth}/${sunYear}`;
    weeks.push([formattedMonday, formattedSunday]);
    date.setDate(date.getDate() + 1);
  }

  let sortedWeeks = [];

  for (let i = weeks.length -1; i >= 0; i--) {
    sortedWeeks.push(weeks[i]);
  }

  return sortedWeeks;
}

export { getWeekDates };
