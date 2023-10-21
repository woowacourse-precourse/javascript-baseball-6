import { Console, Random } from "@woowacourse/mission-utils";

const isValidNumber = (string) => {
  try {
    if (!string) {
      throw new Error("[ERROR]");
    }
    //3자리를 입력하지 않았을 때
    if (string.length !== 3) {
      throw new Error("[ERROR]");
    }
    //1-9사이의 숫자를 입력하지 않았을 때
    if (!/^[1-9]+$/.test(string)) {
      throw new Error("[ERROR]");
    }
    //겹치는 숫자를 입력했을 때
    if (string[0] == string[1]) {
      throw new Error("[ERROR]");
    }
    if (string[1] == string[2]) {
      throw new Error("[ERROR]");
    }
    if (string[2] == string[0]) {
      throw new Error("[ERROR]");
    }
  } catch (err) {
    Console.print(err);
  }
};

//게임 시작하기

//겹치지 않는 숫자 생성하기
function makeRandomNumber() {
  const computer = [];
  while (computer.length < 3) {
    let newNumber = Random.pickNumberInRange(1, 9);
    if (computer.indexOf(newNumber) == -1) {
      computer.push(newNumber);
    }
  }
  return computer;
}

//숫자가 정답인지 체크하기
function checkNumber(computer, user) {
  let result = {
    ball: 0,
    strike: 0,
  };
  const userArr = [...user].map((num) => parseInt(num));
  userArr.map((num, idx) => {
    if (computer[idx] === num) {
      result.strike++;
    } else if (computer.includes(num)) {
      result.ball++;
    }
  });
  return result;
}

//텍스트 생성하기
function makeText(result) {
  const { ball, strike } = result;
  let answer = [];
  if (ball > 0) {
    answer.push(`${ball}볼`);
  }
  if (strike > 0) {
    answer.push(`${strike}스트라이크`);
  }
  if (ball == 0 && strike == 0) {
    answer.push("낫싱");
  }
  Console.print(answer.join(" "));
}

class App {
  async play() {
    // Console.print("숫자 야구 게임을 시작합니다.");

    let playing = true;
    try {
      const computer = makeRandomNumber();
      while (playing) {
        const user = await Console.readLineAsync("숫자를 입력해 주세요 : ");
        isValidNumber(user);
        const result = checkNumber(computer, user);
        makeText(result);
        if (result.strike === 3) {
          const endChoice = await Console.readLineAsync(
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
          );
          if (endChoice == "1") {
            Console.print("게임 종료");
            this.play();
          } else if (endChoice == "2") {
            Console.print("게임 종료");
            break;
          } else {
            throw new Error("[ERROR]");
          }
        }
      }
    } catch (err) {
      Console.print(err);
    }
  }
}

export default App;

const app = new App();

app.play();
