import { Console, Random } from "@woowacourse/mission-utils";
import { GAME } from "./text";
import getUserInput from "./input";
import getResult from "./result";
import { STATE } from "./state";

const getComputerAnswer = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

async function restart() {
  const askRestart = await Console.readLineAsync(GAME.RESTART);
  if (askRestart === STATE.RESTART_YES) await gameStart();
  else if (askRestart === STATE.RESTART_NO) return;
}

export default async function gameStart() {
  const answer = getComputerAnswer();
  let input = await getUserInput();
  while (getResult(answer, input) === 0) input = await getUserInput();
  Console.print(GAME.COMPLETE);
  await restart();
}
