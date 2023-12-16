function calculateDeret(n) {
  if (isNaN(n) || n <= 0) {
    throw new Error("Invalid input! N must be a positive number.");
  }

  const deret = [];
  let jumlah = 0;

  for (let i = 1; i <= n; i++) {
    const kelipatan = i * n;
    deret.push(kelipatan);
    jumlah += kelipatan;
  }

  return {
    deret,
    jumlah,
  };
}

const n = 6;
const result = calculateDeret(n);

console.log(`Deret kelipatan ${n}: ${result.deret.join(", ")}`);
console.log(`Jumlah deret: ${result.jumlah}`);
