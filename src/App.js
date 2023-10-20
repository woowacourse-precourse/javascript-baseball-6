import { Console, MissionUtils } from "@woowacourse/mission-utils";
// Console.readLineAsync
// Console.print

class App {
  async play(computer, user) {
    Console.print("숫자 야구 게임을 시작합니다.");
    Console.print(computer);
    // Console.print(answers);
  }
}
const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}

const app = new App();
app.play();
export default App;
