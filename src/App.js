import { Console, Random } from "@woowacourse/mission-utils";

// 자주 사용되는 숫자를 상수로 선언
const REG_INPUT_NUMBER = /^(?!.*([1-9]).*\1)[1-9]{3}$/; //사용자가 입력하는 숫자가 1부터 9까지 중복 없이 3자리 숫자인지를 검증하기 위해 정규식 선언

class App {
  //숫자 야구 게임 프로그램 실행하는 메서드
  async play() {
    // 기능 1) 프로그램 시작시 "숫자 야구 게임을 시작합니다." 출력하기
    Console.print("숫자 야구 게임을 시작합니다.");
    const computerNum = this.CreateComputerNum();
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
}

export default App;
