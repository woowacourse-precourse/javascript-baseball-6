import { Random } from '@woowacourse/mission-utils';

export const generateComputerNumber = () => {
  const computerNumber = [];
  while (computerNumber.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(randomNumber)) {
      computerNumber.push(randomNumber);
    }
  }
  return computerNumber.join('');
};
