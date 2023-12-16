function calculateFine(books, borrowDate, returnDate) {
  const finePerDay = 100;

  const totalDaysLent = function (book) {
    const diffInMs =
      returnDate -
      new Date(
        borrowDate.getFullYear(),
        borrowDate.getMonth(),
        borrowDate.getDate() + book.days
      );
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  };

  let totalFine = 0;
  books.forEach((book) => {
    const daysLent = totalDaysLent(book);
    const overdueDays = daysLent - book.days;
    if (overdueDays > 0) {
      totalFine += finePerDay * overdueDays;
    }
  });

  return totalFine;
}

const books = [
  { name: "A", days: 14 },
  { name: "B", days: 3 },
  { name: "C", days: 7 },
  { name: "D", days: 7 },
];

const borrowDate1 = new Date(2016, 1, 28);
const returnDate1 = new Date(2016, 2, 7);
const fine1 = calculateFine(books, borrowDate1, returnDate1);

const borrowDate2 = new Date(2018, 3, 29);
const returnDate2 = new Date(2018, 4, 30);
const fine2 = calculateFine(books, borrowDate2, returnDate2);

console.log(`Denda untuk tanggal 28 Februari 2016 - 7 Maret 2016: ${fine1}`);
console.log(`Denda untuk tanggal 29 April 2018 - 30 Mei 2018: ${fine2}`);
