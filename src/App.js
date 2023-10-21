import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // while로 반복해야 할지도>

    //# 컴퓨터 값 생성.
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9); // 함수 이름이 number를 pick하는 것이므로, number형으로 준다고 생각하는게 맞겠지.
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }
}

export default App;
