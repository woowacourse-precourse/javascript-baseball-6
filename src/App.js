import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  async play() {
    gameStart();
  }
}
export default App;


const gameStart = () => {
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  computerNum(); // 컴퓨터에서 임의의 수 3개 선택
};

const computerNum = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  console.log('computer', computer);
  userInputNum(computer); // 사용자로부터 3자리 수 입력받기
}

const userInputNum = async (computer) => {
  let userInput;
  try {
    userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    console.log('user', userInput);
    checkNum(userInput, computer);  // 입력값 유효성 체크
  } catch (error) {
    MissionUtils.Console.print(error);
  }
}

const checkNum = (userInput, computer) => {
  let user = userInput.split("");
  if (user.length === 3) {
    user.forEach((e, index) => {
      user[index] = parseInt(e);
      if (isNaN(e)) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.")
    })
  }
  else {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  compare(user, computer);  // 입력받은 값이 유효할 경우 숫자 비교
}

const compare = (user, computer) => {
  console.log("user, computer", user, computer);
  let ballCount = 0;
  let strikeCount = 0;
  let nothing = false;
  user.forEach((user, index) => {
    computer.forEach((computer) => {
      user === computer ? ballCount++ : null;
    })
    user === computer[index] ? strikeCount++ : null;
  })
  ballCount === 0 ? nothing = true : null;
  ballCount -= strikeCount; // 스트라이크카운트(같은수가 같은자리에)는 볼카운에서 제외
  compareResult(ballCount, strikeCount, nothing, computer);
}

const compareResult = (ball, strike, nothing, computer) => {
  if (nothing === true) {
    MissionUtils.Console.print('낫싱');
    userInputNum(computer);
  }
  else if (strike === 3) {
    MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    try {
      askNewGame();
    } catch {
      MissionUtils.Console.print(error);
    }
  }
  else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    userInputNum(computer);
  }
}

const askNewGame = async () => {
  let userInput;
  try {
    userInput = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
  } catch (error) {
    MissionUtils.Console.print(error);
  }
  console.log("userInput", userInput);
  if (userInput === '1') {
    try {
      computerNum();
    } catch {
      MissionUtils.Console.print(error);
    }
  }
  else null;
}

const app = new App();
app.play();

