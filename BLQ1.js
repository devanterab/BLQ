function calculateShopping(money, items) {
  let spentMoney = 0;
  let boughtItems = 0;

  for (const itemName in items) {
    const itemPrices = items[itemName];

    const minPrice = Math.min(...itemPrices);

    if (spentMoney + minPrice <= money) {
      spentMoney += minPrice;
      boughtItems++;
    }
  }

  return { spentMoney, boughtItems };
}

const money = 1000;
const items = {
  kacamata: [500, 600, 700, 800],
  baju: [200, 400, 350],
  sepatu: [400, 350, 200, 300],
  buku: [100, 50, 150],
};

const results = calculateShopping(money, items);

console.log(`Jumlah maksimal uang yang bisa dipakai: ${results.spentMoney}`);
console.log(`Jumlah item yang bisa dibeli: ${results.boughtItems}`);
