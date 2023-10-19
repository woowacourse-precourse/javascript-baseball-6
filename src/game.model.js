import { MissionUtils } from "@woowacourse/mission-utils";

const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class Game {
  startText() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  ComputerNumberSet() {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 9, 3);
    computerNumber = randomNumber;
  }

  async UserNumberSet() {
    userNumber = [];
    const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
    for (let i = 0; i < 3; i++) {
      if (!+userInput) {
        throw error;
      }
      userNumber.push(userInput[i]);
    }
  }

  compare() {
    STIRKE = 0;
    BALL = 0;

    for (let i = 0; i < 3; i++) {
      if (computerNumber[i] === userNumber[i]) {
        STRIKE++;
      } else if (userNumber.includes(computerNumber[i])) {
        BALL++;
      }
    } 
  }

  result() {
    if (STRIKE && BALL) {
      Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
    }else if(STIRKE) {
      Console.print(`${STRIKE}스트라이크`);
    }else if(BALL) {
      Console.print(`${BALL}볼`);
    }else {
      Console.print(`낫싱`);
    }

    if(STIRKE == 3) {
      Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    }
  }
  
}

export default Game;
