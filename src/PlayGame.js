import { Random, Console } from "@woowacourse/mission-utils";

export default function PlayGame(
  initialState = { computer: [], input: [], START_GAME: true }
) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const init = () => {
    const RANDOM_NUMBER = RandomNumber();
    this.setState({ ...this.state, computer: RANDOM_NUMBER });
  };

  this.play = async () => {
    init();

    Console.print("숫자 야구 게임을 시작합니다.");
    while (this.state.START_GAME) {
      await userInputValue();
      checkValue();
    }
    await RestartGame();
  };

  const userInputValue = async () => {
    try {
      const InputValue = await Console.readLineAsync("숫자를 입력해주세요 : ");
      this.setState({ ...this.state, input: InputValue.split("").map(Number) });
    } catch (error) {
      throw new Error(error);
    }
  };

  const checkValue = () => {
    const { input, computer } = this.state;
    const checkValueResult = { strike: 0, ball: 0 };
    input.map((num, idx) => {
      if (num === computer[idx]) {
        checkValueResult.strike++;
      } else if (computer.indexOf(num) !== -1) {
        checkValueResult.ball++;
      }
    });
    checkValueResultPrint(checkValueResult);
  };

  const checkValueResultPrint = (checkValueResult) => {
    const { strike, ball } = checkValueResult;
    if (strike === 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.setState({ ...this.state, START_GAME: false });
      return;
    }
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else {
      const result =
        (strike === 0 ? "" : `${strike}스트라이크 `) +
        (ball === 0 ? "" : `${ball}볼`);
      Console.print(result);
    }
  };

  const RestartGame = async () => {
    try {
      const InputRestartValue = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );

      const IntValue = parseInt(InputRestartValue);

      if (IntValue === 1) {
        this.play();
      } else if (IntValue === 2) {
        return;
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const RandomNumber = () => {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  };
}
