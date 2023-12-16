function calculateWaterIntake(caloriesData, exerciseStartTime) {
  const totalExerciseTime = caloriesData.reduce((total, entry) => {
    return total + (exerciseStartTime - entry.time);
  }, 0);

  const waterIntake = (totalExerciseTime / 0.1) * 100 + 500;

  return waterIntake;
}

const caloriesData = [
  { time: 9, calories: 30 },
  { time: 13, calories: 20 },
  { time: 15, calories: 50 },
  { time: 17, calories: 80 },
];

const exerciseStartTime = 18;

const waterIntake = calculateWaterIntake(caloriesData, exerciseStartTime);
console.log("Jumlah air yang diminum Donna:", waterIntake, "cc");
