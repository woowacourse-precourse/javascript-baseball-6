import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    this.randomNumber();
    try {
      const userAnswer = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
      if (!this.isValidAnswer(userAnswer)) {
        console.log(this.isValidAnswer(userAnswer));
        throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
      }
    } catch (error) {
      throw error;
    }
  }
  isValidAnswer(answer) {
    // 입력값의 유효성을 검사하는 로직을 구현
    // 예를 들어, 세 자리 숫자인지 여부를 확인할 수 있습니다.
    return /^\d{3}$/.test(answer);
  }
  randomNumber(){
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }
}

export default App;

const app = new App();
app.play();
