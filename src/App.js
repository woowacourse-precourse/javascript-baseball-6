import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    // GAME_STATE 변수를 클래스 레벨에서 정의
    this.GAME_STATE = true;
  }

  async play() {
    while (this.GAME_STATE) {
      await this.startGame();
    }
  }

  /** 게임 시작 */
  async startGame() {
    //Console.print api 사용
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    //랜덤 컴퓨터넘 생성
    const computerNum = await this.getComputerNum();
    let inputArr;
    let result;

    while (true) {
      // test answer 값 가져오기 input에 array로
      inputArr = await this.getInputNumber();
      result = await this.compareNumbers(inputArr, computerNum);
    }
  }

  /** input 값 받아오는 함수 */
  async getInputNumber() {
    try {
      //인풋값 상수 선언
      const INPUT = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
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

  /** 스트라이크 & 볼 검증 로직 */
  async compareNumbers(inputArr, computerNum) {
    let strike = 0;
    let ball = 0;
    let nothing = 0;

    //스트라이크 & 볼 검증 로직
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === computerNum[i]) {
        strike++;
      } else if (computerNum.includes(inputArr[i])) {
        ball++;
      } else {
        strike++;
      }
    }
    //3 스트라이크, 게임 종료
    if (strike === 3) {
      this.GAME_STATE = false;
    }
    return { strike, ball, strike };
  }

  async printingResult(strike, ball, nothing) {
    let result;
    if (strike === 0) {
      result = ball + "볼";
    } else if (ball === 0) {
      result = strike + "스트라이크";
    } else if (nothing === 3) {
      result = "낫싱";
    } else {
      result = ball + "볼" + strike + "스트라이크";
    }
    return result;
  }
}

export default App;
