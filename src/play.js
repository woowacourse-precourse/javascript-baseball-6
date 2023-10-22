import { MissionUtils } from "@woowacourse/mission-utils";
const { checkValidation } = require("./vallidation");

const threeStrike = async () => {
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  const choice = MissionUtils.Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );

  if (choice === 1) {
    return await gameinit();
  } else if (choice === 2) {
    return false;
  } else {
    throw new Error("[ERROR] 숫자 1 또는 2를 입력해주세요.");
  }
};

const compareTwoNums = async (random, user) => {
  const userNumber = user;
  const computerNumber = random;

  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (computerNumber[i] === userNumber[j]) {
        if (i === j) strike++;
        if (i !== j) ball++;
      }
    }
  }

  if (!strike && !ball) {
    MissionUtils.Console.print("낫싱");
    await gameinit();
  } else if (strike === 3) {
    MissionUtils.Console.print("낫싱");
    await threeStrike();
  } else if (strike && !ball) {
    MissionUtils.Console.print(`${strike}스트라이크`);
    await gameinit();
  } else if (!strike && ball) {
    MissionUtils.Console.print(`${ball}볼`);
    await gameinit();
  } else {
    MissionUtils.Console.print(`${strike}스트라이크 `, `${ball}볼`);
  }
};

const getUserNum = async (generateNum) => {
  const userNum = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );

  if (checkValidation(userNum)) {
    await compareTwoNums(generateNum, userNum);
  }
};

const createNum = () => {
  const computer = [];
  const randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  computer.push(...randomNum);
  return computer;
};

const gameinit = async () => {
  const generateNum = createNum();
  await getUserNum(generateNum);
};

module.exports = { gameinit, compareTwoNums, createNum };
