import { Console, Random } from "@woowacourse/mission-utils"
import getUserInput from "./input.js";
import getResult from "./result.js"

const getComputerAnswer = () => {
  const computer = [];
  while (computer.length < 3) {

    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

export default async function gameStart() {
  const answer = getComputerAnswer();
  // Console.print(answer);
  let input = await getUserInput();
  let result = await getResult(answer, input);
  while (result !== "3스트라이크") {
    Console.print(result);
    input = await getUserInput();
    result = await getResult(answer, input);
  }
  Console.print(result);
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
  const restart = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
  if (restart == 1)
    gameStart();
}