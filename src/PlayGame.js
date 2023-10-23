import { Random, Console } from "@woowacourse/mission-utils";

export default function PlayGame(initialState = { comuter: [] }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const init = () => {
    const RANDOM_NUMBER = RandomNumber();
    this.setState({ ...this.state, computer: RANDOM_NUMBER });
  };

  this.play = () => {
    init();
    Console.print("숫자 야구 게임을 시작합니다.");
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
