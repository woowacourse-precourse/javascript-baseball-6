import { Console } from '@woowacourse/mission-utils';

class Referee {
  constructor() {
    this.name = 'referee';
    this.ball = 0;
    this.strike = 0;
    this.nothing = false;
  }

  checkJudgment(computerList, userList) {
    for (let i = 0; i < 3; i += 1) {
      if (computerList[i] === userList[i]) {
        this.strike += 1;
      }
    }
    for (let i = 0; i < 3; i += 1) {
      if (computerList.includes(userList[i]) === true) {
        this.ball += 1;
      }
    }
    this.ball -= this.strike;
    if (!this.ball && !this.strike) {
      this.nothing = true;
    }
  }

  printJudgment() {
    let str = '';
    if (this.nothing === true) {
      str = '낫싱';
    } else {
      if (this.ball > 0) {
        str = `${str}${this.ball}볼 `;
      }
      if (this.strike > 0) {
        str = `${str}${this.strike}스트라이크`;
      }
    }
    Console.print(str);
  }

  continueGame() {
    let answer = false;
    if (this.strike === 3) {
      answer = true;
    }
    this.ball = 0;
    this.strike = 0;
    this.nothing = false;
    return (answer);
  }
}

export default Referee;
