import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  isValid(input) {
    const numCheck = /^[1-9]{3}$/.test(input); //3자리 숫자인지 확인
    if (!numCheck) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    return true;
  }
  rusultCheck(me, computer) {
    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < 3; i++) {
      if (me[i] === computer[i]) {
        strikeCount++;
      } else if (computer.includes(me[i])) {
        ballCount++;
      }
    }
    if (strikeCount === 0 && ballCount === 0) {
      return "낫싱";
    } else if (strikeCount === 3) {
      return "3스트라이크";
    } else {
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    }
  }
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다!");
      let finish = false;
      let gameOver = false;
      while (!gameOver) {
        let computer = [];
        let me = [];

        while (computer.length < 3) {
          const number = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!computer.includes(number)) {
            computer.push(number);
          }
        }
        while (!finish) {
          let userInput =
            await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 :");

          if (this.isValid(userInput) === true) {
            userInput = Number(userInput);
            for (let i = 0; i < 3; i++) {
              me.push(Math.floor(userInput / 10 ** (2 - i)));
              userInput = userInput % 10 ** (2 - i);
            }
            const result = this.rusultCheck(me, computer);
            MissionUtils.Console.print(result);

            if (result === "3스트라이크") {
              finish = true;
            }
          }

          if (finish === true) {
            MissionUtils.Console.print(
              "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
            );
            MissionUtils.Console.print(
              "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
            );

            const next = await MissionUtils.Console.readLineAsync("");

            if (next === "1") {
              finish = false;
              computer = [];
              break;
            } else if (next === "2") {
              gameOver = true;
              break;
            } else {
              throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
            }
          }

          me = [];
        }
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
