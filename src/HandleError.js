import { Message } from "./constants/Message.js";

const checkDigit = (playerNumArray) => {
  const playerNums = playerNumArray.join("");
  return isNaN(playerNums);
};

const checkDuplicate = (playerNumArray) => {
  return [...new Set(playerNumArray)].length !== 3;
};

const checkThreeError = (playerNumArray) => {
  if (playerNumArray.length !== 3) return true;
  if (checkDigit(playerNumArray)) return true;
  if (checkDuplicate(playerNumArray)) return true;
};

export const handleError = (playerNum) => {
  const playerNumArray = playerNum.split("");
  if (checkThreeError(playerNumArray)) {
    throw Message.ERROR;
  }
};
