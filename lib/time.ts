import { schedule } from "@/content/site";

/** 開催地の現地時刻 "HH:mm" → Date */
export const hostTime = (hhmm: string) =>
  new Date(`${schedule.date}T${hhmm}:00${schedule.hostUtcOffset}`);

export const minutesBetween = (a: string, b: string) =>
  (hostTime(b).getTime() - hostTime(a).getTime()) / 60000;
