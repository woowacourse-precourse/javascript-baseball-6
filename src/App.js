import { Console, MissionUtils } from "@woowacourse/mission-utils";

function startGame() {
  return Console.print("숫자 야구 게임을 시작합니다.");
}

function cpuPickNum() {
  const cpuNumArr = [];

  while (cpuNumArr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!cpuNumArr.includes(number)) {
      cpuNumArr.push(number);
    }
  }
  return cpuNumArr;
}

async function userPickNum() {
  const userNum = await Console.readLineAsync("숫자를 입력해주세요 : ");

  const numArr = userNum.split("");

  const userNumArr = numArr.map(function (e) {
    return Number(e);
  });

  return userNumArr;
}

function compareNumber() {}

class App {
  async play() {
    startGame();
  }
}

const app = new App();

app.play();

export default App;
