import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  async play() {
    await MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await gameStart();
  }
}
export default App;


const gameStart = async () => {
  const computer = await computerNum(); // 컴퓨터에서 임의의 수 3개 선택
  await userInputNum(computer); // 사용자로부터 3자리 수 입력받기
};

const computerNum = async () => {
  let computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

const userInputNum = async (computer) => {
  let userInput;
  try {
    userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    const user = await checkNum(userInput);  // 입력값 유효성 체크
    await compare(user, computer);  // 입력받은 값이 유효할 경우 숫자 비교
  } catch (error){
    throw error;
  }
  
}

const checkNum = async (userInput) => {
  let user = userInput.split("");
  if (user.length === 3) {
    user.forEach((e, index) => {
      user[index] = parseInt(e);
      if (isNaN(e)) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.")
    })

  return user;
  }
  else {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}

const compare = async (user, computer) => {
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
  await compareResult(ballCount, strikeCount, nothing, computer);
}

const compareResult = async (ball, strike, nothing, computer) => {
  if (nothing === true) {
    await MissionUtils.Console.print('낫싱');
    await userInputNum(computer);
  }
  else if (strike === 3) {
    await MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    try {
      await askNewGame();
    } catch {
      await MissionUtils.Console.print(error);
    }
  }
  else {
    await MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    await userInputNum(computer);
  }
}

const askNewGame = async () => {
  let userInput;
  try {
    userInput = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
  } catch (error) {
    throw error;
  }
  if (userInput === '1') {
      await gameStart();
  }
  else if(userInput === '2'){
    await MissionUtils.Console.print("게임종료");
  }
  else{
    throw ("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}

// const app = new App();
// app.play();