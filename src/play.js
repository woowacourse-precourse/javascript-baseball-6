import { MissionUtils } from '@woowacourse/mission-utils';
import { validation } from "./vallidation";

const COUNT = 3;

const threeStrike = async () => {
  MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  const choice = await MissionUtils.Console.readLineAsync(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
  );
  if (choice === '1') {
    await gameInit();
  } else if (choice === '2') {
    return false;
  } else {
    throw new Error('[ERROR] 숫자 1 또는 2를 입력해주세요.');
  }
};

const compareTwoNums = async (random, user) => {
  const userNumber = user;
  const computerNumber = random;

  let strike = 0;
  let ball = 0;

  for (let i = 0; i < COUNT; i++) {
    for (let j = 0; j < COUNT; j++) {
      if (random[i] === user[j]) {
        if (i === j) strike++;
        if (i !== j) ball++;
      }
    }
  }

  if (!strike && !ball) {
    MissionUtils.Console.print('낫싱');
    await getUserNum(random);
  } else if (strike && !ball) {
    MissionUtils.Console.print(`${strike}스트라이크`);
    if (strike !== 3) {
      await getUserNum(random);
    }
    await threeStrike();
  } else if (!strike && ball) {
    MissionUtils.Console.print(`${ball}볼`);
    await getUserNum(random);
  } else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    await getUserNum(random);
  }
};

const getUserNum = async (generateNum) => {
  let userNum = await MissionUtils.Console.readLineAsync(
    '숫자를 입력해주세요 : '
  );
  const userNumArray = userNum.split('').map(Number);
  if (!validation(userNumArray, COUNT)) {
    throw new Error('[ERROR]');
  }

  await compareTwoNums(generateNum, userNumArray);
};

const createNum = () => {
  const computer = [];
  while (computer.length < COUNT) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
};

const gameInit = async () => {
  const generateNum = createNum();
  await getUserNum(generateNum);
};

module.exports = { gameInit, compareTwoNums, createNum };
