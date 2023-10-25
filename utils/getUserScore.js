export default function getUserScore(userAnswer, rightAnswer) {
  const userScore = {
    ball: 0,
    strike: 0,
  };

  const userAnswerNumbers = userAnswer.split("").map(Number);

  for (let i = 0; i < rightAnswer.length; i++) {
    if (userAnswerNumbers[i] === rightAnswer[i]) {
      userScore.strike++;
      continue;
    } else if (rightAnswer.includes(userAnswerNumbers[i])) {
      userScore.ball++;
    }
  }

  return userScore;
}
