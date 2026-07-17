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
    let week = [formattedMonday]
    for (let i = 1; i <= 6; i++) {
      date.setDate(date.getDate() + 1);
      const weekDay = new Date(date);
      let [year, month, day] = [
        weekDay.getFullYear(),
        weekDay.getMonth() + 1,
        weekDay.getDate(),
      ];
      day < 10 ? (day = String(day).padStart(2, "0")) : day;
      month < 10 ? (month = String(month).padStart(2, "0")) : month;
      const formattedWeekday = `${day}/${month}/${year}`;
      week.push(formattedWeekday)
    }
    weeks.push(week)
    date.setDate(date.getDate() + 1);
  }

  let sortedWeeks = [];

  for (let i = weeks.length - 1; i >= 0; i--) {
    sortedWeeks.push(weeks[i]);
  }

  return sortedWeeks;
}

export { getWeekDates };
