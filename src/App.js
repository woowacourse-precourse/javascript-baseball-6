import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 게임 시작
    // - 시작 문구 출력
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const INPUT_COMPUTER_NUMBER = this.computerRandomNumber();
    let booleanValue = true;
    while (booleanValue) {
      const USER_NUMBER = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요."
      );

      if (this.validInput(USER_NUMBER)) {
        const USER_NUMBER_ARRAY = this.validInput(USER_NUMBER);
        const RESULT_WORDS = this.resultWords(
          INPUT_COMPUTER_NUMBER,
          USER_NUMBER_ARRAY
        );
        // 정답여부 출력
        // - 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시
        // - 만약 3스트라이크로 정답인 경우 축하멘트와 재시작/종료 묻기
        MissionUtils.Console.print(RESULT_WORDS);
        if (RESULT_WORDS === "3스트라이크") {
          MissionUtils.Console.print(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
          );
          booleanValue = false;
        }
      }
    }
    // 재시작/종료
    // - 재시작/종료를 구분하는 1과 2 중 하나의 수를 선택하고 1을 선택하면 새로 시작 2를 선택하면 종료 그 외를 선택하면 다시 1과 2를 선택하라는 문자 출력
    // - 1을 선택하는 경우 게임 재시작을 하고 2를 선택하는 경우 게임 종료
    const INPUT_RESTART_NUMBER = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (INPUT_RESTART_NUMBER == 1) {
      this.play();
    } else if (!(INPUT_RESTART_NUMBER == 2)) {
      throw new Error("[ERROR]: 정해진 숫자를 입력하세요.");
    } else return;
  }

  // 함수들
  // 사용자 입력값 받은 후 사용자 입력값 오류 점검
  // - 숫자인지 확인
  // - 3자리 수인지 확인
  // - 서로 다른 수인지 확인
  // - 0은 없는지 확인

  validInput(input) {
    const STR = String(input);
    const MAPFN = (arg) => Number(arg);
    const USER_NUMBER_ARRAY = Array.from(STR, MAPFN);

    if (isNaN(input)) {
      throw new Error("[ERROR]: 숫자를 입력하시오.");
    }

    if (!(input.length == 3)) {
      throw new Error("[ERROR]: 3자리 숫자를 입력하시오.");
    }

    for (let i = 0; i < USER_NUMBER_ARRAY.length; i++) {
      for (let j = i + 1; j < USER_NUMBER_ARRAY.length; j++)
        if (USER_NUMBER_ARRAY[i] == USER_NUMBER_ARRAY[j]) {
          throw new Error("[ERROR]: 3자리의 서로 다른 숫자를 입력하시오.");
        }
    }

    for (let i = 0; i < USER_NUMBER_ARRAY.length; i++) {
      if (USER_NUMBER_ARRAY[i] == 0) {
        throw new Error("[ERROR]: 0이 아닌 1~9 사이의 숫자를 입력하시오.");
      }
    }
    return USER_NUMBER_ARRAY;
  }

  // 컴퓨터 랜덤 번호 생성
  // - 각 자리마다 1~9 한 자리 수로 생성
  // - 서로 다른 3자리 수인지 확인
  computerRandomNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }

    return COMPUTER;
  }

  // 랜덤 번호와 입력값 비교
  // - 숫자 포함되어있고 위치도 동일한 경우 스트라이크로 판단
  // - 숫자 포함되어있지만 위치가 다른 경우 볼로 판단

  checkingCount(computerNumber, userNumber) {
    let count = [0, 0];
    for (let i = 0; i < 3; i++) {
      if (computerNumber[i] === userNumber[i]) {
        count[0] += 1;
      } else if (computerNumber.includes(userNumber[i])) {
        count[1] += 1;
      }
    }
    return count;
  }

  //결과 문자로 바꾸기
  // - 만약 0 스트라이크 0 볼인 경우 낫싱 출력
  // - 만약 스트라이크 혹은 볼만 있는 경우 하나만 출력
  // - 일반적인 경우 출력(1~2 스트라이크와 볼을 가진경우)

  resultWords(computerNumber, userNumber) {
    const COUNT_WORDS = this.checkingCount(computerNumber, userNumber);
    if (COUNT_WORDS[0] === 0 && COUNT_WORDS[1] === 0) {
      return "낫싱";
    } else if (COUNT_WORDS[0] === 0 && COUNT_WORDS[1] > 0) {
      return `${COUNT_WORDS[1]}볼`;
    } else if (COUNT_WORDS[0] > 0 && COUNT_WORDS[1] === 0) {
      return `${COUNT_WORDS[0]}스트라이크`;
    } else {
      return `${COUNT_WORDS[1]}볼 ${COUNT_WORDS[0]}스트라이크 `;
    }
  }
}

export default App;

const app = new App();
app.play();
