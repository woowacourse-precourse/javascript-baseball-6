import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let isGameOver = false;

    while (!isGameOver) {
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }

      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      while (true) {
        let input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        let inputString = input.toString();
        let answer = inputString.split("").map(Number);

        
        if (hasDuplicates(answer) || answer.length !== 3) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }

        const { strike, ball } = checkGuess(computer, answer);

        if (strike === 0 && ball === 0) {
          MissionUtils.Console.print("낫싱");
        } else if (strike === 0) {
          MissionUtils.Console.print(ball + "볼");
        } else if (ball === 0) {
          MissionUtils.Console.print(strike + "스트라이크");
        } else {
          MissionUtils.Console.print(ball + "볼 " + strike + "스트라이크" );
        }

        if (strike === 3) {
          MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
          const choice = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ");
          if (choice === '1') {
            break; // 게임을 처음부터 다시 시작
          } else if (choice === '2') {
            isGameOver = true;
            break; // 게임 종료
          }
        }
      }
    }
  }
}

// 중복된 숫자 및 3자리 이상수 수 입력 확인 함수
function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

// 무작위 수와 사용자가 입력한 수 확인
function checkGuess(computer, answer) {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (answer[i] === computer[i]) {
      strike++;
    } else if (computer.includes(answer[i])) {
      ball++;
    }
  }

  return { strike, ball };
}

export default App;

const app = new App();
app.play();