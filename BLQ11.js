function customOutput(input) {
  if (typeof input !== "string") {
    return "Input harus berupa string";
  }

  const reversedString = input.split("").reverse().join("");
  const output = reversedString
    .split("")
    .map((char) => `***${char}***`)
    .join("\n");

  return output;
}

const userInput = "Jeruk";
const result = customOutput(userInput);
console.log(result);
