import { MissionUtils } from "@woowacourse/mission-utils";

const generateRandomNumber = () => {
  const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9); // 1~9 중 랜덤 숫자
  return randomNumber;
};

const generateStrikes = () => {
  const numberArray = [];
  while (numberArray.length < 3) {
    let rn = generateRandomNumber();
    if (numberArray.includes(rn)) {
      continue;
    } else {
      numberArray.push(rn);
    }
  }
  return numberArray;
};

export { generateStrikes };
