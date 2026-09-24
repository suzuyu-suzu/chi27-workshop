import { schedule } from "@/content/site";

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const toLabel = (minutes: number) => {
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
};

/**
 * 表示用の時刻。schedule.startTime が設定されていればその時刻を足した実時刻、
 * 未設定なら開始からの経過時間（00:00 起点）をそのまま返します。
 */
export const displayTime = (offset: string) => {
  const base = schedule.startTime ? toMinutes(schedule.startTime) : 0;
  return toLabel(base + toMinutes(offset));
};

export const minutesBetween = (a: string, b: string) => toMinutes(b) - toMinutes(a);
