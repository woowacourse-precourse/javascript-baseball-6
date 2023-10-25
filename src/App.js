import { Console } from "@woowacourse/mission-utils";
import { isValid } from "./IsValid";
import { calculateResult } from "./CalculateResult";
import { generateComputerNumbers } from "./GeneratorComputerNumber";


class App {
  async play() {
    // (1) 사용자에게 게임을 시작한다는 메시지를 표시한다.
    Console.print("숫자 야구 게임을 시작합니다.");

    let restart = false;

    while (!restart) {
      // (2) 컴퓨터가 1에서 9까지 서로 다른 임의의 숫자 3개를 선택한다. 

      const computerNumbers = generateComputerNumbers();
      while (true) {

        // (3) 사용자의 서로 다른 3자리의 숫자를 입력받는다.
        const userInput = await Console.readLineAsync("입력해주세요 : ");

        // (4) 입력값에 대한 유효성을 체크한다.
        isValid(userInput, !restart);

        // (5) 입력 값에 대한 결과를 계산한다.
        const result = calculateResult(userInput, computerNumbers);

        // (6) 결과를 사용자에게 표시한다 (스트라이크, 볼, 낫싱 등).
        Console.print(result);

        // (7) 만약 3스트라이크가 나온다면, "3개의 숫자를 모두 맞히셨습니다! 게임 종료" 메시지를 표시하고 게임을 종료한다.
        if (result == "3스트라이크") {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          break;
        }
      }

      // (8) 게임 종료 후 "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요" 메시지를 표시하고 사용자로부터 재시작 또는 종료 여부를 입력받는다.
      if (!restart) {
        const restartInput = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요");

        // (9) 입력값에 대한 유효성을 체크한다.
        isValid(restartInput, restart);

        // (10) 사용자 입력에 따라 게임을 다시 시작하거나 완전히 종료한다.
        restart = restartInput == "2"; // 입력값이 2이면 종료
      }
    }
  }
}

export default App;