import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    console.log(computer);

    // 스트라이크인 경우 -> ball을 -1 하고 스트라이크를 +1
    // ball 인 경우 -> ball + 1
    // 마지막에 최종적으로 검사해서 숫자가 0인건 출력하지 않게 함

    // 주어진 질문을 화면에 출력하고, 사용자가 입력한 답변을 Promise를 통해 반환한다.
    // promise를 통해 반환되니까 promise를 이용해서 하라는뜻인거같은데?
    // getUsername();
  }
}

const app = new App();
app.play();

export default App;
