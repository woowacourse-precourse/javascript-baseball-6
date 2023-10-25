import { Console } from "@woowacourse/mission-utils";
import { isValidNumber } from "./Validation.js";
import { generateRandomNumber, countBallStrike } from "./Baseball.js";

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
  inGame(computerNumber,await inputNumber);
};

const inGame = (computerNumber, userNumber) => {
    if (computerNumber === userNumber) {
        Console.print('3스트라이크');
        return restartGeme();
    }
    countBallStrike(computerNumber, userNumber);
    playGame(computerNumber);
}

async function restartGeme() {
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  const replay = Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
  if ((await replay) === "1") {
    return playGame();
  } 
  if ((await replay) === "2") {
    Console.print("게임 종료");
  }
};