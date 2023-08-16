import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";

// import utc from "dayjs/plugin/utc";
// import duration from "dayjs/plugin/duration";
// import minMax from "dayjs/plugin/minMax";
// import weekOfYear from "dayjs/plugin/weekOfYear";
// import relativeTime from "dayjs/plugin/relativeTime";
// import timezone from "dayjs/plugin/timezone";

dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);

// dayjs.extend(weekOfYear);
// dayjs.extend(minMax);
// dayjs.extend(duration);
// dayjs.extend(utc);
// dayjs.extend(relativeTime);
// dayjs.extend(timezone);

export function getFormattedTime(originalDate, dateformat = "DD MMM YYYY") {
  if (originalDate) {
    const parsedDate = dayjs(originalDate, "DD/MM/YY");
    return parsedDate.format(dateformat);
  }
  return "-";
}
