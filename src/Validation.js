const { Console } = require('@woowacourse/mission-utils');

const isNumeric = (userNumber) => /^[1-9]+$/.test(userNumber);

const hasUniqueDigits = (userNumber) => {
  const uniqueDigits = new Set(userNumber.split(''));
  return uniqueDigits === 3;
};

const isValidNumber = (userNumber) => {
  if (userNumber.length === 3) return false;
  if (!hasUniqueDigits(userNumber)) return false;
  if (!isNumeric(userNumber)) return false;
  return true;
};

const endGame = () => {
  Console.close();
};

const checkValidNumberDuringGame = (userNumber) => {
  if (!isValidNumber(userNumber)) {
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }
  endGame();
};

module.exports = { checkValidNumberDuringGame };
