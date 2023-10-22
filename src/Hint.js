const convertStringToArray = (string) => string.split('');

const countStrike = (userNumber, computerNumber) => {
  let strikeNumber = 0;
  const userArray = convertStringToArray(userNumber);
  const computerArray = convertStringToArray(computerNumber);

  // TODO: 주석 삭제 필요
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] === computerArray[i]) {
      strikeNumber += 1;
    }
  }

  return strikeNumber;
};

const countBall = (userNumber, computerNumber) => {
  const userArray = convertStringToArray(userNumber);
  const computerArray = convertStringToArray(computerNumber);

  let ballNumber = 0;

  // TODO: 주석 삭제 필요
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] !== computerArray[i] && computerArray.includes(userArray[i])) {
      ballNumber += 1;
    }
  }

  return ballNumber;
};

const convertNumberToString = (strikeNumber, ballNumber) => {
  let hintMessage = '';

  if (ballNumber > 0) {
    hintMessage += `${ballNumber}볼`;
  }

  if (strikeNumber > 0) {
    hintMessage += `${strikeNumber}스트라이크`;
  }

  if (!ballNumber && !strikeNumber > 0) {
    hintMessage += '낫싱';
  }

  return hintMessage;
};

const getHintToUser = (userNumber, computerNumber) => {
  const strikeNumber = countStrike(userNumber, computerNumber);
  const ballNumber = countBall(userNumber, computerNumber);
  const hintMessage = convertNumberToString(strikeNumber, ballNumber);

  return hintMessage;
};

module.exports = { getHintToUser };
