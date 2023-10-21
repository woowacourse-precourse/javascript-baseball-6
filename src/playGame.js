import { MissionUtils } from "@woowacourse/mission-utils";

const compareTwoNums = (random, user) => {
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

  if (strike === 0 && ball === 0) {
    console.log("낫싱");
  } else if (strike && !ball) {
    console.log(`${strike}스트라이크`);
  } else if (!strike && ball) {
    console.log(`${ball}볼`);
  } else {
    console.log(`${strike}스트라이크 `, `${ball}볼`);
  }
};

const checkValidation = (random, user) => {
  if (user.length !== 3) {
    throw new Error("[ERROR] 세 자리의 숫자를 입력해주세요");
  }
  if (user) {
    for (let i = 0; i < 3; i++) {
      if (isNaN(user[i])) {
        throw new Error("[ERROR] 세 자리의 숫자를 입력해주세요");
      }
    }
  }
  if (user) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = i + 1; j < 3; j++) {
        if (user[i] === user[j]) {
          count++;
        }
      }
    }
    if (count !== 0) {
      throw new Error("[ERROR] 중복되지 않은 세 자리의 숫자를 입력해주세요");
    }
  }

  compareTwoNums(random, user);
};

const createNum = () => {
  const computer = [];
  while (computer.length < 3) {
    const randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    computer.push(randomNum);
    return randomNum;
  }
};

const testCreateNum = () => {
  let randomIndexArray = [];
  while (randomIndexArray.length < 3) {
    randomNum = Math.floor(Math.random() * 9) + 1;
    if (!randomIndexArray.includes(randomNum)) {
      randomIndexArray.push(randomNum);
    }
  }
  console.log(randomIndexArray);
  return randomIndexArray;
};

const gameinit = () => {
  // MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  // const userNum = MissionUtils.Console.readLine("숫자를 입력해주세요 : ");
  console.log("숫자 야구 게임을 시작합니다.");

  const userNum = prompt("숫자를 입력해주세요 : ").split("");
  const userNumToNumber = userNum.map(Number);

  let generateNum = [];
  generateNum = testCreateNum();
  // generateNum = createNum();

  checkValidation(generateNum, userNum);
};
