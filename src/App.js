import { Random, Console } from "@woowacourse/mission-utils";

async function judge(computer, user) {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (computer[i] === user[i]) {
      strike++;
    } else if (computer.includes(user[i])) {
      ball++;
    }
  }

  if (strike === 0 && ball === 0) {
    return "낫싱";
  }

  const result = [];
  if (strike > 0) {
    result.push(`${strike}스트라이크`);
  }
  if (ball > 0) {
    result.push(`${ball}볼`);
  }

  return result.join(" ");
}

function generateRandomNumber() {
  const numbers = [];
  while (numbers.length < 3) {
    const num = Random.pickNumberInRange(1, 9);
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
}

function isGameEnd(result) {
  return result === "3스트라이크";
}

async function isRestartGame() {
  const restart = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: "
  );
  return restart === "1";
}

(async () => {
  const computer = generateRandomNumber();
  console.log("숫자 야구 게임을 시작합니다.");

  let gameOver = false;

  while (!gameOver) {
    const user = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const result = await judge(computer, user);
    console.log(result);

    if (isGameEnd(result)) {
      console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      if (await isRestartGame()) {
        computer = generateRandomNumber();
        console.log("게임을 다시 시작합니다.");
      } else {
        console.log("게임을 종료합니다.");
        gameOver = true;
      }
    }
  }
})();
