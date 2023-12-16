const data = [8, 7, 0, 2, 7, 1, 7, 6, 3, 0, 7, 1, 3, 4, 6, 1, 6, 4, 3];

function mean(data) {
  const sum = data.reduce((acc, value) => acc + value, 0);
  return sum / data.length;
}

function median(data) {
  const sortedData = data.sort((a, b) => a - b);
  const midIndex = Math.floor(data.length / 2);
  return data.length % 2 === 0
    ? (sortedData[midIndex] + sortedData[midIndex - 1]) / 2
    : sortedData[midIndex];
}

function modus(data) {
  const frequencyMap = {};
  for (const item of data) {
    frequencyMap[item] = frequencyMap[item] ? frequencyMap[item] + 1 : 1;
  }
  const maxFrequency = Math.max(...Object.values(frequencyMap));
  const modes = Object.keys(frequencyMap).filter(
    (key) => frequencyMap[key] === maxFrequency
  );
  return Math.min(...modes);
}

const dataMean = mean(data);
const dataMedian = median(data);
const dataModus = modus(data);

console.log(`Mean: ${dataMean}`);
console.log(`Median: ${dataMedian}`);
console.log(`Modus: ${dataModus}`);
