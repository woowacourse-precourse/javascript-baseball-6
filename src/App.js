import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let computerAnswer = [];
    let ballCount = 0;
    let strikeCount = 0;
    let userInput = "";
    let output = "";
    let userAnswer = [];
    let isContinue = "1";
    let turn = 1;
    let isValidationInput = true;

    const makeAnswer = () => {
      let computer = [];
      while (computer.length < 3) {
        const selectedNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(selectedNumber)) computer.push(selectedNumber);
      }
      return computer;
    };

    while (isContinue !== "2") {
      if (turn === 1) {
        computerAnswer = makeAnswer();
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      }

      userInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      ).then((answer) => {
        return answer;
      });

      isValidationInput = /^\d{3}$/.test(userInput);

      if (!isValidationInput)
        throw new Error("[ERROR] 잘못된 값을 입력하셨습니다.");

      turn++;

      for (let i = 0; i <= 2; i++) {
        userAnswer.push(parseInt(userInput.split("")[i]));
      }

      for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
          if (userAnswer[i] === computerAnswer[j]) {
            if (i === j) {
              strikeCount++;
            } else {
              ballCount++;
            }
          }
        }
      }

      if (ballCount === 0 && strikeCount === 0) {
        output += "낫싱";
      } else {
        if (ballCount !== 0) {
          output += `${ballCount}볼 `;
        }
        if (strikeCount !== 0) {
          output += `${strikeCount}스트라이크`;
        }
      }
      MissionUtils.Console.print(output);

      if (strikeCount === 3) {
        turn = 1;
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        isContinue = await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        ).then((answer) => {
          return answer;
        });
      }

      strikeCount = 0;
      ballCount = 0;
      output = "";
      userAnswer = [];
    }
  }
}

const app = new App();
app.play();

export default App;
