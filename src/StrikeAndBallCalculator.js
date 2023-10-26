export function calculateStrikeAndBall(userNumbers, computerNumbers) {
  let strike = 0;
  let ball = 0;

  const computerNumberSet = new Set(computerNumbers);

  userNumbers.forEach((number, index) => {
    if (number === computerNumbers[index]) {
      strike += 1;
    } else if (computerNumberSet.has(number)) {
      ball += 1;
    }
  });

  return { strike, ball };
}
