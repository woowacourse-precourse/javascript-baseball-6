import { Random, Console } from "@woowacourse/mission-utils";


class App {

  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer; //3개의 배열로 이루어진 랜덤값 생성
  }

  async play() {}
}

export default App;
