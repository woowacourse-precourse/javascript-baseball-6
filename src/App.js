import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computer = [];
    while (computer.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNumber)) {
        computer.push(randomNumber);
      }
    }
    console.log(computer); //DEBUG
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    getUserInput();
  }
}

async function getUserInput() {
  try {
    const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    console.log(`사용자가 입력한 숫자: ${userInput}`); //DEBUG
  } catch (error) {
    // reject 되는 경우
    console.log('getUserInput() catch문');
  }
}

const app = new App();
app.play();

export default App;
