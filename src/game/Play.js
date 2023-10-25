import { Console } from "@woowacourse/mission-utils";
import { isValidNumber } from "./Validation.js";
import { generateRandomNumber, countBallStrike } from "./Baseball.js";

export async function playGame() {
  const inputNumber = Console.readLineAsync("숫자를 입력해주세요 : ");
  // 플레이어 입력값의 유효성 검사
  if (!isValidNumber(await inputNumber)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  Console.print(countBallStrike(generateRandomNumber(), await inputNumber));
}

export async function restartGeme() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const replay = Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    if (await replay === '1') {
        return playGame();
    } else if (await replay === '2') {
        Console.print('게임 종료')
    } else {
        throw new Error('');
    }
}