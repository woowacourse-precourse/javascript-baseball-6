import { Console, Random } from "@woowacourse/mission-utils";

const NEW_GAME = "1";
const NUMBER_ERROR = "[ERROR] 숫자가 잘못된 형식입니다.";

const gamePlay = async (randomNumber) => {
  const input = await Console.readLineAsync("숫자를 입력해주세요: ");
  if (!/^\d{3}$/.test(input)) {
    throw new Error(NUMBER_ERROR);
  }
  const result = compareNumber(input, randomNumber);
  Console.print(result.print);

  if (result.answer) {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const inputAfterGame = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (inputAfterGame === NEW_GAME) {
      app.play();
    }
  } else {
    gamePlay(randomNumber);
  }
};

const compareNumber = (userNumber, computer) => {
  const user = Array.from(userNumber, Number);

  const result = {
    print: "",
    answer: false,
  };

  let ball = 0;
  let strike = 0;

  for (let i = 0; i < user.length; i++) {
    const idx = computer.indexOf(user[i]);
    idx === i ? strike++ : idx > -1 ? ball++ : "";
  }

  result.print = ball > 0 ? (result.print ? ` ${ball}볼 ` : `${ball}볼`) : "";
  result.print += strike > 0 ? ` ${strike}스트라이크` : "";

  if (result.print === "") {
    result.print = "낫싱";
  }

  if (strike === 3) {
    result.answer = true;
  }

  return result;
};

const makeRandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const randomNumber = makeRandomNumber();
    await gamePlay(randomNumber);
  }
}

const app = new App();

export default App;
