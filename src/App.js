import { Console, Random } from "@woowacourse/mission-utils";

// 자주 사용되는 숫자를 상수로 선언
const REG_INPUT_NUMBER = /^(?!.*([1-9]).*\1)[1-9]{3}$/; //사용자가 입력하는 숫자가 1부터 9까지 중복 없이 3자리 숫자인지를 검증하기 위해 정규식 선언

class App {
  //숫자 야구 게임 프로그램 실행하는 메서드
  async play() {
    // 기능 1) 프로그램 시작시 "숫자 야구 게임을 시작합니다." 출력하기
    Console.print("숫자 야구 게임을 시작합니다.");
    const computerNum = this.CreateComputerNum();
    const userNum = await this.GetUserNum();
    const { ball, strike } = this.CompareNum(computerNum, userNum);
    this.PrintResult(ball, strike);
  }

  // 기능 2) 컴퓨터가 선택한 임의의 3자리 수 생성하기
  CreateComputerNum() {
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
  async GetUserNum() {
    let user;
    do {
      //숫자 입력받기
      user = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (!REG_INPUT_NUMBER.test(user)) {
        // 사용자의 입력이 유효하지 않으면 에러 메시지 출력
        Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    } while (!REG_INPUT_NUMBER.test(user)); // 조건이 만족하지 않는 경우 반복

    // 사용자의 입력이 유효하면 숫자 배열로 변환하여 반환
    return Array.from(user).map(Number);
  }

  // 기능 4) 컴퓨터의 임의의 수와 사용자가 입력한 수 비교
  CompareNum(computerNum, userNum) {
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
  PrintResult(ball, strike) {
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else {
      let result = "";
      if (ball !== 0) result += `${ball}볼 `;
      if (strike !== 0) result += `${strike}스트라이크`;
      Console.print(result);
    }
  }
}

export default App;
