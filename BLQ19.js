function isPangram(sentence) {
  const lowercaseSentence = sentence.toLowerCase();

  const alphabetPresence = Array(26).fill(false);

  for (const char of lowercaseSentence) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      alphabetPresence[charCode - 97] = true;
    }
  }

  return alphabetPresence.every((presence) => presence);
}

const sentence1 = "Sphinx of black quartz, judge my vow";
const sentence2 = "Brawny gods just flocked up to quiz and vex him";
const sentence3 = "Check back tomorrow; I will see if the book has arrived.";

console.log("Kalimat 1:", isPangram(sentence1));
console.log("Kalimat 2:", isPangram(sentence2));
console.log("Kalimat 3:", isPangram(sentence3));
