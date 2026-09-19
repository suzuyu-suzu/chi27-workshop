import { schedule } from "@/content/site";

/** 開催地の現地時刻 "HH:mm" → Date */
export const hostTime = (hhmm: string) =>
  new Date(`${schedule.date}T${hhmm}:00${schedule.hostUtcOffset}`);

const part = (d: Date, timeZone: string, opts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-US", { timeZone, ...opts }).format(d);

export const formatTime = (d: Date, timeZone: string) =>
  part(d, timeZone, { hour: "2-digit", minute: "2-digit", hourCycle: "h23" });

export const formatDate = (d: Date, timeZone: string) =>
  part(d, timeZone, { weekday: "short", month: "short", day: "numeric" });

/** "UTC−4" / "UTC+5:30" 形式 */
export const utcLabel = (d: Date, timeZone: string) => {
  const name =
    new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "shortOffset" })
      .formatToParts(d)
      .find((p) => p.type === "timeZoneName")?.value ?? "GMT";
  const offset = name.replace("GMT", "").replace("-", "−");
  return `UTC${offset || "±0"}`;
};

const dayKey = (d: Date, timeZone: string) =>
  part(d, timeZone, { year: "numeric", month: "2-digit", day: "2-digit" });

/** 開始・終了の時刻範囲（日付をまたぐ場合は +1） */
export const formatRange = (start: Date, end: Date, timeZone: string) => {
  const plus = dayKey(start, timeZone) !== dayKey(end, timeZone) ? " (+1)" : "";
  return `${formatTime(start, timeZone)} – ${formatTime(end, timeZone)}${plus}`;
};

export const minutesBetween = (a: string, b: string) =>
  (hostTime(b).getTime() - hostTime(a).getTime()) / 60000;
