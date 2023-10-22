import { Console } from '@woowacourse/mission-utils';

const userInput = async (prompt, checkValidFunc) => {
  const inputValue = await Console.readLineAsync(prompt);

  const isValidInput = checkValidFunc(inputValue);

  if (!isValidInput) {
    throw Error('[ERROR] 올바른 입력이 아닙니다.');
  }

  return inputValue;
};

export default userInput;
