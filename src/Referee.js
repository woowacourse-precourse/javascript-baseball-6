import { MESSAGE, BASEBALL } from './Constant.js';
import Computer from './Computer.js';

class Referee {
  constructor() {
    this.computer = new Computer();
  }

  scoreCalculate(userInput) {
    const userNumber = userInput.split('').map((number) => Number(number));
    let [strike, ball] = [0, 0];

    this.computer.number.forEach((number, idx) => {
      if (number === userNumber[idx]) {
        return strike += 1;
      }
      if (this.computer.number.includes(userNumber[idx])) {
        return ball += 1;
      }
    });

    return [strike, ball];
  }

  scoreResult(userInput) {
    const [strike, ball] = this.scoreCalculate(userInput);

    if (strike === BASEBALL.MAX_LENGTH) return true;
    if (strike === 0 && ball === 0) return MESSAGE.NOTHING;
    if (strike === 0) return `${ball}${MESSAGE.BALL}`;
    if (ball === 0) return `${strike}${MESSAGE.STRIKE}`;

    return `${ball}${MESSAGE.BALL} ${strike}${MESSAGE.STRIKE}`;
  }
}

export default Referee;
