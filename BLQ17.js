function countMountainsAndValleys(path) {
  let level = 0;
  let mountainCount = 0;
  let valleyCount = 0;

  for (const step of path) {
    if (step === "N") {
      level++;
    } else if (step === "T") {
      level--;
    }

    if (level === 0) {
      if (step === "N") {
        valleyCount++;
      } else if (step === "T") {
        mountainCount++;
      }
    }
  }

  return { mountainCount, valleyCount };
}

const hattoriPath = [
  "N",
  "N",
  "T",
  "N",
  "N",
  "N",
  "T",
  "T",
  "T",
  "T",
  "T",
  "N",
  "T",
  "T",
  "T",
  "N",
  "T",
  "N",
];
const result = countMountainsAndValleys(hattoriPath);

console.log("Jumlah Gunung:", result.mountainCount);
console.log("Jumlah Lembah:", result.valleyCount);
