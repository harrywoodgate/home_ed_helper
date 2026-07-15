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

  while (date.getFullYear() === year) {
    let monday = new Date(date);
    let [monYear, monMonth, monDay] = [
      monday.getFullYear(),
      monday.getMonth() + 1,
      monday.getDate(),
    ];
    monDay < 10 ? (monDay = String(monDay).padStart(2, "0")) : monDay;
    monMonth < 10 ? (monMonth = String(monMonth).padStart(2, "0")) : monMonth;
    const formattedMonday = `${monDay}/${monMonth}/${monYear}`;
    if (
      monDay > todaysDate.getDate() &&
      Number(monMonth) === Number(todaysDate.getMonth()) + 1
    ) {
      break;
    }
    date.setDate(date.getDate() + 6);
    let sunday = new Date(date);
    let [sunYear, sunMonth, sunDay] = [
      sunday.getFullYear(),
      sunday.getMonth() + 1,
      sunday.getDate(),
    ];
    sunDay < 10 ? (sunDay = String(sunDay).padStart(2, "0")) : sunDay;
    sunMonth < 10 ? (sunMonth = String(sunMonth).padStart(2, "0")) : sunMonth;
    const formattedSunday = `${sunDay}/${sunMonth}/${sunYear}`;
    weeks.push([formattedMonday, formattedSunday]);
    date.setDate(date.getDate() + 1);
  }

  let sortedWeeks = [];

  for (let i = weeks.length - 1; i >= 0; i--) {
    sortedWeeks.push(weeks[i]);
  }

  return sortedWeeks;
}

export { getWeekDates };
