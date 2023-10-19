import { Console } from "@woowacourse/mission-utils";
import {
  generateComputerNumbers,
  generateResultMessage,
} from "./utils/generate.js";
import {
  isDuplicationError,
  isLengthError,
  isNumberError,
} from "./utils/validation.js";
import { compareNumbers } from "./utils/game.js";

class App {
  async play() {
    // 게임 시작을 사용자에게 알리기
    Console.print("숫자 야구 게임을 시작합니다.");

    // 컴퓨터 숫자 랜덤 생성
    const computerNumbers = generateComputerNumbers();

    while (true) {
      // 사용자에게 입력 받기
      const userNumbers = await Console.readLineAsync("숫자를 입력해주세요 : ");
      isLengthError(userNumbers);
      isDuplicationError(userNumbers);
      isNumberError(userNumbers);

      // 컴퓨터와 사용자의 숫자를 비교하기
      const result = compareNumbers(computerNumbers, userNumbers);

      // 결과 화면에 출력하기
      const resultMessage = generateResultMessage(result);
      Console.print(resultMessage);

      if (computerNumbers === userNumbers) {
        break;
      }
    }
  }
}

const app = new App();
app.play();

export default App;
