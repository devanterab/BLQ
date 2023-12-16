function determineWinner(initialDistance, movesA, movesB) {
  let distance = initialDistance;

  for (let i = 0; i < movesA.length; i++) {
    if (movesA[i] === "G" && movesB[i] === "B") {
      distance += 2;
    } else if (movesA[i] === "B" && movesB[i] === "G") {
      distance -= 1;
    }

    if (distance === 0) {
      return i % 2 === 0 ? "A" : "B";
    }
  }

  return "Draw";
}

const initialDistance = 2;
const movesA = ["G", "G", "G"];
const movesB = ["K", "K", "B"];

const winner = determineWinner(initialDistance, movesA, movesB);
console.log("Hasil:", winner);
