import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.Numbers = [];
  }

  // 랜덤 세 자리 숫자 생성기
  randomNumbers() {
    this.Numbers = [];
    while (this.Numbers.length < 3) {
      const NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.Numbers.includes(NUM)) {
        this.Numbers.push(NUM)
      }
    }
  }
  // 숫자 판별기, 랜덤숫자 세자리와 유저 숫자 세자리를 비교
  matchNumberPositions(USER_INPUT) {
    let BALLS = 0
    let STRIKES = 0
    for (let i = 0; i < 3; i++) {
      if (this.Numbers[i] == USER_INPUT[i]) {
        STRIKES += 1
      }
      else if (this.Numbers.includes(USER_INPUT[i])) {
        BALLS += 1
      }
    }
    return {BALLS, STRIKES}
  }

  // 유저 인풋 검사기
  checkNumericPattern(USER_INPUT) {
    const DIGITS = USER_INPUT.split("").map(Number)
    if (DIGITS.length != 3 || DIGITS.some(isNaN)){
      throw new Error("[ERROR]")
    }
    if (DIGITS.some((DIGIT) => DIGIT < 1 || 9 < DIGIT)){
      throw new Error("[ERROR]")
    }
    if (new Set(DIGITS).size != 3){
      throw new Error("[ERROR]")
    }
    return DIGITS
  }
  // 숫자 야구 결과 출력기
  checkBaseballResult(BALLS, STRIKES) {
    if (STRIKES == 3){
      MissionUtils.Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료")
      return true
    }
    else if (BALLS && STRIKES) {
      MissionUtils.Console.print(`${BALLS}볼 ${STRIKES}스트라이크`)
    }
    else if (BALLS) {
      MissionUtils.Console.print(`${BALLS}볼`)
    }
    else if (STRIKES) {
      MissionUtils.Console.print(`${STRIKES}스트라이크`)
    }
    else {
      MissionUtils.Console.print(`낫싱`)
    }
    return false
  }

  async play() {
    this.randomNumbers()
    MissionUtils.Console.print(`숫자 야구 게임을 시작합니다.`)

    while (true) {
      const USER_INPUT = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ")
      const DIGIT = this.checkNumericPattern(USER_INPUT);
      const { BALLS, STRIKES } = this.matchNumberPositions(DIGIT)
      const RESULT = this.checkBaseballResult(BALLS, STRIKES)

      if (RESULT) {
        const NEW_GAME_OR_STOP = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")
        if (NEW_GAME_OR_STOP == "1") {
          this.randomNumbers()
          continue
        }
        else if (NEW_GAME_OR_STOP == "2") {
          return
        }
        else {
          throw new Error("[ERROR]")
        }
      }
    }
  }
}

export default App;
