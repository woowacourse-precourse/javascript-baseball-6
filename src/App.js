import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let result = false; // 정답체크변수
    while (true) {
      const checkedInput = await this.checkUserInput();
      if (!checkedInput) {
        break;
      }
    }
  }
  // 3개 숫자 선택
  pickRandNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  // 입력이 숫자인지 확인
  checkUserInputNumber(input) {
    const numInput = parseInt(input, 10);
    if (isNaN(numInput)) {
      return false;
    }
    return true;
  }
  // 입력된 숫자가 3자리인지 확인
  checkUserInputLength(input) {
    if (input.length !== 3) {
      return false;
    }
    return true;
  }
  // 입력된 숫자가 중복안되는지 확인
  checkUserInputDup(input) {
    const inputSet = new Set(input);
    if (inputSet.size !== input.length) {
      return false;
    }
    return true;
  }
  // 사용자 입력 값 검사
  async checkUserInput() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      if (!this.checkUserInputNumber(userInput)) {
        throw new Error("[ERROR] 입력된 값이 숫자가 아닙니다.");
      }
      if (!this.checkUserInputLength(userInput)) {
        throw new Error("[ERROR] 입력된 값이 3자리 숫자가 아닙니다.");
      }
      if (!this.checkUserInputDup(userInput)) {
        throw new Error("[ERROR] 입력된 값의 숫자가 중복됩니다.");
      }
      return userInput;
    } catch (error) {
      //todo Console.print사용 고려
      console.error(error.message);
      throw new Error("[ERROR]");
    }
  }
  // 스트라이크, 볼 판정
  checkScore(answer, input) {
    let score = [0, 0];
    for (let i = 0; i < 3; i++) {
      if (answer[i] == parseInt(input[i])) {
        score[1] += 1;
      } else if (answer.includes(parseInt(input[i]))) {
        score[0] += 1;
      }
    }
    return score;
  }
  // 볼/스트라이크/정답 판정 문자열 출력
  showResult(answer, input) {
    const score = this.checkScore(answer, input);
    if (score[0] === 0 && score[1] === 0) {
      MissionUtils.Console.print("낫싱");
      return false;
    } else if (score[1] === 3) {
      MissionUtils.Console.print("3스트라이크\n");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    }
    MissionUtils.Console.print(`${score[0]}볼 ${score[1]}스트라이크`);
    return false;
  }
}

const app = new App();
app.play();
export default App;
