import { Console } from '@woowacourse/mission-utils';
import inputToUser from './inputToUser';
import compareNumberString from './compareNumberString';
import getResultString from './getResultString';
import Constant from './Constant';

const { MAX_NUM_LENGTH, INPUT_PROMPT } = Constant;

const isValidLength = (string) => {
  return string.length === MAX_NUM_LENGTH;
};

const isUnique = (string) => {
  const charArray = string.split('');
  const charSet = new Set(charArray);

  return charArray.length === charSet.size;
};

const isUniqueNumber = (string) => {
  const number = Number(string);

  if (Number.isNaN(number)) {
    return false;
  }

  return isValidLength(string) && isUnique(string);
};

const tryMatch = async (baseNumber) => {
  let isMatch = false;

  while (!isMatch) {
    const inputValue = await inputToUser(INPUT_PROMPT, isUniqueNumber);

    const { strike, ball } = compareNumberString(baseNumber, inputValue);

    const resultString = getResultString({ strike, ball });
    Console.print(resultString);

    isMatch = strike === MAX_NUM_LENGTH;
  }
};

export default tryMatch;
