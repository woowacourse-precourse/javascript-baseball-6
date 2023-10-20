import { Console } from "@woowacourse/mission-utils";
// import playBaseball from "./game/gamePlay.js";
import handleUserInput from "./handleAnswer/handleUserInput.js";
import printHint from "./game/gameHint.js";
import makeAnswer from "./handleAnswer/makeAnswer.js";

let computerAnswer = makeAnswer();
class App {
  async play() {
    while (true) {
      Console.print(computerAnswer);

      const userInput = await Console.readLineAsync("숫자를 입력해주세요 :");
      let userAnswer = handleUserInput(userInput); //예외 처리 후 userInput을 반환
      //  ballmanager(computerAnswer, userAnswer);
      if (computerAnswer === userAnswer) {
        Console.print("3스트라이크");
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const replay = await Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        if (replay === "1") {
          computerAnswer = makeAnswer();
          continue;
        } else if (replay === "2") {
          Console.print("게임 종료");
          break;
        }
      } else {
        printHint(computerAnswer, userAnswer);
        continue;
      }
    }
  }
}

const app = new App();
app.play();

export default App;
