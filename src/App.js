import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computerNum = this.setNum();
    const userNum = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    this.vaildation(userNum)
    this.result(computerNum, userNum)
    
  }

  // 랜덤값과 입력값을 비교
  result(computerNum, userNum) {
    const checkNum = Array.from(userNum, Number)
    let strike = 0
    let ball = 0

    for (let i = 0; i < 3; i++) {
      if (computerNum.includes(Number(checkNum[i]))) {
        if (computerNum[i] === checkNum[i]) {
          strike += 1;
        }
        else{
          ball += 1;
        }
      }
    }
    this.printresult(ball, strike)
  }

  //비교값 출력
  printresult(ball, strike) {
    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print("낫싱")
    }
    
    else if(ball > 0) {
      if (strike > 0) {
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`)
      }
      else {
        MissionUtils.Console.print(`${ball}볼`)
      }
    }

    else if (strike > 0) {
      MissionUtils.Console.print(`${strike}스트라이크`)
    }

  }


  //예외처리
  vaildation(userNum) {

    if(userNum.length === 0) {
      throw new Error("[ERROR] 숫자가 입력되지 않았습니다.")
    }

    if (userNum.length !== 3) {
      throw new Error("[ERROR] 3자리의 수를 입력해주세요.")
    }
    
    if(userNum.length !== new Set(Array.from(String(userNum))).size) {
      throw new Error("[ERROR] 중복된 숫자가 입력되었습니다.")
    }

    return true

  }


  //랜덤으로 3자리의 수 선택
  setNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

const app = new App();
app.play();

export default App;
