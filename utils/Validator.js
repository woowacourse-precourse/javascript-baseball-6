import MESSAGES from '../src/Messages';
import CONSTANTS from '../src/Constants';

const Validator = {
  validateUserNumber(number) {
    if (number.length !== CONSTANTS.validLength) throw new Error(MESSAGES.invalidLength);
    if (new Set(number).size !== CONSTANTS.validLength) throw new Error(MESSAGES.duplicatedNumber);
    if (!/^[1-9]{3}$/.test(number.join(''))) throw new Error(MESSAGES.invalidValue);
  },
  validateRetry(number) {
    if (number !== CONSTANTS.restartValue && number !== CONSTANTS.quitValue)
      throw new Error(MESSAGES.restartQuery);
  },
};

export default Validator;
