import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';
import { validateBaseballNumber } from '../utils/validation.js';

export const View = {
  async readUserNumber() {
    const userNumber = await Console.readLineAsync(MESSAGE.READ.USER_NUMBER);
    const numberList = userNumber.split('');

    validateBaseballNumber(numberList);

    return numberList.map(Number);
  },

  print(message) {
    Console.print(message);
  },

  printGameResult({ strike, ball }) {
    this.print(getResultMessage({ strike, ball }));
  },
};

const getResultMessage = ({ strike, ball }) => {
  if (strike === 3)
    return '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료';
  if (strike === 0 && ball === 0) return '낫싱';

  return [ball && `${ball}볼`, strike && `${strike}스트라이크`]
    .filter(Boolean)
    .join(' ');
};
