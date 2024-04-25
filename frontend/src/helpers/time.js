import dayjs from "dayjs";

export const ConvertIntoUTC = (time) => {
  return dayjs(time).format("HH:mm:ss.SSS[Z]");
};

export const ConvertToLocalDate = (time) => {
  return dayjs(time, "hh:mm a");
};

export const ConvertToLocal = (time) => {
  return dayjs(time, "hh:mm a").format('hh:mm a');
};
