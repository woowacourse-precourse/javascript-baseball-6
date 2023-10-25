import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    let canStartGame = true;

    Console.print("숫자 야구 게임을 시작합니다.");

    while (canStartGame) {
      const ANSWER = this.get3RandomNumber();
      let compareInfo;

      do {
        const USER_INPUTS = await this.get3UserNumbers();

        compareInfo = this.compareNumbers(USER_INPUTS, ANSWER);
        this.printCompareResult(compareInfo);
      } while (compareInfo.strike < 3);

      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      canStartGame =  await this.getRestartOption();
    }
  }

  /**
   * 랜덤한 서로 다른 숫자 3개를 받아 배열로 변환하는 함수
   * @return {number[]} */
  get3RandomNumber() {
    let result = [];

    while (result.length < 3) {
      const RAND_NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!result.includes(RAND_NUM))
        result.push(RAND_NUM);
    }

    return result;
  }

  /**
   * 유저에게 3개의 정수를 받아 배열로 반환하는 함수
   * @throws {ERROR} 숫자 형식이 잘못 됬을 때
   * @return {number[]} */
  async get3UserNumbers() {
    const PARSER_ERROR = new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    const USER_STRING = await Console.readLineAsync('숫자를 입력해주세요 : ');
    let result = [];

    if (USER_STRING.length !== 3) // 3자리가 아닐 때
      throw PARSER_ERROR;

    for (let numString of USER_STRING) {
      const USER_NUM = parseInt(numString);

      if (isNaN(USER_NUM) || !USER_NUM || result.includes(USER_NUM)) // 숫자 아닐 때, 0 일때, 중복된 값일 때
        throw PARSER_ERROR;

      result.push(USER_NUM);
    }

    return result;
  }

  /**
   * 정답 배열과 사용자가 입력한 정수 배열에서 ball과 strike를 계산합니다
   * @param {number[]} userNumbers - 사용자가 입력한 숫자 배열
   * @param {number[]} answerNumbers - 정답 숫자 배열
   * @return {{ball: number, strike: number}} ball과 strike 개수 */
  compareNumbers(userNumbers, answerNumbers) {
    let result = {ball: 0, strike: 0};

    userNumbers.forEach((userNum, ui) => {
      result.ball += answerNumbers.some((answerNum, ai) => ui !== ai && userNum === answerNum);
      result.strike += userNum === answerNumbers[ui];
    })

    return result;
  }

  /**
   * 계산된 ball과 strike에 맞도록 출력하는 함수
   * @param {{ball: number, strike: number}} compareInfo - 계산된 ball, strike object */
  printCompareResult(compareInfo) {
    let answerArray = [];

    if (compareInfo.ball)
      answerArray.push(`${compareInfo.ball}볼`);
    if (compareInfo.strike)
      answerArray.push(`${compareInfo.strike}스트라이크`);

    if (answerArray.length)
      Console.print(answerArray.join(" "));
    else
      Console.print("낫싱");
  }

  /**
   * 게임이 종료되었을 때, 게임 재시작 여부를 묻고, 그 여부를 반환하는 함수
   * @throws {ERROR} 숫자 형식이 잘못 됬을 때
   * @return {boolean} 다시 시작할지 여부*/
  async getRestartOption() {
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

    const PARSER_ERROR = new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    const USER_INPUT = await Console.readLineAsync("");
    const NUM = parseInt(USER_INPUT);

    if (NUM === 1)
      return true;
    else if (NUM === 2)
      return false;
    else
      throw PARSER_ERROR;
  }
}

export default App;
