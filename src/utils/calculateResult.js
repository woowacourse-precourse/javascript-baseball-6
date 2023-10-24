function calculateResult(computerNumber, playerNumber) {
  const result = { strike: 0, ball: 0 };

  playerNumber.split('').forEach((n, idx) => {
    if (computerNumber.indexOf(n) === idx) result.strike++;
    else if (computerNumber.split('').includes(n)) result.ball++;
  });

  return result;
}

export default calculateResult;
