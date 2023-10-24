import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play(IsfirstPlay = true) {
    const ANSWER = this.generateAnswer();
    /**게임 시작 문구 출력 */
    IsfirstPlay && MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let input = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    let result = this.process(ANSWER, input);

    MissionUtils.Console.print(result);

    while (!result.includes("3스트라이크")) {
      input = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      result = this.process(ANSWER, input);
      MissionUtils.Console.print(result);
    }

    const REPLAY_OR_NOT = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    REPLAY_OR_NOT === "1" && this.play(false);
  }

  process(answer, input) {
    /**사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨후 애플리케이션 종료*/
    if (input.length !== 3 || input.match(/\D/g) || input.match(/[가-힣]/g)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    if (
      input[0] === input[1] ||
      input[1] === input[2] ||
      input[0] === input[2]
    ) {
      throw new Error("[ERROR] 입력은 서로 다른 숫자로 구성해주세요.");
    }
    /**정답 확인 프로세스*/
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < input.length; i += 1) {
      for (let spell of answer) {
        spell === input[i] && (answer.indexOf(spell) === i ? strike++ : ball++);
      }
    }
    if (strike === 3)
      return `${strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
    if (strike === 0 && ball > 0) return `${ball}볼`;
    if (strike > 0 && ball === 0) return `${strike}스트라이크`;
    if (strike === 0 && ball === 0) return "낫싱";

    return `${ball}볼 ${strike}스트라이크`;
  }
  /**각각 다른 세자리 랜덤 정답 생성 */
  generateAnswer() {
    let answer = [];
    while (answer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(num)) answer.push(num);
    }
    return answer.toString().replaceAll(",", "");
  }
}

export default App;
