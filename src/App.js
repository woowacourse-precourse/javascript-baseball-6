import { MissionUtils } from "@woowacourse/mission-utils";

async function getUsernumber() {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    return userInput;
  } catch (error) {
    // reject 되는 경우
  }
}

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const computerAnswer = [];
    while (computerAnswer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerAnswer.includes(number)) {
        computerAnswer.push(number);
      }
    }

    MissionUtils.Console.print(`${computerAnswer}`);

    const userInput = await getUsernumber();
    MissionUtils.Console.print(`${userInput}`);
  }
}

export default App;

const app = new App();
app.play();
