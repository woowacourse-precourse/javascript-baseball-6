import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";
import User from "./User.js";
import ScoreKeeper from "./ScoreKeeper.js";

const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  FINISH: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  END: "게임이 종료되었습니다.",
};
class App {
  constructor() {
    this.initComponent();
  }

  initComponent() {
    this.computer = new Computer({
      initialState: [],
    });

    this.user = new User({
      initialState: "",
    });

    this.scoreKeepre = new ScoreKeeper({
      initialState: { strikes: 0, balls: 0 },
    });
  }

  async playTurn() {
    const { computer, user, scoreKeepre } = this;

    computer.chooseRandomly();
    console.log(computer.state);
    while (scoreKeepre.state.strikes !== 3) {
      const userInput = await Console.readLineAsync(MESSAGE.INPUT);

      user.setState(userInput);

      scoreKeepre.calculate(user.state, computer.state);
      scoreKeepre.printResult();
    }

    Console.print(MESSAGE.FINISH);
    this.initComponent();
  }

  async play() {
    Console.print(MESSAGE.START);

    let replay = true;

    while (replay) {
      await this.playTurn();
      replay =
        (await Console.readLineAsync(MESSAGE.RESTART)) === "1" ? true : false;
    }
  }
}

export default App;
