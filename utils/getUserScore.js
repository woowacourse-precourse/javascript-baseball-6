export default function getUserScore(userAnswer, rightAnswer) {
  const userScore = {
    ball: 0,
    strike: 0,
  };

  for (let i = 0; i < rightAnswer.length; i++) {
    if (userAnswer[i] === rightAnswer[i]) {
      userScore.strike++;
      continue;
    } else if (rightAnswer.includes(userAnswer[i])) {
      userScore.ball++;
    }
  }

  return userScore;
}
