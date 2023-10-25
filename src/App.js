import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
      const computerNum = this.getRandomNum();
      await this.game(computerNum);
      
      const isRestart = await this.restart();
      if (isRestart) this.play();
    }
    catch (error) {
        throw new Error("[ERROR]")
    }
  }

  /** input 값 검증하기 */
  inputValidation(input) {
    if (input.length !== 3) {
      throw new Error("[ERROR]")
    } else {
      // int로 변환하고 반복문으로 모든 자리수 확인
      const inputArray = Array.from(input).map((data) => parseInt(data));
      for (let i = 0; i < 3; i++) {
        // 0 혹은 이상한 값이면 error
        if (isNaN(inputArray[i]) || inputArray[i] < 1) {
          throw new Error("[ERROR]");
        }
        // 같은 수가 존재해도 error
        if (inputArray.indexOf(inputArray[i]) !== i) {
          throw new Error("[ERROR]");
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
  async game(computerNum) {
    try {
      // 문자열로 반환되는 input
      const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ")
      // 입력값 검증
      this.inputValidation(input);

      const result = this.gameValidation(input, computerNum)
      const realResult = this.printResult(result);
      
      if (realResult === 1) {
        // 3 스트라이크면 게임 종료
        MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")
        return 1;
      } else {
        await this.game(computerNum);
        return 0;
      }
    } catch (error) {
      throw error;
    }
  }

  /** 게임 재시작 함수 */
  async restart() {
    const restartNum = await MissionUtils.Console.readLineAsync("");

    if (restartNum === "1") {
      return true;
    } else {
      return false;
    }
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
    } else {
      result.nothing = false;
    }
    return result;
  }

  /** 출력 함수 */
  printResult(result) {
    let strikeMessage = "";
    let ballMessage = ""; 
    if (result.strike > 0) {
      strikeMessage = `${result.strike}스트라이크`;
    }
    if (result.ball > 0) {
      ballMessage = `${result.ball}볼`;
    }
    if (result.nothing) {
      const nothingMessage = "낫싱";
      MissionUtils.Console.print(nothingMessage);
      return 0;
    }

    if (result.strike === 3) {
      MissionUtils.Console.print(`${ballMessage} ${strikeMessage}`.trim());
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return 1;
    } else {
      MissionUtils.Console.print(`${ballMessage} ${strikeMessage}`.trim());
      return 0;
    }
    


  }
}

const app = new App();
app.play();

export default App;
