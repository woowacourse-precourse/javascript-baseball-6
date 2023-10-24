import {MissionUtils} from "@woowacourse/mission-utils";
import Computer from "./Computer.js";
import PlayerInput from "./PlayerInput.js";


class App {
  constructor() {
    this.initializeGame();
  }

  initializeGame() {
    this.computer = new Computer();
    this.playerInput = new PlayerInput();
    this.isPlaying = false;
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.isPlaying = true;

    // 게임이 종료될 때까지 유저 입력받기 반복
    while (this.isPlaying) {
      const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

      // 유저 입력값이 유효한지 검사하고 유효하지 않다면 게임 종료
      if (!this.playerInput.isValidate(userInput)) {
        this.endGame();
        throw new Error('[ERROR] 유저 입력값이 유효하지 않습니다.');
      }

      // 유저 입력값이 유효하다면 컴퓨터가 생성한 숫자와 비교
      const resultText = this.compareNumber(userInput);

      // 비교 결과를 출력
      MissionUtils.Console.print(resultText);
    }

    // 게임 종료 시나리오
    const userInput = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    if (userInput === '1') {
      this.initializeGame();
      this.play();
    } else if (userInput === '2') {
      MissionUtils.Console.print('게임을 종료합니다.');
    }
  }

  compareNumber(userInput) {
    // 컴퓨터가 생성한 숫자와 유저 입력값을 비교하여 결과를 리턴
    const {strikeCount, ballCount} = this.computer.getStrikeAndBall(userInput);
    if (strikeCount === 3) {
      this.endGame();
      return '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    }
    if (strikeCount === 0 && ballCount === 0) {
      return '낫싱';
    }
    let result = '';
    if (ballCount > 0) {
      result += `${ballCount}볼`;
    }
    if (strikeCount > 0) {
      // 볼과 스트라이크가 동시에 있을 때는 띄어쓰기 추가
      result += `${ballCount > 0 ? ' ' : ''}${strikeCount}스트라이크`;
    }
    return result;
  }

  endGame() {
    this.isPlaying = false;
  }
}

const app = new App();
app.play();

export default App;
