import { MissionUtils } from "@woowacourse/mission-utils";

export const printStartSentence = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

export const getRandomNumberArr = () => {
  let randomNumberArr = [];
  while (randomNumberArr.length < 3) {
    const random = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumberArr.includes(random)) {
      randomNumberArr.push(random);
    }
  }
  return randomNumberArr;
};

export const getInputNumberArr = (number) => {
  let inputNumberArr = [];
  if (number !== undefined) {
    if (number.length !== 3) {
      throw new Error("[ERROR] 세개의 숫자를 입력해주세요.");
    }
    for (let i = 0; i < number.length; i++) {
      inputNumberArr.push(Number(number.substr(i, 1)));
    }
  }

  return inputNumberArr;
};

export const checkArr = (randomArr, inputArr) => {
  let ball = 0,
    strike = 0;
  if (randomArr !== undefined && inputArr !== undefined) {
    for (let i = 0; i < inputArr.length; i++) {
      for (let j = 0; j < randomArr.length; j++) {
        if (inputArr[i] === randomArr[j]) {
          if (i === j) strike++;
          else ball++;
        }
      }
    }
  }
  return { ball, strike };
};

export const printResult = (ball, strike) => {
  let str = "";
  if (strike === 0 && ball === 0) {
    str = "낫싱";
  } else if (strike === 0) {
    str = ball + "볼";
  } else if (ball === 0) {
    str = strike + "스트라이크";
  } else {
    str = ball + "볼 " + strike + "스트라이크";
  }
  MissionUtils.Console.print(str);
};
