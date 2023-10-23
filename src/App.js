import { Random, Console } from "@woowacourse/mission-utils";

const GenerateRandomNumber = (min, max) => {
  let randomArr = [];
  let number = 0;
  while (randomArr.length < 3) {
    number = Random.pickNumberInRange(min, max);
    if (!randomArr.includes(number)) {
      randomArr.push(number);
    }
  }
  return randomArr;
};
let answer = GenerateRandomNumber(1, 9);

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    PlayGame();
  }
}

const PlayGame = async () => {
  let input = await Console.readLineAsync("숫자를 입력해주세요: ");
  let inputArr = Array.from(String(input), Number);

  if (!Validator(inputArr)) {
    throw new Error("[ERROR] 잘못된 값을 입력하여 애플리케이션이 종료됩니다.");
  }
  const result = CheckGuess(inputArr, answer);
  Console.print(result);
  if (result === "3스트라이크") {
    Console.print("3개의 숫자를 모두 맞히셨습니다!");
    return GameOver();
  }
  PlayGame();
};

const Validator = (input) => {
  if (input.length !== 3) return false;
  if (input[0] === input[1] || input[0] === input[2] || input[1] === input[2])
    return false;
  return true;
};

const CheckGuess = (input, answer) => {
  let strikes = 0;
  let ball = 0;
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (answer.includes(input[i])) {
      ball++;
    }
    if (input[i] === answer[i]) {
      strikes++;
      ball--;
    }
  }
  result = `${ball}볼 ${strikes}스트라이크`;

  if (strikes === 0 && ball === 0) result = "낫싱";
  if (strikes === 0) result = `${ball}볼`;
  if (ball === 0) result = `${strikes}스트라이크`;

  return result;
};

const GameOver = async () => {
  let input = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );
  if (String(input) === "1") {
    answer = GenerateRandomNumber(1, 9);
    PlayGame();
  } else if (String(input) === "2") return;
  else throw new Error("[ERROR] 1 혹은 2가 아닌 값을 입력하였습니다");
};
const app = new App();
app.play();

export default App;
