function angle(str: string) {
  let [hour, minute] = str.split(":").map(Number);

  hour = hour % 12;
  const hourAngle = hour * 30 + minute * 0.5;
  const minuteAngle = minute * 6;
  let diff = Math.abs(hourAngle - minuteAngle);

  return Math.min(diff, 360 - diff);
}
