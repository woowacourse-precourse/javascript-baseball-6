import { Random, Console } from "@woowacourse/mission-utils";

class Computer {
  createAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }
  getHint(answer, input) {
    // input을 number[] 형태로 변환
    const splitInput = input.split("").map((item) => parseInt(item));

    // S = 스트라이크, B = 볼, N = 낫싱
    const sbnSet = { S: 0, B: 0, N: 0 };

    // sbnSet 값 카운팅 로직
    for (let i = 0; i < answer.length; i++){
      // 숫자가 포함되어있을때(스트라이크, 볼)
      if (answer.includes(splitInput[i])) {
        answer[i] === splitInput[i] ? sbnSet.S++ : sbnSet.B++
      } else {
        // 숫자가 포함되지 않았을때
        sbnSet.N++;
      }
    }
    
    let hintStr = "";
    if (sbnSet.N === 3) {
      hintStr = "낫싱";
    } else {
      if (sbnSet.S === 0) {
        hintStr = `${sbnSet.B}볼`;
      } else if (sbnSet.B === 0) {
        hintStr = `${sbnSet.S}스트라이크`;
      } else {
        hintStr = `${sbnSet.B}볼 ${sbnSet.S}스트라이크`;
      }
    }

    // 힌트 문자열 출력
    Console.print(hintStr);
    if (sbnSet.S === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
    
    return hintStr;
  }
}

class User {
  async guess() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    if (input.length !== 3) {
      throw new Error("[ERROR] 숫자의 길이가 올바르지 않습니다.");
    }

    if (isNaN(input)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    const numbers = input.split("");
    const set = new Set(numbers);
    if (set.size !== 3) {
      throw new Error("[ERROR] 중복되는 숫자가 있습니다.");
    }

    return input;
  }

  selectOption() {
    const option = Console.readLineAsync(""); 
    return option
  }
}

class Game {
  async reStart() {
    const com = new Computer();
    const user = new User();

    const answer = com.createAnswer();
    console.log(answer);

    let hint = "";
    while (hint !== "3스트라이크") {
      const input = await user.guess();
      hint = com.getHint(answer, input);
    }
  }
}

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    const game = new Game();
    game.reStart();
  }
}

export default App;

const app = new App();
app.play();