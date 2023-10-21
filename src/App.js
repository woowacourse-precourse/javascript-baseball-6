import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    //컴퓨터 랜덤값 지정
    function getComputer() {
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
    }
    //user 입력값 지정
    async function getUsername() {
      try {
        const username = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
      } catch (error) {
        // reject 되는 경우
        // console.print(error);
      }
    }
  }
}

export default App;
