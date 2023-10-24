import MESSAGES from '../src/Messages';

const Validator = {
  validateUserNumber(number) {
    if (number.length !== 3) throw new Error(MESSAGES.invalidLength);
    if (new Set(number).size !== 3) throw new Error(MESSAGES.duplicatedNumber);
    if (!/^[1-9]{3}$/.test(number.join(''))) throw new Error(MESSAGES.invalidValue);
  },
  validateRetry(number) {
    if (number !== 1 && number !== 2) throw new Error(MESSAGES.restartQuery);
  },
};

export default Validator;
