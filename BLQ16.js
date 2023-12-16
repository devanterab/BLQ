function calculateTotalPayment(foodItems, allergicPersonIndex) {
  const taxRate = 0.1;
  const serviceRate = 0.05;
  const numberOfPeople = 4;

  const menu = {
    "Tuna Sandwich": 42,
    "Spaghetti Carbonara": 50,
    "Tea pitcher": 30,
    Pizza: 70,
    Salad: 30,
  };

  let totalCost = 0;

  for (const item of foodItems) {
    totalCost += menu[item];
  }

  const tax = totalCost * taxRate;
  const serviceCharge = totalCost * serviceRate;

  const totalBill = totalCost + tax + serviceCharge;

  // Hitung pembayaran per orang
  const paymentPerPerson = totalBill / numberOfPeople;

  // Jika ada orang yang alergi ikan, kurangkan dari pembayaran orang tersebut
  const paymentArray = Array(numberOfPeople).fill(paymentPerPerson);
  if (allergicPersonIndex >= 0 && allergicPersonIndex < numberOfPeople) {
    paymentArray[allergicPersonIndex] -= menu["Tuna Sandwich"] / numberOfPeople;
  }

  return paymentArray;
}

const foodOrdered = [
  "Tuna Sandwich",
  "Spaghetti Carbonara",
  "Tea pitcher",
  "Pizza",
  "Salad",
];
const allergicPersonIndex = 2;

const payments = calculateTotalPayment(foodOrdered, allergicPersonIndex);
console.log("Pembayaran masing-masing teman:", payments);
