const check = (element, index, computerNumber) => {
  if (element === computerNumber[index]) {
    return { strike: 1, ball: 0 };
  } else if (computerNumber.includes(element)) {
    return { strike: 0, ball: 1 };
  }
  return { strike: 0, ball: 0 };
};

const compareNumber = (computerNumber, userNumber) => {
  const result = { strike: 0, ball: 0 };
  userNumber.forEach((element, index) => {
    const { strike, ball } = check(element, index, computerNumber);
    result.strike += strike;
    result.ball += ball;
  });
  if (result.strike === 3) return { result: true, message: "3스트라이크" };
  else
    return {
      result: false,
      message: `${result.ball}볼 ${result.strike}스트라이크`,
    };
};

export default compareNumber;
