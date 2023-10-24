const ballCount = (playerInputNumberArray, computerPickedNumberArray) => {
  return playerInputNumberArray.filter((number) =>
    computerPickedNumberArray.includes(number)
  ).length;
};

const strikeCount = (playerInputNumberArray, computerPickedNumberArray) => {
  return playerInputNumberArray.filter(
    (number, index) => computerPickedNumberArray[index] === number
  ).length;
};

const isAllCompleted = (playerInputNumberArray, computerPickedNumberArray) => {
  const ball = ballCount(playerInputNumberArray, computerPickedNumberArray);
  const strike = strikeCount(playerInputNumberArray, computerPickedNumberArray);

  if (strike === NUMBER_THREE) {
    MissionUtils.Console.print(`${strike}${STRIKE_MESSAGE}`);
    return true;
  }

  if (ball === NUMBER_ZERO) {
    MissionUtils.Console.print(`${strike}${NOTHING_MESSAGE}`);
    return false;
  }

  if (strike === NUMBER_ZERO) {
    MissionUtils.Console.print(`${ball}${BALL_MESSAGE}`);
    return false;
  }

  MissionUtils.Console.print(
    `${ball - strike}${BALL_MESSAGE} ${strike}${STRIKE_MESSAGE}`
  );
  return false;
};
