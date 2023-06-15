import { DateTime } from "luxon";

export const getLocalDateAndTime = (
    unixTime,
    timeZone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
    return DateTime.fromSeconds(unixTime).setZone(timeZone).toFormat(format);
};