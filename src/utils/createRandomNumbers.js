import { Random } from '@woowacourse/mission-utils';

export const createRandomNumbers = () => {
  const winningNumbersArray = [];
  while (winningNumbersArray.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!winningNumbersArray.includes(randomNumber)) {
      winningNumbersArray.push(randomNumber);
    }
  }
  const winningNumbers = Number(winningNumbersArray.join(''));

  return winningNumbers;
};
