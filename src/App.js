import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 게임 시작 문구 출력
    Console.print('숫자 야구 게임을 시작합니다.');

    // 컴퓨터 임의의 수 3개 선택
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    Console.print(computer)


    // //사용자 입력 
    // async function getGuess() {
    //   try {
    //     const guess = await Console.readLineAsync('숫자를 입력해주세요 : ');
    //   } catch (error) {
    //     // reject 되는 경우

    //   }
    // }

    // 사용자 입력 수와 컴퓨터 임의의 수 비교



  }
}

export default App;

const app = new App();
app.play();