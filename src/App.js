import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    gameStart();
  }
}

// 1. 게임 시작
const gameStart = () => {
  // 1-1. 게임 시작 문구 출력
  Console.print("숫자 야구 게임을 시작합니다.");

  // 1-2. 컴퓨터의 랜덤값 생성
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
};

const app = new App();
app.play();

export default App;
