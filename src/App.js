import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computer = [];
    while (computer.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNumber)) {
        computer.push(randomNumber);
      }
    }
    console.log(computer); //DEBUG
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    getUserInput(computer);
  }
}

async function getUserInput(computer) {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    console.log(`사용자가 입력한 숫자 : ${userInput}`); //DEBUG
    checkInput(userInput, computer);
  } catch (error) {
    // reject 되는 경우
    console.log("getUserInput() catch문");
  }
}

function checkInput(userInput, computer) {
  const states = [0, 0, 0];
  console.log(`사용자가 입력한 숫자 : ${userInput}(checkInput함수))`); //DEBUG
  console.log(`컴퓨터가 입력한 숫자 : ${computer}(checkInput함수))`); //DEBUG
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (userInput[i] == computer[j]) {
        if (i == j) {
          states[0]++;
        } else {
          states[1]++;
        }
        break ;
      }
      if (j == 2) {
        states[2]++;
      }
    }
  }
  if (states[2] == 3) {
    MissionUtils.Console.print('낫싱');
  } else if (states[0] == 3) {
    MissionUtils.Console.print(`${states[0]}스트라이크`);
  } else {
    MissionUtils.Console.print(`${states[1]}볼 ${states[0]}스트라이크`);
  }
}
const app = new App();
app.play();

export default App;
