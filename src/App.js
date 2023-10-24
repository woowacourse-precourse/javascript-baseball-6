import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  // 컴퓨터 숫자 생성 함수
  async createComputerNum() {
    const TMP_ARRAY = [];
    for (let i = 0; TMP_ARRAY.length < 3; i++) {
      let tmp = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!TMP_ARRAY.includes(tmp)) TMP_ARRAY.push(tmp);
    }
    this.computerNum = TMP_ARRAY;

    return;
  }

  // 플레이어 숫자 입력 함수
  async createPlayerNum() {
    const PLAYER_NUM = await MissionUtils.Console.readLineAsync(
        "숫자 3개를 입력해주세요 : "
    );
    // 예외처리
    if (
        isNaN(PLAYER_NUM)
    ) {
      throw new Error("[ERROR]: 숫자가 아닌 문자는 입력할 수 없습니다.");
    }
    if (
        PLAYER_NUM.length !== 3 ||
        PLAYER_NUM.includes(0)
    ) {
      throw new Error("[ERROR]: 3개의 숫자가 아니거나 0을 포함한 숫자는 입력할 수 없습니다.");
    }//
    else {
      return Array.from(PLAYER_NUM).map(Number);
    }
  }

  // 플레이어와 컴퓨터 숫자 비교
  async compare() {
    const PLAYER_NUM = await this.createPlayerNum();
    const COMPUTER_NUM = [...this.computerNum];
    let strike = 0;
    let ball = 0;

    // 스트라이크 계산기
    for (let i = 0; i < PLAYER_NUM.length; i++) {
      if (PLAYER_NUM[i] === COMPUTER_NUM[i]) {
        strike++;
        PLAYER_NUM.splice(i, 1);
        COMPUTER_NUM.splice(i, 1);
        i--;
      }
    }
    // 볼 계산기
    for (let i = 0; i < PLAYER_NUM.length; i++) {
      if (COMPUTER_NUM.includes(PLAYER_NUM[i])) ball++;
    }
    // 텍스트 출력
    await this.resultText(strike, ball);

    if (strike !== 3) return this.compare();
    else return this.isEndGame();
  }

  // 스트라이크 볼 텍스 출력 함수
  async resultText(strike, ball) {
    if (strike === 0 && ball === 0) MissionUtils.Console.print("낫싱");
    else if (strike !== 0 && ball === 0)
      MissionUtils.Console.print(`${strike}스트라이크`);
    else if (strike === 0 && ball !== 0)
      MissionUtils.Console.print(`${ball}볼`);
    else if (strike !== 0 && ball !== 0)
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);

    return;
  }

  // 3스트라이크 이후 게임 종료 여부 함수
  async isEndGame() {
    const END_GAME_INPUT = await MissionUtils.Console.readLineAsync(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    // 예외처리
    if (END_GAME_INPUT === "1") {
      this.createComputerNum();
      return this.compare();
    } //
    else if (END_GAME_INPUT === "2") {
      MissionUtils.Console.print("게임 종료");
      return;
    } //
    else {
      throw new Error("[ERROR]");
    }
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.createComputerNum();
    return this.compare();
  }
}

export default App;