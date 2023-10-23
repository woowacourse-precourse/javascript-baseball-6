import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  randomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = String(MissionUtils.Random.pickNumberInRange(1, 9));
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let computer = this.randomNumbers();
    while (true) {
      try {
        const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
        this.checkNumbers(input);
        const result = this.getResult(computer, input);
        Console.print(result);
        if (result === "3스트라이크") {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          const restart = await Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
          );
          if (restart === "2") break;
          else computer = this.randomNumbers();
        }
      } catch (error) {
        throw new Error("[ERROR]");
      }
    }
  }

  checkNumbers(numbers) {
    if (numbers.length !== 3) {
      throw new Error();
    }
    if (new Set(numbers).size !== 3) {
      throw new Error();
    }
  }
  

  getResult(computer, input) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < 3; i++) {
        if (computer[i] === input[i]) strike +=1;
          else {
            if (computer.includes(input[i])) ball +=1;
          } 
        }
    if (ball === 0 && strike === 0) {
      return "낫싱"
    }
    else if (strike === 3) {
      return `${strike}스트라이크`
    }
    else if (ball > 0 && strike > 0) {
      return `${ball}볼 ${strike}스트라이크`
    }
    else if (ball > 0 && strike === 0) {
      return `${ball}볼`
    }
    else if (ball === 0 && strike > 0) {
      return `${strike}스트라이크`
    } 
  }
}

export default App;