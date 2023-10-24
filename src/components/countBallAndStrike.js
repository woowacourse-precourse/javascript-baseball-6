import printCount from "./printCount";

const countBallAndStrike = (randomNumber, inputNumber) => {
  let cntBall = 0;
  let cntStrike = 0;

  for (let i = 0; i < 3; i++) {
    if (randomNumber[i] === inputNumber[i]) {
      cntStrike += 1;
    } else {
      if (randomNumber.includes(inputNumber[i])) {
        cntBall += 1;
      }
    }
  }

  printCount(cntBall, cntStrike, randomNumber);
};

export default countBallAndStrike;
