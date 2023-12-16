function customSort(input) {
  if (!Array.isArray(input)) {
    return "Input harus berupa array";
  }

  const countMap = {};
  const result = [];

  input.forEach((num) => {
    countMap[num] = (countMap[num] || 0) + 1;
  });

  for (let num = 1; num <= 8; num++) {
    if (countMap[num]) {
      for (let i = 0; i < countMap[num]; i++) {
        result.push(num);
      }
    }
  }

  return result;
}

const userInput = [1, 2, 1, 3, 4, 7, 1, 1, 5, 6, 1, 8];
const result = customSort(userInput);
console.log(result);
