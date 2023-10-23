import { Console, Random } from "@woowacourse/mission-utils";
class App {
  computer = [];

  initComputer() {
    this.computer = [];
    while (this.computer.length < 3) {
      const newNumber = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(newNumber)) {
        this.computer.push(newNumber);
      }
    }
  }

  async gameStart() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    if (isInValidCommand(input)) {
      throw new Error("[ERROR] : 올바르지 않은 입력값입니다.");
    }
    const inputToNumber = [...input].map((char) => +char);
    const { strike, ball } = this.computer.reduce(
      (prevCount, number, index) => {
        if (inputToNumber[index] === number) {
          return { ...prevCount, strike: prevCount.strike + 1 };
        }

        if (inputToNumber.includes(number)) {
          return { ...prevCount, ball: prevCount.ball + 1 };
        }

        return prevCount;
      },
      { strike: 0, ball: 0 }
    );

    const resultMessage = getResultMessage({
      strike,
      ball,
    });
    Console.print(resultMessage);

    if (strike === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return;
    }
    await this.gameStart();
  }

  async play() {
    this.initComputer();
    console.log(`answer: ${this.computer}`);
    Console.print("숫자 야구 게임을 시작합니다.");

    await this.gameStart();

    const command = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    if (command === "1") {
      this.play();
      return;
    }

    if (command === "2") {
      return;
    }

    throw new Error("[ERROR] : 잘못된 입력입니다!");
  }
}

function getResultMessage({ strike, ball }) {
  if (strike === 0 && ball === 0) {
    return "낫싱";
  }

  return `${getBallMessage(ball)}${getStrikeMessage(strike)}`;
}

function getBallMessage(ball) {
  return ball ? `${ball}볼 ` : "";
}

function getStrikeMessage(strike) {
  return strike ? `${strike}스트라이크 ` : "";
}

/** TODO
 * commend: string
 *
 * 입력값이 숫자가 아닐때
 * 입력값의 길이가 3이 아닐때
 * 입력받은 세개의 숫자중 같은 숫자가 있을때
 */
function isInValidCommand(command) {
  const VALID_COMMAND_LENGTH = 3;
  const uniqueCommand = new Set([...command]);

  const isDuplicatedNumber = uniqueCommand.size !== VALID_COMMAND_LENGTH;
  const isWrongLength = command.length !== VALID_COMMAND_LENGTH;
  const isNotNumber = [...command].some((char) => isNaN(+char));

  // console.log(isDuplicatedNumber, isWrongLength, isNotNumber);

  return [isDuplicatedNumber, isWrongLength, isNotNumber].some(
    (condition) => condition
  );
}

export default App;
