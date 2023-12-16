function calculateClockAngle(hour, minute) {
  if (hour < 0 || hour > 12 || minute < 0 || minute >= 60) {
    return "Input waktu tidak valid";
  }

  const angle = Math.abs(30 * hour - (11 / 2) * minute);

  return Math.min(angle, 360 - angle);
}

const angle1 = calculateClockAngle(3, 0);
const angle2 = calculateClockAngle(5, 30);
const angle3 = calculateClockAngle(2, 20);

console.log(angle1);
console.log(angle2);
console.log(angle3);
