import { MissionUtils } from "@woowacourse/mission-utils";
const BALL = 0;
const STRIKE = 1;
const NOTHING = 2;

class App {
  async play() {
    await MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await gameStart();
  }
}
export default App;

const gameStart = async () => {
  const computer = await computerNum(); // 컴퓨터에서 임의의 수 3개 선택
  const user = await userNum(); // 사용자로부터 3자리 수 입력받기
  if (user !== undefined) await printResult(user, computer);  // user가 입력한 숫자가 유효할 경우 result 실행
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

const userNum = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    return checkNum(userInput);  // 입력값 유효성 체크 & Number[] 반환
  } catch (error) {
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
    return user;  // userNum 에 return
  }
  else {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}

const printResult = async (user, computer) => {
  const res = await compare(user, computer);  // 숫자 비교 시작

  if (res[NOTHING] === true) {  // 낫싱
    await MissionUtils.Console.print('낫싱');
    const newUser = await userNum();
    await printResult(newUser, computer);
  }
  else if (res[STRIKE] === 3) {  // 3스트라이크
    await MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    try {
      await askNewGame();
    } catch (error){
      throw error;
    }
  }
  else {  // 그 외
    let printRes = "";
    if (res[BALL] > 0) printRes += `${res[0]}볼 `;
    if (res[STRIKE] > 0) printRes += `${res[1]}스트라이크`;
    if (res[NOTHING] === 1) printRes += `낫싱`;
    await MissionUtils.Console.print(printRes);
    const newUser = await userNum();
    await printResult(newUser, computer);
  }
}

const compare = async (user, computer) => {
  let count = [0, 0, 0];  // ball | strike | nothing
  user.forEach((user, index) => {
    computer.forEach((computer) => {
      user === computer ? count[BALL]++ : null;  // ball count 증가
    })
    user === computer[index] ? count[STRIKE]++ : null; // strike count 증가
  })
  count[BALL] === 0 ? count[NOTHING] = 1 : count[NOTHING] = 0; //볼카운트 0인 경우 낫싱===1(true)
  count[BALL] -= count[STRIKE]; // 스트라이크카운트(같은수가 같은자리에)는 볼카운에서 제외

  return count;
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
  else if (userInput === '2') {
    await MissionUtils.Console.print("게임종료");
  }
  else {
    throw ("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}

// const app = new App();
// app.play();