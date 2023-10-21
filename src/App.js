import { MissionUtils } from "@woowacourse/mission-utils";


// 컴퓨터의 난수 생성
function randomNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join("");
}


// 실행
class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let computer_number = randomNumber();
    console.log(computer_number);
  }
}

export default App;
