import Validation from "./Validation.js";
import { MESSAGE, CHECK } from "./env/Message.js";
import { Random, Console } from "@woowacourse/mission-utils";

export default function App(
  initialState = { computer: [], input: [], START_GAME: true }
) {
  this.state = initialState;

  const validation = new Validation();

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const init = () => {
    const RANDOM_NUMBER = RandomNumber();
    this.setState({ input: [], START_GAME: true, computer: RANDOM_NUMBER });
  };

  this.play = async () => {
    init();
    Console.print(MESSAGE.START);
    while (this.state.START_GAME) {
      await userInputValue();
      checkValue();
    }
    await restartGame();
  };

  const userInputValue = async () => {
    try {
      const InputValue = await Console.readLineAsync(MESSAGE.INPUT);
      validation.InputValueLengthValidation(InputValue);
      validation.InputValueTypeOfValidation(InputValue);
      validation.InputValueDuplicatedValidation(InputValue);
      this.setState({ ...this.state, input: InputValue.split("").map(Number) });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const checkValue = () => {
    const { input, computer } = this.state;
    let CHECK_VALUE_RESULT = { strike: 0, ball: 0 };
    input.map((num, idx) => {
      if (num === computer[idx]) {
        CHECK_VALUE_RESULT.strike++;
      } else if (computer.indexOf(num) !== -1) {
        CHECK_VALUE_RESULT.ball++;
      }
    });
    checkValueResultPrint(CHECK_VALUE_RESULT);
  };

  const checkValueResultPrint = (checkValueResult) => {
    const { strike, ball } = checkValueResult;
    if (strike === 3) {
      Console.print(`${strike}${CHECK.STRIKE}`);
      Console.print(MESSAGE.GOOD_GAME);
      this.setState({ ...this.state, START_GAME: false });
      return;
    }
    if (strike === 0 && ball === 0) {
      Console.print(CHECK.NOTHING);
    } else {
      const CHECK_RESULT =
        (ball === 0 ? "" : `${ball}${CHECK.BALL} `) +
        (strike === 0 ? "" : `${strike}${CHECK.STRIKE}`);

      Console.print(CHECK_RESULT);
    }
  };

  const restartGame = async () => {
    try {
      const InputRestartValue = await Console.readLineAsync(MESSAGE.RESTART);
      validation.InputRestartValueValidation(InputRestartValue);
      const PARSEINT_VALUE = parseInt(InputRestartValue);

      if (PARSEINT_VALUE === 1) {
        this.play();
      } else if (PARSEINT_VALUE === 2) {
        return;
      }
    } catch (error) {
      throw new Error(error.message);
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

const app = new App();
app.play();
