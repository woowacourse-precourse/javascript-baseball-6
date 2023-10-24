const CountBall = (computerNumber, userNumber) => {
  let ballNumber = 0;

  for (let index = 0; index < computerNumber.length; index++) {
    if (
      computerNumber[index] !== userNumber[index] &&
      computerNumber.includes(userNumber[index])
    ) {
      ballNumber += 1;
    }
  }

  return ballNumber;
};

export default CountBall;
