import { Console, Random } from "@woowacourse/mission-utils";

// 자주 사용되는 정규식을 상수로 선언
const REG_USER_NUM = /^(?!.*([1-9]).*\1)[1-9]{3}$/; //사용자가 입력하는 숫자가 1부터 9까지 중복 없이 3자리 숫자인지를 검증하기 위해 정규식 선언

class App {
  //숫자 야구 게임 프로그램 실행하는 메서드
  async play() {
    // 기능 1) 프로그램 시작시 "숫자 야구 게임을 시작합니다." 출력하기
    Console.print("숫자 야구 게임을 시작합니다.");
    do {
      const computerNum = this.createComputerNum();
      let isCorrect = false;

      while (!isCorrect) {
        try {
          const userNum = await this.getUserNum();
          const { ball, strike } = this.compareNum(computerNum, userNum);
          this.printResult(ball, strike);

          if (strike === 3) {
            Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            isCorrect = true;
          }
        } catch (e) {
          throw new Error("[ERROR] z");
        }
      }
    } while (await this.askRestart());
  }

  // 기능 2) 컴퓨터가 선택한 임의의 3자리 수 생성하기
  createComputerNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  // 기능 3) 사용자에게 3자리 수 입력받기
  async getUserNum() {
    let user;
    //숫자 입력받기
    user = await Console.readLineAsync("숫자를 입력해주세요 : ");
    if (!REG_USER_NUM.test(user)) {
      // 사용자의 입력이 유효하지 않으면 에러
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    // 사용자의 입력이 유효하면 숫자 배열로 변환하여 반환
    return Array.from(user).map(Number);
  }

  // 기능 4) 컴퓨터의 임의의 수와 사용자가 입력한 수 비교
  compareNum(computerNum, userNum) {
    let ball = 0,
      strike = 0; // 볼과 스트라이크 0으로 초기화

    //컴퓨터 숫자 반복문으로 하나씩 비교하기
    for (let i = 0; i < 3; i++) {
      //사용자 숫자 반복문으로 하나씩 비교하기
      for (let j = 0; j < 3; j++) {
        if (computerNum[i] === userNum[j]) {
          if (i === j) {
            strike++;
          } else {
            ball++;
          }
        }
      }
    }

    return { ball, strike };
  }

  //기능 5) 비교 결과 출력
  printResult(ball, strike) {
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else {
      let result = "";
      if (ball !== 0) result += `${ball}볼 `;
      if (strike !== 0) result += `${strike}스트라이크`;
      Console.print(result);
    }
  }

  // 기능 6) 재시작 여부 묻기
  async askRestart() {
    let restart;
    restart = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (restart !== "1" && restart !== "2") {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    } else if (restart === "2") return false; // 2를 입력하면 게임 종료
    else return true; //1을 입력하면 게임 재시작
  }
}

export default App;
