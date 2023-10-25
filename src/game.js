import { Console } from "@woowacourse/mission-utils";
import { generateRandomNumber, printResult } from "./utils";
import validation from "./validation";

let STRIKE = 0;
let BALL = 0;

const comparePitches = async (userNum, computerNum) => {
  const user = userNum.split("").map((e) => +e);

  for (let i = 0; i < user.length; i++) {
    let num = computerNum.indexOf(user[i]);
    if (num === i) {
      STRIKE++;
    } else if (num !== -1 && num !== i) {
      BALL++;
    }
  }

  printResult(STRIKE, BALL);

  if (STRIKE === 3) {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    return await askPlay();
  }
  inputPitches(computerNum);
};

const askPlay = async () => {
  const choose = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );
  if (choose === "1") {
    await game();
  } else if (choose !== "2") {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
};

const inputPitches = async (computerNum) => {
  STRIKE = BALL = 0;
  const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");

  if (validation(userInput) !== "VALID") {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  Console.print(`숫자를 입력해주세요 : ${userInput}`);
  await comparePitches(userInput, computerNum);
};

const game = async () => {
  const computerNum = generateRandomNumber();
  await inputPitches(computerNum);
};

export default game;
