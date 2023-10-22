import { Random } from "@woowacourse/mission-utils";

const checkNumber = (randomNumber, createdNumber) => {
  if (!randomNumber.includes(createdNumber)) {
    randomNumber.push(createdNumber);
  }
};

const pickRandomNumber = () => {
  const randomNumber = [];
  while (randomNumber.length < 3) {
    const createdNumber = Random.pickNumberInRange(1, 9);
    checkNumber(randomNumber, createdNumber);
  }
  return randomNumber;
};

export default pickRandomNumber;
