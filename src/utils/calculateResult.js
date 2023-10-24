function calculateResult(computerNumber, playerNumber) {
  const result = { strike: 0, ball: 0 };

  playerNumber.split('').forEach((n, idx) => {
    if (computerNumber.indexOf(n) === idx)
      result.strike++; // 같은 값의 index가 같으면 strike
    else if (computerNumber.split('').includes(n)) result.ball++; // 다른 index지만 포함되어 있으면 ball
  });

  return result;
}

export default calculateResult;
