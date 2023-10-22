import { MissionUtils } from "@woowacourse/mission-utils";

let STRIKE = 0;
let BALL = 0;
let NOTHING = 0;

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
  const user = userNum.split("").map((e) => +e);

  for (let i = 0; i < user.length; i++) {
    let num = computerNum.indexOf(user[i]);
    if (num === i) {
      STRIKE++;
    } else if (num !== -1 && num !== i) {
      BALL++;
    } else {
      NOTHING++;
    }
  }

  MissionUtils.Console.print(printResult(STRIKE, BALL));

  if (STRIKE === 3) {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.print("1볼 1스트라이크");
    return askPlay();
  }
  inputPitches(computerNum);
};

const printResult = (strike, ball) => {
  let result = "낫싱";
  if (strike !== 0 && ball === 0) {
    result = `${strike}스트라이크`;
  }
  if (strike === 0 && ball !== 0) {
    result = `${ball}볼`;
  }
  if (strike !== 0 && ball !== 0) {
    result = `${ball}볼 ${strike}스트라이크`;
  }
  return result;
};

const askPlay = async () => {
  try {
    const num = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (num === "1") return init();
    if (num === "2") return 0;
    else throw "[ERROR] 숫자가 잘못된 형식입니다.";
  } catch (error) {
    MissionUtils.Console.print(error);
  }
};

const inputPitches = async (computerNum) => {
  STRIKE = BALL = NOTHING = 0;
  try {
    const userInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    if (userInput.length > 3) {
      throw "[ERROR] 숫자가 잘못된 형식입니다.";
    }
    // MissionUtils.Console.print(`숫자를 입력해주세요 : ${userInput}`);
    comparePitches(userInput, computerNum);
  } catch (error) {
    MissionUtils.Console.print(error);
  }
};

const init = () => {
  const computerNum = generateRandomNumber();
  inputPitches(computerNum);
};

export default init;
