const data = [1, 2, 4, 7, 8, 6, 9];

function min(data) {
  return Math.min(...data);
}

function max(data) {
  return Math.max(...data);
}

const dataMin = min(data.slice(0, 4));
const dataMax = max(data.slice(0, 4));

console.log(`Nilai minimal: ${dataMin}`);
console.log(`Nilai maksimal: ${dataMax}`);
