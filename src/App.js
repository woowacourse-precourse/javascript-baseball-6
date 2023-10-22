import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}
}

function generateComputerNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
}

async function getUserNumber() {
  let user = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
  if (user.length !== 3 || new Set(user).size !== 3) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}

export default App;
