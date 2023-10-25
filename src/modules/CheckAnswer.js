class CheckAnswer {
  constructor() {}

  countCorrectNumber(answer, input) {
    let inputArr = input.split("").map((number) => Number(number));
    let count = inputArr.filter((number) => answer.includes(number)).length;
    return { strike: count };
  }

  isStrike(answer, input) {
    let strike = 0;
    let inputArr = input.split("").map((number) => Number(number));
    answer.forEach((number, index) => {
      if (number === inputArr[index]) {
        strike++;
      }
    });
    return strike;
  }

  showResult() {}
}

export default CheckAnswer;
