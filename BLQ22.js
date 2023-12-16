function findFirstMeltedCandleLength(candleLengths) {
  const fibonacci = [1, 1];
  while (fibonacci[fibonacci.length - 1] < Math.max(...candleLengths)) {
    fibonacci.push(
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    );
  }

  const meltTimes = candleLengths.map((length, index) => {
    return length / fibonacci[index];
  });

  const firstMeltedIndex = meltTimes.indexOf(Math.min(...meltTimes));

  return firstMeltedIndex + 1;
}

const candleLengths = [3, 3, 9, 6, 7, 8, 23];

const firstMeltedCandle = findFirstMeltedCandleLength(candleLengths);
console.log("Lilin pertama yang habis meleleh:", firstMeltedCandle);
