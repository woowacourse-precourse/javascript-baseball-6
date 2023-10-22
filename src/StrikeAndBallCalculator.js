export function calculateStrikeAndBall(userNumbers, computerNumbers) {
  let strike = 0;
  let ball = 0;

  const computerNumberSet = new Set(computerNumbers);

  userNumbers.forEach((number, index) => {
    if (number === computerNumbers[index]) {
      strike++;
    } else if (computerNumberSet.has(number)) {
      ball++;
    }
  });

  return { strike, ball };
}
