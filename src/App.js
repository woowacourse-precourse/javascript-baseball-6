import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  continue = false
  async play() {
    this.continue = true
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computerNum = this.setNum();
    MissionUtils.Console.print(computerNum);
    while(this.continue) {
      const userNum = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
      this.vaildation(userNum)
      let [ball, strike] = this.result(computerNum, userNum)
      this.printresult(ball, strike)
      if (strike === 3) {
        const userReturn = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        this.restart(userReturn)
      }
    }
  }

  restart(userReturn) {
    if (userReturn !== "1" && userReturn !== "2") {
      throw new Error("1과 2중에 하나만 입력해주세요.")
    }
    if (userReturn === "2") {
      this.continue = false;
    }

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
    return [ball, strike]
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
      if (strike === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
      }
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


export default App;
