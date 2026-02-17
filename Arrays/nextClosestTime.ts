// 681. Next Closest Time
// Given a time represented in the format "HH:MM", form the next closest time
// by reusing the current digits. There is no limit on how many times a digit can be reused.
// You may assume the given input string is always valid. For example, "01:34", "12:09"
// are all valid. "1:34", "12:9" are all invalid.

// Time wraps around after 23:59 → 00:00.
// So the “next” time might be:
// later on the same day or the next day
// hence we treat time as minutes in a 24-hour cycle (0–1439).
function nextClosestTime(time: string): string {
  const digits = time.split("").filter((d) => d !== ":");

  const hour = time.split(":")[0];
  const minutes = time.split(":")[1];
  const curr = Number(hour) * 60 + Number(minutes);

  for (let i = 1; i <= 1440; i++) {
    const candidateMinutes = (curr + i) % 1440;

    const hour = Math.floor(candidateMinutes / 60);
    const minute = candidateMinutes % 60;
    const hStr = hour.toString().padStart(2, "0");
    const mStr = minute.toString().padStart(2, "0");
    const candidate = `${hStr}:${mStr}`;

    let valid = candidate.split("").every((char) => {
      if (char !== ":") {
        return digits.includes(char);
      } else {
        return true;
      }
    });
    if (valid) {
      return candidate;
    }
  }
}
