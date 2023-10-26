import { MissionUtils } from "@woowacourse/mission-utils";

export const computerRandom = () => {
  const computerArr = [];
  while (computerArr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerArr.includes(number)) {
      computerArr.push(number);
    }
  }
  const randomNumber = computerArr.join("");
  return randomNumber;
};

export const validateInput = (randomNumber, input) => {
  if (input.length !== 3) {
    throw new Error("3자리 숫자를 입력해주세요.");
  }
  if (input.includes("0")) {
    throw new Error("0은 입력할 수 없습니다.");
  }
  if (input[0] === input[1] || input[1] === input[2] || input[0] === input[2]) {
    throw new Error("중복되지 않은 숫자를 입력해주세요.");
  } else {
    return input;
  }
};

export const countHandle = (computerNumber, answer) => {
  let strikeCnt = 0;
  let ballCnt = 0;
  for (let i = 0; i < 3; i++) {
    if (computerNumber[i] === answer[i]) {
      strikeCnt++;
    } else if (computerNumber.includes(answer[i])) {
      ballCnt++;
    }
  }
  return { strikeCnt, ballCnt };
};

export const resultHandle = (strikeCnt, ballCnt) => {
  if (strikeCnt === 0 && ballCnt === 0) {
    MissionUtils.Console.print("낫싱");
    return;
  }
  if (strikeCnt !== 0 && ballCnt == 0) {
    MissionUtils.Console.print(`${strikeCnt}스트라이크`);
  }
  if (strikeCnt === 0 && ballCnt !== 0) {
    MissionUtils.Console.print(`${ballCnt}볼`);
  }
  if (strikeCnt !== 0 && ballCnt !== 0) {
    MissionUtils.Console.print(`${ballCnt}볼 ${strikeCnt}스트라이크`);
  }
};
