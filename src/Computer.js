import { Player } from "./Player";
export class Computer extends Player {
  compareNum(userNumber) {
    this.validation(userNumber);

    return this.#checkResult(this.number, userNumber);
  }

  #checkResult(answer, userNumber) {
    const defaultValue = { strike: 0, ball: 0 };

    return answer.reduce((acc, current, index) => {
      if (current === userNumber[index]) {
        acc.strike += 1;
        return acc;
      }

      if (userNumber.includes(current)) acc.ball += 1;

      return acc;
    }, defaultValue);
  }
}
