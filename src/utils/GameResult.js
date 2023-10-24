import { Console } from "@woowacourse/mission-utils";
import BetweenNumber from './BetweenNumber';
import * as Constants from '../const/Messages';

export const showResult = (computerNumber, playerNumber) => {
  const game = new BetweenNumber(computerNumber, playerNumber);
  const computerArray = game.getComputerArray();
  const playerArray = game.getPlayerArray();

  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (computerArray[i] === playerArray[i]) { 
      strike++; 
    } else if (playerArray.includes(computerArray[i])) {
      ball++; 
    }
  }

  if (ball === 0 && strike === 0) {
    Console.print(Constants.NOTHING);
    return;
  }

  const result = [];
  if (ball > 0) result.push(`${ball}${Constants.BALL}`);
  if (strike > 0) result.push(`${strike}${Constants.STRIKE}`);

  Console.print(result.join(' '));
}