import { Console } from '@woowacourse/mission-utils';

const ERROR_MESSAGE = '[ERROR] 올바른 입력이 아닙니다.';

const inputToUser = async (prompt, checkValidFunc) => {
  const inputValue = await Console.readLineAsync(prompt);

  const isValidInput = checkValidFunc(inputValue);

  if (!isValidInput) {
    throw Error(ERROR_MESSAGE);
  }

  return inputValue;
};

export default inputToUser;
