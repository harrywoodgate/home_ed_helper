import { getWeekDates } from "../../../utils/getWeekDates";
import { useOutletContext } from "react-router";

export default function WeekSelector() {
  const weeks = getWeekDates(2026);
  const {setWeek} = useOutletContext();

  return (
    <div className="relative">
      <select
        id="week_dates"
        className="bg-background text-xs sm:text-sm appearance-none pl-1 pr-3"
        onChange={(e) => setWeek(weeks[e.target.value])}
      >
        {weeks.map((week, i) => (
          <option key={i} value={i}>
            {week[0]}
            {" - "}
            {week[6]}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 pt-[1px]"
        width="20"
        height="20"
        fill="#0F172A"
        viewBox="0 0 20 20"
      >
        <path d="M5 7l5 5 5-5H5z" />
      </svg>
    </div>
  );
}
