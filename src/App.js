import { MissionUtils } from "@woowacourse/mission-utils";

// 컴퓨터가 3개의 난수 배열을 생성하는 함수
const getComputerNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

class App {
  async play() {
    MissionUtils.Console.print(getComputerNumber());
  }
}

MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
const app = new App();
app.play();

export default App;
