import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const START_GAME_MESSAGE = '숫자 야구 게임을 시작합니다.';
    const END_GAME_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    const RESTART_GAME_MESSAGE = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';
    const INPUT_MESSAGE = '숫자를 입력해주세요: ';
    const INVALID_INPUT_ERROR = '[ERROR] 숫자가 잘못된 형식입니다.';
    const getRandomNumber = this.getRandomNumber();
    let count = { ball: 0 , strike: 0};

    MissionUtils.Console.print(START_GAME_MESSAGE);

    while (count.strike < 3) {
      const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);
      if (this.isInvalidInput(input)) {
        throw new Error(INVALID_INPUT_ERROR);
      }
      count = this.getStrikeAndBallCount(input, getRandomNumber);
      MissionUtils.Console.print(this.getResultMessage(count.ball, count.strike));
    }

    MissionUtils.Console.print(END_GAME_MESSAGE);

    const endGame = await MissionUtils.Console.readLineAsync(RESTART_GAME_MESSAGE);

    if (endGame == 1) {
      this.play();
    }
  }

  getResultMessage(ballCount, strikeCount) {
    const NOTHING = '낫싱';
    const BALL = '볼';
    const STRIKE = '스트라이크';

    if (strikeCount === 0 && ballCount === 0) {
      return NOTHING;
    } else {
      let message = '';
    
      if (ballCount > 0) {
        message += `${ballCount}${BALL}`;
      }
    
      if (strikeCount > 0) {
        if (message) {
          message += ` ${strikeCount}${STRIKE}`;
        } else {
          message += `${strikeCount}${STRIKE}`;
        }
      }
    
      return message;
    }
  }

  isInvalidInput(val) {
    return typeof val !== 'number' && val.length > 3;
  }

  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return Number(computer.join(''));
  }

  getStrikeAndBallCount(input, randomNumber, ball = 0, strike = 0) {
    const inputArray = input.toString().split('');
    const randomNumberArray = randomNumber.toString().split('');

    inputArray.forEach((element, idx) => {
      if (inputArray[idx] == randomNumberArray[idx]) {
        strike += 1;
      }else if (randomNumberArray.find((v) => v == element) && randomNumberArray.indexOf(element) != idx) {
        ball += 1;
      }      
    });

    return {ball ,strike};
  }

}

export default App;