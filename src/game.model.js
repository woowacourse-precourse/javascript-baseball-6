import { MissionUtils } from "@woowacourse/mission-utils";

const Consol = MissionUtils.Consol;
const Random = MissionUtils.Random;

class Game {
  

  startText() {
    Consol.print("숫자 야구 게임을 시작합니다.");
  }

  ComputerNumberSet() {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 9, 3);
    computerNumber = randomNumber;
  }

  async UserNumberSet() {
    const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
    for (let i = 0; i < 3; i++) {
      if (!+userInput) {
        throw error;
      }
      userNumber.push(userInput[i]);
    }
  }
}

export default Game;
