import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  // 바로 실행되는 play 메소드
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
      // 컴퓨터의 랜덤 넘버
      const computerNum = this.getRandomNum();

      this.game(computerNum);
    }
    catch (error) {
      throw error;
    }
  }

  /** input 값 검증하기 */
  inputValidation(input) {
    if (input.length !== 3) {
      throw new Error("입력값은 3자리 숫자여야 합니다.")
    } else {
      // int로 변환하고 반복문으로 모든 자리수 확인
      const inputArray = Array.from(input).map((data) => parseInt(data));
      for (let i = 0; i < 3; i++) {
        // 0 혹은 이상한 값이면 error
        if (isNaN(inputArray[i]) || inputArray[i] < 1) {
          throw new Error("입력값은 1부터 9 사이의 숫자로 이루어져야 합니다.");
        }
        // 같은 수가 존재해도 error
        if (inputArray.indexOf(inputArray[i]) !== i) {
          throw new Error("입력값은 서로 다른 숫자로 이루어져야 합니다.");
        }
      }
    }
  }

  /** random api 이용하여 랜덤 값 저장 */
  getRandomNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  /** 게임 진행 함수 */
  game(computerNum) {
    // 문자열로 반환되는 input
    const input = MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ")
    // 입력값 검증
    this.inputValidation(input)
    const result = this.gameValidation(input, computerNum)
    this.printResult(result);
    
    
  }

  /** 입력값 대조 함수 */
  gameValidation(input, computerNum) {
    // int로 변환하고 반복문으로 모든 자리수 확인
    const inputArray = Array.from(input).map((data) => parseInt(data));
    const result = {
      strike: 0,
      ball: 0,
      nothing: false,
    }
    for (let i = 0; i < 3; i++) {
      if (inputArray[i] === computerNum[i]) { 
        result.strike++; 
      } else if (computerNum.includes(inputArray[i])) {
        result.ball++;
      }
    }
    if (result.strike === 0 && result.ball === 0) {
      result.nothing = true;
    }
    return result;
  }

  /** 출력 함수 */
  printResult(result) {
    let message = "";
    if (result.strike > 0) {
      message += `${result.strike}스트라이크 `;
    }
    if (result.ball > 0) {
      message += `${result.ball}볼 `;
    }
    if (result.nothing) {
      message += "낫싱";
    }
    MissionUtils.Console.print(message);
  }
}

const app = new App();
app.play();

export default App;
