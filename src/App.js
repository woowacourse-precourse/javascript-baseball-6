import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자야구 게임을 시작합니다.');
    const answer = genNum();
  }
}

const genNum = function generateRandomNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const app = new App();
app.play();

export default App;
