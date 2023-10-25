import { Console } from "@woowacourse/mission-utils";

async function isGameOver() {
  try {
    let userInput = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    if(!(Number(userInput) >= 1 && Number(userInput) <= 2)) throw new Error('[ERROR]');
    if(userInput === '1') return false;
    else return true;
  } catch (error) {
    throw new Error(error);
  }
}

export default isGameOver;
