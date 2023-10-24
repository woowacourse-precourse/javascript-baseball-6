import { MissionUtils } from '@woowacourse/mission-utils';
import { ErrorString, InputString, NUMBER_SIZE } from '../constants/index.js';

const InputView = {
  readUserNumber: async () => {
    const userNumber = await MissionUtils.Console.readLineAsync(InputString.INPUT_USER_NUMBER);
    InputView.validateUserNumber(userNumber);

    return userNumber;
  },

  readRestartNumber: async () => {
    const restartNumber = await MissionUtils.Console.readLineAsync(
      InputString.INPUT_RESTART_NUMBER,
    );
    InputView.validateRestartNumber(restartNumber);

    return restartNumber;
  },

  validateUserNumber: userNumber => {
    const userNumberArray = userNumber.split('');

    if (userNumber.length !== NUMBER_SIZE) throw new Error(ErrorString.ERROR_USER_NUMBER_LENGTH);
    if (userNumber.replace(/[1-9]/g, '').length > 0)
      throw new Error(ErrorString.ERROR_USER_NOT_NUMBER);
    if (userNumber.length !== new Set(userNumberArray).size)
      throw new Error(ErrorString.ERROR_USER_DUPLICATED_NUMBER);
  },

  validateRestartNumber: restartNumber => {
    if (restartNumber.length !== 1) throw new Error(ErrorString.ERROR_RESTART_INPUT_LENGTH);
    if (restartNumber.replace(/[1|2]/g, '') > 0)
      throw new Error(ErrorString.ERROR_RESTART_INVALID_INPUT);
  },
};

export default InputView;
