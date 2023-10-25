import { Console, Random } from "@woowacourse/mission-utils";

let gameResult = 0;

function getRandomNumber() {
  const randomNumbers = [];
  while (randomNumbers.length < 3) {
    // for 문으로 랜덤 값이 2개가 나오는 현상 발견
    // 3개의 숫자
    const randomNumber = Random.pickNumberInRange(1, 9); // 1 ~ 9의 범위
    if (randomNumbers.includes(randomNumber) != true) {
      // 서로 다른 3개의 숫자가 되도록
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}

function getGameResult(computer, user) {
  let ball = 0;
  let strike = 0;

  computer.map((num, idx) => {
    // 각 자릿수를 돌며 strike, ball 갯수 판단.
    if (num === user[idx]) {
      strike += 1;
    } else {
      if (user.includes(num)) {
        ball += 1;
      }
    }
  });
  return [ball, strike];
}

class App {
  restartResult = 1;
  async play() {
    Console.print(`숫자 야구 게임을 시작합니다.`); // 게임 시작 문구
    while (this.restartResult === 1) {
      let randomNumbers = getRandomNumber(); // 컴퓨터의 숫자 3개 생성
      Console.print(randomNumbers);

      let ball = 0;
      let strike = 0;

      while (gameResult !== 3) {
        let userInputs = await Console.readLineAsync("숫자를 입력해주세요 : "); // 쿼리를 보내야하고, await 해줘야한다.
        userInputs = userInputs
          .split("")
          .map((element) => parseInt(element, 10)); // input을 int형으로 바꾼다.

        if (userInputs.length !== 3) throw new Error("[ERROR]3 Input require"); // 3개의 input인지 검증
        const userInputSet = new Set(userInputs);

        if (userInputSet.size !== 3) {
          throw new Error("[ERROR]duplicated input");
        } // 중복된 숫자가 없는지 검증

        [ball, strike] = getGameResult(randomNumbers, userInputs);
        gameResult = strike;

        if (ball === 0 && strike === 0) {
          Console.print("낫싱");
        }
        if (ball > 0 && strike === 0) {
          Console.print(`${ball}볼`);
        }
        if (ball === 0 && strike > 0) {
          Console.print(`${strike}스트라이크`);
        }
        if (ball > 0 && strike > 0) {
          Console.print(`${ball}볼 ${strike}스트라이크`);
        }
      }
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      let restartInput = await Console.readLineAsync(
        `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`
      );
      if (restartInput === "1") {
        this.restartResult = 1;
        ball = 0;
        strike = 0;
        gameResult = 0;
      } else if (restartInput === "2") {
        this.restartResult = 2;
        return;
      } else {
        this.restartResult = 0;
        throw new Error("[ERROR]");
      }
    }
  }
}

const app = new App();
app.play();

export default App;
