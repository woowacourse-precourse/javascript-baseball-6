import { Random } from "@woowacourse/mission-utils";

const randomNumber = [];
while (randomNumber.length < 3) {
  const createdNumber = Random.pickNumberInRange(1, 9);
  if (!randomNumber.includes(createdNumber)) {
    randomNumber.push(createdNumber);
  }
}

export default randomNumber;
