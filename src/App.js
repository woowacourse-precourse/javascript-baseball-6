import { Random, Console } from "@woowacourse/mission-utils"

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.")
    do {
      await this.game();
      const answer = await this.check();
      if (answer === "2") break;
    } while (true)
  }

  async game() {
    const value = [];
    while (value.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!value.includes(num)) value.push(num);
    }
    while (true) {
      const sign = [0, 0];
      let line;
      line = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (isNaN(line) || line.length !== 3) throw new Error("[ERROR] 숫자 형식이 맞지 않습니다.")

      for (let i = 0; i < 3; i++) {
        const idx = line.indexOf(value[i]);
        if (idx == i) sign[0]++;
        else if (idx != -1) sign[1]++;
      }

      if (sign[0] == 3) {
        Console.print("3스트라이크");
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;
      }
      else {
        let answer = '';

        if (sign[1] > 0) answer += sign[1] + "볼";
        if (sign[0] > 0) answer += sign[0] + "스트라이크";
        if (answer.length == 0) answer = "낫싱"

        Console.print(answer);
      }
    }
  }

  async check() {
    const answer = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    if (answer === "1" || answer === "2") return answer;
    else throw new Error("[Error] 1과 2 중 하나를 입력해주세요.")
  }
}

export default App;
