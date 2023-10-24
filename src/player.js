import { Console } from "@woowacourse/mission-utils";
import constant from "./constant";

export async function player(computer_number) {
  while (true) {
    let userNum = [];
    const input = await Console.readLineAsync(constant.USER_MESSAGE);
    const user = (input + '').split('').map((num) => parseInt(num));
    user.map((item) => userNum.push(item));
    validation(userNum);
    const result = compare(computer_number, userNum);
    Console.print(result);
    if (result === '3스트라이크') {
      Console.print(constant.SUCCESS_MESSAGE);
      break;
    }
  }
}

function validation(number) {
  if (number.length !== constant.NUMBER_LENGTH) {
    throw new Error(constant.RANGE_ERROR_MESSAGE);
  } else if (number.length != new Set(number).size) {
    throw new Error(constant.DUPLICATE_ERROR_MESSAGE);
  } else {
    for (let i in number) {
      if (i === NaN) {
        throw new Error(constant.NUMBER_ERROR_MESSAGE);
      }
    }
  }
}

function compare(computer_number, player_number) {
  let strike = 0;
  let ball = 0;

  for (let computer_item in computer_number) {
    for (let player_item in player_number) {
      if (computer_number[computer_item] === player_number[player_item]) {
        if (computer_item === player_item) {
          strike++;
        } else {
          ball++;
        }
      }
    }
  }

  if (strike === 0 && ball === 0) {
    return "낫싱";
  } else if (strike !== 0 && ball === 0) {
    return `${strike}스트라이크`;
  } else if (ball !== 0 && strike === 0) {
    return `${ball}볼`;
  } else {
    return `${ball}볼 ${strike}스트라이크`;
  }

}