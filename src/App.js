import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    // GAME_STATE 변수를 클래스 레벨에서 정의
    this.GAME_STATE = true;
  }

  async play() {
    //Console.print api 사용
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (this.GAME_STATE) {
      await this.startGame();
    }
  }

  /** 게임 시작 */
  async startGame() {
    //랜덤 컴퓨터넘 생성
    const computerNum = await this.getComputerNum();
    let inputArr;
    let result;

    while (true) {
      // test answer 값 가져오기 input에 array로
      inputArr = await this.getInputNumber();
      const { STRIKE, NOTHING, BALL } = await this.compareNumbers(
        inputArr,
        computerNum
      );

      await MissionUtils.Console.print("사용자 입력값: " + inputArr.join(""));
      result = await this.printResult(STRIKE, NOTHING, BALL);

      await MissionUtils.Console.print(result); // 결과값 출력
      if (STRIKE === 3 || inputArr.length !== 3) {
        break; // 루프 종료 조건
      }
    }

    await MissionUtils.Console.print(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
    await this.getRestart();
  }

  /** input 값 받아오는 함수 */
  async getInputNumber() {
    try {
      //인풋값 상수 선언
      const INPUT = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      if (INPUT.length !== 3) {
        throw new Error("[ERROR]");
      }
      //배열 순회
      const inputArr = [...INPUT].map((x) => Number(x));
      return inputArr;
    } catch (error) {
      throw error;
    }
  }

  /** 컴퓨터 변수 생성
   * Random 값 추출은 Random.pickNumberInRange()를 활용한다.
   */
  async getComputerNum() {
    const computerNum = [];
    while (computerNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNum.includes(number)) {
        computerNum.push(number);
      }
    }
    return computerNum;
  }

  /**  재시작 상수 설정 1:새로시작 2:종료 */
  async getRestart() {
    let USER_INPUT;
    do {
      USER_INPUT = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: "
      );

      await MissionUtils.Console.print(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );

      await MissionUtils.Console.print(USER_INPUT);

      if (USER_INPUT !== "1" && USER_INPUT !== "2") {
        await MissionUtils.Console.print(
          "잘못된 입력입니다. 1 또는 2를 입력하세요."
        );
      }
    } while (USER_INPUT !== "1" && USER_INPUT !== "2");

    if (USER_INPUT === "2") {
      MissionUtils.Console.print("게임을 종료합니다.");
      //상수변경으로 while문 중단
      this.GAME_STATE = false;
    } else if (USER_INPUT === "1") {
      // 게임 재시작 처리
    }

    return USER_INPUT;
  }

  /** 스트라이크 & 볼 검증 로직 */
  async compareNumbers(inputArr, computerNum) {
    let STRIKE = 0;
    let BALL = 0;

    for (let i = 0; i < 3; i++) {
      if (inputArr[i] === computerNum[i]) {
        STRIKE += 1;
      } else if (computerNum.includes(inputArr[i])) {
        BALL += 1;
      }
    }

    const NOTHING = 3 - (STRIKE + BALL);

    return { STRIKE, NOTHING, BALL };
  }

  async printResult(STRIKE, NOTHING, BALL) {
    let result;
    if (NOTHING === 3) {
      result = "낫싱";
    } else if (STRIKE === 0) {
      result = BALL + "볼";
    } else if (BALL === 0) {
      result = STRIKE + "스트라이크";
    } else {
      result = BALL + "볼 " + STRIKE + "스트라이크";
    }
    return result;
  }
}

export default App;
