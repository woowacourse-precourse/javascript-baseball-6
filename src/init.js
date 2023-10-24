import { MissionUtils } from "@woowacourse/mission-utils";

let STRIKE = 0;
let BALL = 0;

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

const comparePitches = async (userNum, computerNum) => {
  const user = userNum.split("").map((e) => +e);

  for (let i = 0; i < user.length; i++) {
    let num = computerNum.indexOf(user[i]);
    if (num === i) {
      STRIKE++;
    } else if (num !== -1 && num !== i) {
      BALL++;
    }
  }

  MissionUtils.Console.print(printResult(STRIKE, BALL));

  if (STRIKE === 3) {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    // MissionUtils.Console.print("1볼 1스트라이크");
    return await askPlay();
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
  const choose = await MissionUtils.Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );

  if (choose === "1") await init();
  else if (choose !== "2") throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
};

const checkValidation = (userInput) => {
  if (userInput.length > 3) {
    return "[ERROR] 숫자가 잘못된 형식입니다.";
  }
  if (userInput.includes(" ")) {
    return "[ERROR] 숫자가 잘못된 형식입니다.";
  }
  if (Number.isNaN(userInput)) {
    return "[ERROR] 숫자가 잘못된 형식입니다.";
  }
  return "VALID";
};

const inputPitches = async (computerNum) => {
  STRIKE = BALL = 0;

  const userInput = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );
  if (checkValidation(userInput) !== "VALID")
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  await MissionUtils.Console.print(`숫자를 입력해주세요 : ${userInput}`);

  await comparePitches(userInput, computerNum);
};

const init = async () => {
  const computerNum = generateRandomNumber();
  await inputPitches(computerNum);
};

export default init;
