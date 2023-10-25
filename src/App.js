const MissionUtils = require("@woowacourse/mission-utils");

const NUM_LENGTH = 3;

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computerNum = computerPickNum();
  }
}

//(1)컴퓨터 랜덤 숫자 선택
const computerPickNum = () => {
  const computer = [];
  while (computer.length < NUM_LENGTH) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

//(2)플레이어 숫자 입력

//(3)결과 출력

//(4)게임 결과

export default App;