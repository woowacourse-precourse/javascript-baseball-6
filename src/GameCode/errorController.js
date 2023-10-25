import { ERROR_MESSAGE, GAME_SET } from '../Text/message.js';

//error management
export const errorOccurred = (playerNum) => {
  //입력이 숫자인지 판별
  if (isNaN(Number(playerNum))) {
    return true;
  }
  const RANGE_REGEX = new RegExp(`^[${GAME_SET.min}-${GAME_SET.max}]{${GAME_SET.size}}$`);
  //입력 범위 판별
  if (!RANGE_REGEX.test(playerNum)) {
    return true;
  }
  //중복 되는지 판별
  if (
    playerNum[0] === playerNum[1] ||
    playerNum[1] === playerNum[2] ||
    playerNum[0] === playerNum[2]
  ) {
    return true;
  }
  return false;
};
