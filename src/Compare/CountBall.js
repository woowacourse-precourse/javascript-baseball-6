const CountStrike = (computerNumber, userNumber) => {
  let strikeNumber = 0;

  for (let index = 0; index < computerNumber.length; index += 1) {
    if (computerNumber[index] === userNumber[index]) {
      strikeNumber += 1;
    }
  }

  return strikeNumber;
};

export default CountStrike;
