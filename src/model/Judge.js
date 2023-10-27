import { CONSTANT } from "../common";

class Judge {
  constructor() {}

  getResult(strike, ball) {
    if (strike === 0 && ball === 0) return "낫싱";
    else if (strike === CONSTANT.NUMBER_LENGTH) return `${strike}스트라이크`;
    else if (ball === CONSTANT.NUMBER_LENGTH) return `${ball}볼`;
    else return `${ball}볼 ${strike}스트라이크`;
  }

  getCount(computer, user) {
    let strike = 0,
      ball = 0;
    for (let i = 0; i < CONSTANT.NUMBER_LENGTH; i++) {
      if (computer[i] === user[i]) strike += 1;
      else {
        if (computer.includes(user[i])) ball += 1;
      }
    }
    return [strike, ball];
  }
}

export default Judge;
