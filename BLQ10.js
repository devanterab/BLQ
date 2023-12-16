function hideCharacters(input) {
  const words = input.split(" ");

  const hiddenWords = words.map((word) => {
    return word.charAt(0) + "*".repeat(word.length - 1);
  });

  return hiddenWords.join(" ");
}

const userInput = "Rani Tiara";
const result = hideCharacters(userInput);
console.log(result);
