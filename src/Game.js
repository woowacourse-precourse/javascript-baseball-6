import { MissionUtils } from "@woowacourse/mission-utils";

export class Game {
  constructor() {
    this.welcome();
    this.getUserInput();
  }

  welcome() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  randomGenerator() {
    const set = new Set();
    while (set.size < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      set.add(number);
    }
    return [...set];
  }

  getUserInput() {
    async function getInputPromise() {
      try {
        const inputPromise = await MissionUtils.Console.readLineAsync(
          "서로 다른 세 자리 숫자를 입력해주세요: "
        );
        return inputPromise;
      } catch (error) {
        MissionUtils.Console.print("error");
      }
    }
    const inputString = getInputPromise();
  }
}
