import { Console } from "@woowacourse/mission-utils";
import { generateComputerNumbers } from "./utils/generate.js";
import { isDuplicationError, isLengthError } from "./utils/validation.js";

class App {
  async play() {
    // 게임 시작을 사용자에게 알리기
    Console.print("숫자 야구 게임을 시작합니다.");

    // 컴퓨터 숫자 랜덤 생성
    const computerNumbers = generateComputerNumbers();

    // 사용자에게 입력 받기
    const userNumbers = await Console.readLineAsync("숫자를 입력해주세요 : ");
    isLengthError(userNumbers);
    isDuplicationError(userNumbers);
  }
}

const app = new App();
app.play();

export default App;
