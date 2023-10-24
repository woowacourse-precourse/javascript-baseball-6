import { ERROR_MESSAGE } from "../Text/message";

//error management
export const errorOccurred = (playerNum) => {
  //입력이 숫자인지 판별
  if (isNaN(Number(playerNum))) {
    throw new Error(ERROR_MESSAGE.numberError);
  }
  //입력 범위 판별
  if (!/^[1-9]{3}$/.test(playerNum)) {
    throw new Error(ERROR_MESSAGE.rangeError);
  }
  //중복 되는지 판별
  if (
    playerNum[0] === playerNum[1] ||
    playerNum[1] === playerNum[2] ||
    playerNum[0] === playerNum[2]
  ) {
    throw new Error(ERROR_MESSAGE.dupError);
  }

  return;
};
