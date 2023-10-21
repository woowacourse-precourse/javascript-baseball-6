import { MissionUtils } from "@woowacourse/mission-utils";

let STRIKE = 0;
let BALL = 0;
let NOTHING = 0;

const comparePitches = (numbers) => {
  // const randomNumber = await MissionUtils.Random.pickNumberInRange(111, 999);
  // err: 랜덤 숫자가 생성 안됨. 계속 1임. 라이브러리 코드 사용
  // README.md 참고하여 해결

  const computer = [];
  const user = numbers.split("").map((e) => +e);
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  // 숫자 확인
  console.log("computer:", computer);
  console.log("user:", user);

  // 숫자 비교
  for (let i = 0; i < 3; i++) {
    console.log(`computer[${i}]:`, computer[i]);
    console.log(`user[${i}]:`, user[i]);
    let num = computer.indexOf(user[i]);
    if (num === i) {
      STRIKE++;
    } else if (num !== -1 && num !== i) {
      BALL++;
    } else {
      NOTHING++;
    }
  }

  console.log(STRIKE, BALL, NOTHING);
  printResult(STRIKE, BALL, NOTHING);
  // 3스트라이크일 때 종료
  if (STRIKE === 3) {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    askPlay();
  } else {
    inputPitches();
  }
};

const printResult = (strike, ball, nothing) => {
  if (nothing === 3) {
    MissionUtils.Console.print("낫싱");
  } else if (strike !== 0 && ball === 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
  } else if (strike === 0 && ball !== 0) {
    MissionUtils.Console.print(`${ball}볼`);
  } else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
};

const askPlay = () => {
  try {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (num) => {
        if (num === "1") {
          MissionUtils.Console.print("게임을 새로 시작하겠습니다.");
        } else if (num === "2") {
          MissionUtils.Console.print("게임을 종료하겠습니다.");
        } else {
          throw "[ERROR] 숫자가 잘못된 형식입니다.";
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const inputPitches = async () => {
  STRIKE = BALL = NOTHING = 0;
  try {
    const userInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 :"
    );
    if (userInput.length > 3) {
      throw "[ERROR] 숫자가 잘못된 형식입니다.";
    }
    MissionUtils.Console.print(`숫자를 입력해주세요 : ${userInput}`);
    comparePitches(userInput);
  } catch (error) {
    console.log(error);
  }
};

const init = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  inputPitches();
};

export default init;
