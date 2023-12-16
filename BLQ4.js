function generatePrimes(n) {
  const primes = [];
  let currentNumber = 2;

  while (primes.length < n) {
    if (isPrime(currentNumber)) {
      primes.push(currentNumber);
    }
    currentNumber++;
  }

  return primes;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const numberOfPrimes = 10;
const primeNumbers = generatePrimes(numberOfPrimes);
console.log(` ${numberOfPrimes} Bilangan Prima Pertama: `, primeNumbers);
