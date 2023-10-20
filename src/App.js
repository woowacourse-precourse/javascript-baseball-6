import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  static START = "숫자 야구 게임을 시작합니다.";
  static NUMBER_LENGTH = 3;

  async play() {
    Console.print(App.START);
    let computer = this.setAnswer();
    while (true) {
      try {
        const user = await Console.readLineAsync("숫자를 입력해주세요 : ");
        this.checkNumber(user);
        const result = this.getResult(computer, user);
        Console.print(result);
        if (result === "3스트라이크") {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          const restart = await Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
          );
          if (restart === "2") break;
          else computer = this.setAnswer();
        }
      } catch (error) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }
  }

  setAnswer() {
    const computer = [];
    while (computer.length < App.NUMBER_LENGTH) {
      const number = String(MissionUtils.Random.pickNumberInRange(1, 9));
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  checkNumber(number) {
    if (
      number.length !== App.NUMBER_LENGTH ||
      number[0] === number[1] ||
      number[0] === number[2] ||
      number[1] === number[2]
    )
      throw new Error();
  }

  getResult(computer, user) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < App.NUMBER_LENGTH; i++) {
      if (computer[i] === user[i]) strike += 1;
      else {
        if (computer.includes(user[i])) ball += 1;
      }
    }
    if (strike === 0 && ball === 0) return "낫싱";
    else if (strike === App.NUMBER_LENGTH) return `${strike}스트라이크`;
    else if (ball === App.NUMBER_LENGTH) return `${ball}볼`;
    else return `${ball}볼 ${strike}스트라이크`;
  }
}

export default App;
