import {MissionUtils} from "@woowacourse/mission-utils";

class App {
  async play() {

    console.log("숫자 야구 게임을 시작합니다.");

    let isGameRunning = true;

    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    const checkNumber = async () => {
      const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

      const integer = parseInt(userInput);

      if (integer === 123) {
        isGameRunning = false;
        MissionUtils.Console.print("게임 종료");
      } else {
        MissionUtils.Console.print("틀렸습니다. 다시 시도하세요.");
        checkNumber();
      }
    };

    checkNumber();
  }

}
export default App;

const app = new App();
app.play();



