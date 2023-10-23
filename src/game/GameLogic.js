import { MissionUtils } from "@woowacourse/mission-utils";

class GameLogic {
  constructor() {}

  createComputerNumber () {
    const computerNumber = [];
    
    while (computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }

    return computerNumber;
  }

  checkNumber(computer, user) {
    let ball = 0;
    let strike = 0;
    console.log('computer: ', computer, ', user: ', user);

    for(let i = 0; i < 3 ; i++) {
      if (user.includes(computer[i])) {
        if (user.indexOf(computer[i]) === i) {
          strike += 1;
          continue;
        }
        ball += 1;
        continue;
      }
    }

    return this.printCheckNumber(ball, strike);
  }

  printCheckNumber(ball, strike) {
    let gameResult = '';

    if (ball === 0 && strike === 0) {
      gameResult = '낫싱';
    } else if (strike === 3) {
      gameResult = '3스트라이크';
    } else {
      if (ball && strike === 0) {
        gameResult = `${ball}볼`;
      } else if (ball === 0 && strike) {
        gameResult = `${strike}스트라이크`;
      }  else if (ball && strike) {
        gameResult = `${ball}볼 ${strike}스트라이크`;
      }
    }

    return gameResult;
  }
}

export default GameLogic;