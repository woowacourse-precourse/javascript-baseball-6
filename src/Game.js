import { MissionUtils } from "@woowacourse/mission-utils";

class Game {
  generateNumber() {
    const generator = [];

    while (generator.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!generator.includes(number)) {
        generator.push(number);
      }
    }
    return generator;
  }

  async process(generator) {
    let answer = "";
    let strike = 0;
    let ball = 0;

    let number = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );

    if (number.length !== 3) {
      throw new Error("[ERROR]");
    }

    for (let i = 0; i < generator.length; i++) {
      if (generator[i] === Number(number[i])) {
        strike++;
      } else if (generator.includes(Number(number[i]))) {
        ball++;
      }
    }

    if (ball && strike) {
      answer = `${ball}볼 ${strike}스트라이크`;
    } else if (ball) {
      answer = `${ball}볼`;
    } else if (strike) {
      answer = `${strike}스트라이크`;
    } else {
      answer = "낫싱";
    }
    return answer;
  }
}

export default Game;
