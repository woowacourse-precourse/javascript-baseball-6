import { Console, MissionUtils, Random } from '@woowacourse/mission-utils';
class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    pushComputerNumber();
    printUserAnswer();
  }
}

class Computer {}

// 컴퓨터가 랜덤으로 숫자를 고름
const computer = [];

function pushComputerNumber() {
  for (let i = 1; i < 4; i++) {
    number = Random.pickNumberinRange(1, 10);
    computer.push(number);
  }
}
// 사용자의 대답 출력하기
async function printUserAnswer() {
  try {
    await Console.readLineAsync('숫자를 입력해주세요: ');
  } catch (error) {
    // reject 되는 경우 error 출력
    Console.print('[ERROR] ');
  }
}

// 서로 다른 세 자리 수 입력받기

// 결과 출력하기

const app = new App();
app.play();

export default App;
