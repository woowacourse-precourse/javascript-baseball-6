import { Console } from '@woowacourse/mission-utils';
import inputToUser from './inputToUser';
import compareNumberString from './compareNumberString';
import getResultString from './getResultString';

const NUMBER_LENGTH = 3;

const isValidLength = string => {
  return string.length === NUMBER_LENGTH;
};

const isUnique = string => {
  const charArray = string.split('');
  const charSet = new Set(charArray);

  return charArray.length === charSet.size;
};

const isUniqueNumber = string => {
  const number = Number(string);
  if (Number.isNaN(number)) {
    return false;
  }
  return isValidLength(string) && isUnique(string);
};

const tryMatch = async baseNumber => {
  const INPUT_NUMBER_PROMPT = '숫자를 입력해 주세요 : ';

  let isMatch = false;

  while (!isMatch) {
    const inputValue = await inputToUser(INPUT_NUMBER_PROMPT, isUniqueNumber);

    const { strike, ball } = compareNumberString(baseNumber, inputValue);

    const resultString = getResultString({ strike, ball });
    Console.print(resultString);

    isMatch = strike === NUMBER_LENGTH;
  }
};

export default tryMatch;
