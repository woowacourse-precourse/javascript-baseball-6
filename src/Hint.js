const convertStringToArray = (string) => string.split('');

const countStrike = (computerNumber, userNumber) => {
  let strikeNumber = 0;
  const computerNumberArray = convertStringToArray(computerNumber);
  const userNumberArray = convertStringToArray(userNumber);

  // TODO: 주석 삭제 필요
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < computerNumber.length; i++) {
    if (computerNumberArray[i] === userNumberArray[i]) {
      strikeNumber += 1;
    }
  }

  return strikeNumber;
};

const countBall = (computerNumber, userNumber, strikeNumber) => {
  const computerNumberArray = convertStringToArray(computerNumber);
  const userNumberArray = convertStringToArray(userNumber);
  const sameNumberArray = computerNumberArray.filter((number) => userNumberArray.includes(number));

  return sameNumberArray.length - strikeNumber;
};

const convertNumberToString = (strikeNumber, ballNumber) => {
  let hintMessage = '';

  if (ballNumber > 0) {
    hintMessage += `${ballNumber}볼`;
  }

  if (strikeNumber > 0) {
    hintMessage += `${strikeNumber}스트라이크`;
  }

  if (hintMessage.length === 0) {
    hintMessage += '낫싱';
  }

  return hintMessage;
};

const getHintToUser = (computerNumber, userNumber) => {
  const strikeNumber = countStrike(computerNumber, userNumber);
  const ballNumber = countBall(computerNumber, userNumber, strikeNumber);
  const hintMessage = convertNumberToString(strikeNumber, ballNumber);

  return hintMessage;
};

module.exports = { getHintToUser };
