import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const secret_number = random_number();
    console.log(secret_number, "랜덤값");
  }
}

function random_number() {
  let computer = [];
  while (computer.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(randomNumber)) {
      computer.push(randomNumber);
    }
  }
  return computer;
}

export default App;
