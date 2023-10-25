import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      while (1) {
        const isPlay = await this.onPlay();
        if (isPlay == 2) break;
        if (!(isPlay == 1 || isPlay == 2))
          throw new Error("[ERROR] 숫자 1과 2가운데 선택해주세요");
      }
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async onPlay() {
    try {
      let computer = this.makeComputer();

      while (1) {
        const numInput = await MissionUtils.Console.readLineAsync(
          "숫자를 입력하시오 : "
        );
        if (numInput.length === 3) {
          const [strikeNum, ballNum] = this.checkInput(numInput, computer);
          const resultMessage = this.makeMessage(strikeNum, ballNum);
          MissionUtils.Console.print(resultMessage);
          if (strikeNum === 3) break;
        } else throw new Error("[ERROR] 숫자의 개수가 3개가 아닙니다.");
      }
      MissionUtils.Console.print(
        "3개의 숫자를 모두 맞혀 게임이 종료됩니다. 게임 종료"
      );
      const isPlay = await MissionUtils.Console.readLineAsync(
        "다음판을 하려면 1, 종료하려면 2."
      );
      return isPlay;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  checkInput(numInput, computer) {
    let inputArr = numInput.split("").map(Number);
    computer = computer.map(Number);
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (inputArr[i] === computer[i]) {
        strike++;
      } else if (computer.includes(inputArr[i])) {
        ball++;
      }
    }

    return [strike, ball];
  }

  makeMessage(strikeNum, ballNum) {
    let string;
    if (strikeNum === 0) {
      if (ballNum === 0) string = "낫싱";
      else string = `${ballNum}볼`;
    } else {
      if (ballNum === 0) string = `${strikeNum}스트라이크`;
      else string = `${ballNum}볼 ${strikeNum}스트라이크`;
    }
    return string;
  }

  makeComputer() {
    const computer = [];
    while (computer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    return computer;
  }
}

export default App;
