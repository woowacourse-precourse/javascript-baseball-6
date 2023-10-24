import { ERROR_MESSAGE } from "../Text/message.js";

//error management
export const errorOccurred = (playerNum) => {
  //입력이 숫자인지 판별
  if (isNaN(Number(playerNum))) {
    return true;
  }
  //입력 범위 판별
  if (!/^[1-9]{3}$/.test(playerNum)) {
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
