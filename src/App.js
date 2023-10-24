import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let computerAnswer = [];
    let userAnswer = [];
    let turn = 1;
    let ballCount = 0;
    let strikeCount = 0;
    let userInput = "";
    let output = "";
    let isContinue = "1";
    let isValidationInput = true;

    const makeAnswer = () => {
      let computer = [];
      while (computer.length < 3) {
        const selectedNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(selectedNumber)) computer.push(selectedNumber);
      }

      return computer;
    };

    const handleError = (_userInput) => {
      isValidationInput = /^\d{3}$/.test(_userInput);

      if (!isValidationInput)
        throw new Error("[ERROR] 잘못된 값을 입력하셨습니다.");
      else turn++;
    };

    const handleCount = (_computerAnswer, _userAnswer) => {
      for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
          if (_userAnswer[i] === _computerAnswer[j]) {
            if (i === j) {
              strikeCount++;
            } else {
              ballCount++;
            }
          }
        }
      }
    };

    const handleOutput = (_ballCount, _strikeCount) => {
      if (_ballCount === 0 && _strikeCount === 0) {
        output += "낫싱";
      } else {
        if (_ballCount !== 0) {
          output += `${_ballCount}볼 `;
        }
        if (_strikeCount !== 0) {
          output += `${_strikeCount}스트라이크`;
        }
      }
      MissionUtils.Console.print(output);
    };

    const resetValue = () => {
      strikeCount = 0;
      ballCount = 0;
      output = "";
      userAnswer = [];
    };

    while (isContinue !== "2") {
      if (turn === 1) {
        computerAnswer = makeAnswer();
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      }

      userInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      ).then((answer) => {
        handleError(answer);
        for (let i = 0; i <= 2; i++) {
          userAnswer.push(parseInt(answer.split("")[i]));
        }
      });

      handleCount(computerAnswer, userAnswer);
      handleOutput(ballCount, strikeCount);

      if (strikeCount === 3) {
        turn = 1;
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        isContinue = await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );
      }
      resetValue();
    }
  }
}

const app = new App();
app.play();

export default App;
