import { printMessage } from "./utils/messages.js";

export const displayResultMessage = ({ strike, ball }) => {
  const strikeMessage = strike === 0 ? "" : `${strike}스트라이크`;
  const ballMessage = ball === 0 ? "" : `${ball}볼 `;

  if (strike === 0 && ball === 0) printMessage("낫싱");
  printMessage(`${ballMessage}${strikeMessage}`);
  if (strike === 3) printMessage("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
};
