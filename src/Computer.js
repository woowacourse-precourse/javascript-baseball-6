import { Player } from "./Player";

export class Computer extends Player {
  compareNum(userNumber) {
    this.validation(userNumber);

    return this.checkResult(this._number, userNumber);
  }

  checkResult(answer, userNumber) {
    const { strike, ball } = 0;

    for (let i = 0; i < 3; i++) {
      if (answer[i] === userNumber[i]) strike += 1;
      if (answer.include(userNumber[i])) ball += 1;
    }
    return { strike, ball };
  }
}
