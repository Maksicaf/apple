// Конфігурація тесту
export const quizConfig = {
  maxQuestions: 5,
  passingScore: 3,
  scoringRules: {
    correct: 1,
    incorrect: 0,
  },
};

// Функція розрахунку результатів
export function calculateResults(userAnswers) {
  const correctAnswers = {
    q1: "2007",
    q2: "macOS",
    q3: "Функція передачі файлів",
    q4: "MagSafe",
    q5: "Сканер обличчя",
  };

  let results = {
    totalCorrect: 0,
    percentage: 0,
    passed: false,
    expertLevel: "Початківець",
  };

  // Перевірка відповідей
  for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
    if (userAnswers[question] === correctAnswer) {
      results.totalCorrect += 1;
    }
  }

  // Розрахунок показників
  results.percentage = (results.totalCorrect / quizConfig.maxQuestions) * 100;
  results.passed = results.totalCorrect >= quizConfig.passingScore;

  // Визначення рівня
  if (results.percentage >= 90) {
    results.expertLevel = "Експерт Apple";
  } else if (results.percentage >= 70) {
    results.expertLevel = "Професіонал";
  } else if (results.percentage >= 50) {
    results.expertLevel = "Знавець";
  }

  return results;
}

// Збір відповідей
export function collectUserAnswers() {
  return Array.from(
    document.querySelectorAll('input[type="radio"]:checked')
  ).reduce((acc, input) => ({ ...acc, [input.name]: input.value }), {});
}
