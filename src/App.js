import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      await this.game();

      const answer = await this.menuRestartOrExit();
      this.menuCheckAndExitOnError(answer);

      if (answer === "2") {
        break;
      }
    }
  }

  // 게임 진행 함수
  async game() {
    const secret = this.makeRandomNumber();

    while (true) {
      const receive = await this.receiveNumber();

      this.checkAndExitOnError(receive);

      const result = this.printComparisonResult(secret, receive);

      MissionUtils.Console.print(result);

      if (result === "3스트라이크") {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      }
    }
  }

  // 서로 다른 3개의 숫자를 랜덤 생성하는 함수
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

    const secret = randomUnipueNumbers.join("");
    return secret;
  }

  // 사용자로부터 값을 입력받는 함수
  receiveNumber() {
    const receive =
      MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    return receive;
  }

  // 입력받은 수가 주어진 범위에 맞는지 확인하는 함수
  inRange(input, rangeStart, rangeEnd) {
    const number = Number(input);
    for (let i = rangeStart; i <= rangeEnd; i++) {
      if (number === i) {
        return true;
      }
    }
    return false;
  }

  // 입력받은 수를 비교해서 결과 도출하는 함수
  compareNumbers(secret, receive) {
    const secretNum = secret.split("");
    const receiveNum = receive.split("");
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < secret.length; i++) {
      if (secretNum[i] === receiveNum[i]) {
        strikes++;
      } else if (secretNum.includes(receiveNum[i])) {
        balls++;
      }
    }

    return [strikes, balls];
  }

  // 비교결과를 반환하는 함수
  printComparisonResult(secret, receive) {
    const count = this.compareNumbers(secret, receive);

    if (count[0] + count[1] === 0) {
      return "낫싱";
    }

    if (count[0] === 0) {
      return count[1] + "볼";
    }

    if (count[1] === 0) {
      return count[0] + "스트라이크";
    }

    return count[1] + "볼 " + count[0] + "스트라이크";
  }

  // 게임 재시작 or 종료 값을 입력받는 함수
  menuRestartOrExit() {
    const answer = MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    return answer;
  }

  // 예외 처리하는 함수
  throwException() {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  // 입력받은 숫자 검증 후 종료하는 함수
  checkAndExitOnError(receive) {
    if (receive.length !== 3) {
      this.throwException();
    }

    const arrayNum = receive.split("");
    const duplicate = new Set();

    for (let i = 0; i < arrayNum.length; i++) {
      if (!this.inRange(arrayNum[i], 1, 9)) {
        this.throwException();
      }

      duplicate.add(arrayNum[i]);
    }

    if (duplicate.size !== 3) {
      this.throwException();
    }
  }

  // 입력받은 메뉴 검증 후 종료하는 함수
  menuCheckAndExitOnError(answer) {
    if (answer.length !== 1) {
      this.throwException();
    }

    if (!this.inRange(answer, 1, 2)) {
      this.throwException();
    }
  }
}

export default App;
