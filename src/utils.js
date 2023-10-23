import { MissionUtils } from "@woowacourse/mission-utils";

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

const isZero = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (value[i] === "0") return true;
  }
  return false;
};

export const getInputValue = async (requestStatement) => {
  let inputValue = await MissionUtils.Console.readLineAsync(requestStatement);

  if (isNaN(Number(inputValue)) || isZero(inputValue)) {
    throw new Error("[ERROR] 1부터 9까지의 숫자만 입력해주세요.");
  }
  if (inputValue.length !== 3) {
    throw new Error("[ERROR] 세개의 숫자를 입력해주세요.");
  }

  return inputValue;
};

export const setInputValueArr = (value) => {
  let inputValueArr = [];
  if (value !== undefined) {
    for (let i = 0; i < value.length; i++) {
      inputValueArr.push(Number(value.substr(i, 1)));
    }
  }
  return inputValueArr;
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
