function generateFibonacci(n) {
  const fibonacciNumbers = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextFibonacci = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
    fibonacciNumbers.push(nextFibonacci);
  }

  return fibonacciNumbers;
}

const numberOfFibonacci = 10;
const fibonacciNumbers = generateFibonacci(numberOfFibonacci);
console.log(
  ` ${numberOfFibonacci} Bilangan Fibonacci Pertama: `,
  fibonacciNumbers
);
