import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  async getUserNumber() {
    const userInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    const userNumber = userInput.split("").map((n) => Number(n));

    return userNumber;
  }

  async getResult(comNums, guessNums) {
    let ball = 0;
    let strike = 0;
    guessNums.map((num, idx) => {
      if (comNums.includes(num)) {
        if (comNums[idx] == num) {
          strike++;
        } else {
          ball++;
        }
      }
    });
    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print("낫싱");
    } else {
      if (ball > 0) {
        if (strike > 0) {
          MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
        } else {
          MissionUtils.Console.print(`${ball}볼`);
        }
      } else if (strike > 0) {
        MissionUtils.Console.print(`${strike}스트라이크`);
      }
    }
    if (strike === 3) {
      // 게임 종료.
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
  }

  async play() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    MissionUtils.Console.print(computer);

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const userNumber = await this.getUserNumber();
  }
}

const app = new App();
app.play();

export default App;
