import { Console, Random } from "@woowacourse/mission-utils";

const NUMBER_LENGTH = 3;

function start() {
  Console.print('숫자 야구 게임을 시작합니다.');

  // 컴퓨터의 랜덤값 생성
  const computer = [];
  while(computer.length < NUMBER_LENGTH) {
    const number = Random.pickNumberInRange(1, 9);
    if(!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}
class App {
  async play() {
    while(true) {
      const computer = start();
    }
  }
}

export default App;
