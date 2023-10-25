import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const COMPUTER = [];

    while (COMPUTER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }

    console.log(COMPUTER);

    let attempts = 0;

    while (true) {
      try {
        const USERINPUT = await this.getUserInput();
        const USERINPUTARRAY = USERINPUT.split('');

        if (USERINPUTARRAY.length !== 3 || !USERINPUTARRAY.every(isValidNumber)) {
          throw new Error("잘못된 입력입니다.");
        }

        let BALLCOUNT = 0;
        let STRIKECOUNT = 0;

        for (let i = 0; i < 3; i++) {
          if (USERINPUTARRAY[i] == COMPUTER[i]) {
            STRIKECOUNT++;
          } else if (COMPUTER.includes(USERINPUTARRAY[i])) {
            BALLCOUNT++;
          }
        }

        if (STRIKECOUNT === 3) {
          MissionUtils.Console.print("3스트라이크");
          break;
        } else if (STRIKECOUNT === 0 && BALLCOUNT === 0) {
          MissionUtils.Console.print("낫싱");
        } else {
          MissionUtils.Console.print(`${BALLCOUNT > 0 ? `${BALLCOUNT}볼` : ''}${STRIKECOUNT > 0 ? `${STRIKECOUNT}스트라이크` : ''}`);
        }

        attempts++;
      } catch (error) {
        MissionUtils.Console.print("오류 발생: " + error.message);
        process.exit(1);
      }
    }

    MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);

  }

  async getUserInput() {
    return await MissionUtils.Console.readLineAsync('숫자를 입력해주세요: ');
  }
}

function isValidNumber(input) {
  const number = Number(input);
  return !isNaN(number) && number >= 1 && number <= 9;
}

const app = new App();
app.play();
export default App;