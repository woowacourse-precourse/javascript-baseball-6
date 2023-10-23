import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  // 서로 다른 3개의 숫자 랜덤 생성
  makeRandomNumber() {
    const randomUnipueNumbers = [];
    const uniqueSet = new Set();

    for (let i = 0; i < 3; i++) {
      while (true) {
        const num = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!uniqueSet.has(num)) {
          uniqueSet.add(num);
          randomUnipueNumbers.push(num);
          break;
        }
      }
    }

    console.log(randomUnipueNumbers); //지울 거
  }

  // 사용자로부터 입력받기
  async receiveNumber() {
    const receive = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    return receive;
  }

  // 입력받은 수가 주어진 범위에 맞는지 확인하는 함수
  inRange(input, rangeStart, rangeEnd) {
    const number = Number(input);
    for (let i = rangeStart; i <= rangeEnd; i++) {
      if (number === i) {
        console.log("올바른 값입니다"); //지울 거
        return true;
      }
    }
    console.log("올바른 값이 아닙니다."); //지울 거
    return false;
  }

  // 입력받은 숫자 검증 후 종료
  exit(input) {
    if (input.length !== 3) {
      throw "[ERROR] 숫자가 잘못된 형식입니다.";
    }

    const arrayNum = input.split("");
    const duplicate = new Set();

    for (let i = 0; i < arrayNum.length; i++) {
      if (!this.inRange(arrayNum[i], 1, 9)) {
        throw "[ERROR] 숫자가 잘못된 형식입니다.";
      }

      duplicate.add(arrayNum[i]);
    }

    if (duplicate.size !== 3) {
      throw "[ERROR] 숫자가 잘못된 형식입니다.";
    }
  }
}

export default App;
