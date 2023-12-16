function convertTo24HourFormat(time12Hour) {
  const timeRegex = /^(0[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9] (AM|PM)$/;

  if (!timeRegex.test(time12Hour)) {
    return "Format waktu tidak valid";
  }

  const [time, period] = time12Hour.split(" ");
  const [hour, minute, second] = time.split(":").map(Number);

  let hour24 =
    period === "PM" && hour < 12
      ? hour + 12
      : period === "AM" && hour === 12
      ? 0
      : hour;

  hour24 = hour24.toString().padStart(2, "0");

  const time24Hour = `${hour24}:${minute}:${second}`;

  return time24Hour;
}

const time12Hour = "03:40:44 PM";
const time24Hour = convertTo24HourFormat(time12Hour);
console.log(time24Hour);
