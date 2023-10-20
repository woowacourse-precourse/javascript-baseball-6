import { MissionUtils } from "@woowacourse/mission-utils";
import readline from 'readline';

const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

class App {
  async play() {
    
    console.log(computer);
    console.log("숫자 야구 게임을 시작합니다.");

    return new Promise(() => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      const handleUserInput = (userInput) => {
        if (userInput.length !== 3) {
          throw new Error("[ERROR] 입력값은 3자리 숫자여야 합니다.");
        }
      
        if (Number.isNaN(Number(userInput))) {
          throw new Error("[ERROR] 입력값은 숫자여야 합니다.");
        }
        const NumberArr = userInput.split("").map(Number);

        let Strike = 0;
        let Ball = 0;

        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (NumberArr[i] === computer[j]) {
              if (i === j) {
                Strike++;
              } else {
                Ball++;
              }
            }
          }
        }

        if (Strike === 0 && Ball === 0) {
          console.log("낫싱");
        } else if (Strike !== 0 && Ball === 0) {
          console.log(Strike + "스트라이크");
        } else if (Strike === 0 && Ball !== 0) {
          console.log(Ball + "볼");
        } else {
          console.log(Strike + "스트라이크 " + Ball + "볼");
        }
        if (Strike !== 3) {
          rl.question("숫자를 입력해 주세요: ", handleUserInput);
        } else {
          console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          rl.question("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", handleRestartInput);
        }
      };
      const handleRestartInput = (userInput) => {
        if(userInput === 1){
          rl.question("숫자를 입력해 주세요: ", handleUserInput);
        }
        else {
          rl.close();
        }
      }
      rl.question("숫자를 입력해 주세요: ", handleUserInput);
    });
  }
}

export default App;

const app = new App();
app.play();
