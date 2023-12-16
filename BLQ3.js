function calculateParkingFee(entryDate, entryTime, exitDate, exitTime) {
  const entryDateTime = new Date(`${entryDate} ${entryTime}`);
  const exitDateTime = new Date(`${exitDate} ${exitTime}`);

  const timeDifference = (exitDateTime - entryDateTime) / (1000 * 60 * 60);

  const rateFirst8Hours = 1000;
  const flatRate8To24Hours = 8000;
  const flatRate24To32Hours = 15000;
  const rateAfter32Hours = 1000;

  let parkingFee = 0;

  if (timeDifference <= 8) {
    parkingFee = timeDifference * rateFirst8Hours;
  } else if (timeDifference <= 24) {
    parkingFee = flatRate8To24Hours;
  } else if (timeDifference <= 32) {
    parkingFee = flatRate24To32Hours;
  } else {
    parkingFee = flatRate24To32Hours + (timeDifference - 32) * rateAfter32Hours;
  }

  return parkingFee;
}

const entryDate1 = "27 Januari 2019";
const entryTime1 = "05:00:01";
const exitDate1 = "27 Januari 2019";
const exitTime1 = "17:45:03";

const parkingFee1 = calculateParkingFee(
  entryDate1,
  entryTime1,
  exitDate1,
  exitTime1
);
console.log("Tarif Parkir 1:", parkingFee1);

const entryDate2 = "27 Januari 2019";
const entryTime2 = "07:03:59";
const exitDate2 = "27 Januari 2019";
const exitTime2 = "15:30:06";

const parkingFee2 = calculateParkingFee(
  entryDate2,
  entryTime2,
  exitDate2,
  exitTime2
);
console.log("Tarif Parkir 2:", parkingFee2);

const entryDate3 = "27 Januari 2019";
const entryTime3 = "07:05:00";
const exitDate3 = "28 Januari 2019";
const exitTime3 = "00:20:21";

const parkingFee3 = calculateParkingFee(
  entryDate3,
  entryTime3,
  exitDate3,
  exitTime3
);
console.log("Tarif Parkir 3:", parkingFee3);

const entryDate4 = "27 Januari 2019";
const entryTime4 = "11:14:23";
const exitDate4 = "27 Januari 2019";
const exitTime4 = "13:20:00";

const parkingFee4 = calculateParkingFee(
  entryDate4,
  entryTime4,
  exitDate4,
  exitTime4
);
console.log("Tarif Parkir 4:", parkingFee4);
