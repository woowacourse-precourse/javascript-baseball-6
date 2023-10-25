import { Console } from "@woowacourse/mission-utils";
import { isValidNumber } from "./Validation.js";
import { generateRandomNumber } from "./Baseball.js";

export const startGame = () => {
  const computerNumber = generateRandomNumber();
  playGame(computerNumber);
};

async function playGame(computerNumber) {
  const inputNumber = Console.readLineAsync("숫자를 입력해주세요 : ");
  // 플레이어 입력값의 유효성 검사
  if (!isValidNumber(await inputNumber)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  countBallStrike(computerNumber,await inputNumber);
};

const countBallStrike = (computerNumber, inputNumber) => {
  const computerArray = computerNumber.split("");
  const inputNumberArray = inputNumber.split("");
  let ball = 0;
  let strike = 0;
  let inform = [];

  for (let computerIndex = 0; computerIndex < 3; computerIndex++) {
    for (let userIndex = 0; userIndex < 3; userIndex++) {
      if (computerArray[computerIndex] === inputNumberArray[userIndex]) {
        if (computerIndex === userIndex) {
          strike++;
        } else {
          ball++;
        }
      }
    }
  }

  if (ball !== 0) {
    inform.push(`${ball}볼`);
  }
  if (strike !== 0) {
    inform.push(`${strike}스트라이크`);
  }

  let informText = "낫싱";
  if (inform.length > 0) {
    informText = inform.join("");
  }
  Console.print(informText);
};

async function restartGeme() {
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  const replay = Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
  if ((await replay) === "1") {
    return playGame();
  } else if ((await replay) === "2") {
    Console.print("게임 종료");
  } else {
    throw new Error("");
  }
};