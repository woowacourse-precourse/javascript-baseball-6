import { MissionUtils } from "@woowacourse/mission-utils";

let STRIKE = 0;
let BALL = 0;
let NOTHING = 0;

const exit = () => {
  MissionUtils.Console.close();
};

const generateRandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const comparePitches = (userNum, computerNum) => {
  // const randomNumber = await MissionUtils.Random.pickNumberInRange(111, 999);
  // err: 랜덤 숫자가 생성 안됨. 계속 1임. 라이브러리 코드 사용
  // README.md 참고하여 해결

  // 유저숫자 -> 숫자배열로 변환
  const user = userNum.split("").map((e) => +e);
  console.log(computerNum);
  // 숫자 확인
  // console.log("computer:", computer);
  // console.log("user:", user);

  // 숫자 비교
  for (let i = 0; i < user.length; i++) {
    // console.log(`computer[${i}]:`, computer[i]);
    // console.log(`user[${i}]:`, user[i]);
    let num = computerNum.indexOf(user[i]);
    if (num === i) {
      STRIKE++;
    } else if (num !== -1 && num !== i) {
      BALL++;
    } else {
      NOTHING++;
    }
  }

  printResult(STRIKE, BALL);
  // 3스트라이크일 때 종료
  if (STRIKE === 3) {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    return askPlay();
  }
  inputPitches(computerNum);
};

const printResult = (strike, ball) => {
  if (strike !== 0 && ball === 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
  } else if (strike === 0 && ball !== 0) {
    MissionUtils.Console.print(`${ball}볼`);
  } else if (strike !== 0 && ball !== 0) {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  } else {
    MissionUtils.Console.print("낫싱");
  }
};

const askPlay = () => {
  try {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (num) => {
        if (num === "1") {
          return init();
        } else if (num === "2") {
          return exit();
        } else {
          throw "[ERROR] 숫자가 잘못된 형식입니다.";
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const inputPitches = async (computerNum) => {
  STRIKE = BALL = NOTHING = 0;
  try {
    const userInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요"
    );
    if (userInput.length > 3) {
      throw "[ERROR] 숫자가 잘못된 형식입니다.";
    }
    MissionUtils.Console.print(userInput);
    comparePitches(userInput, computerNum);
  } catch (error) {
    console.log(error);
  }
};

const init = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  const computerNum = generateRandomNumber();
  inputPitches(computerNum);
};

export default init;
