import { MissionUtils} from '@woowacourse/mission-utils';

const {
  NUMBER_LENGTH,
  SCORES,
  MESSAGES,
  ERRORS,
  OPTIONS,
} = require("./constants.js");

class App {
  async play() {
    this.startGame();
    this.playGame();
  }

  startGame() {
    const START = "숫자 야구 게임을 시작합니다.";
    MissionUtils.Console.print(MESSAGES.START);
    }

  playGame() {
    const computer = this.selectComputer();
    this.solveNumber(computer);
  }

  selectComputer() {
    const computer = [];

    while (computer.length < NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer.join('');
  }

  solveNumber(computer) {
    MissionUtils.Console.readLine(MESSAGES.INPUT_NUMBER, (num) => {
      this.isUserError(num, computer);
    });
  }

  isUserError(user, computer) {
    this.checkOverlap(user);
    this.checkLength(user);
    this.checkNumber(user);
    this.checkRange(user);

    this.countScore(computer, user);
  }

  checkOverlap(number) {
    const numberList = number.split("").sort();
    const validNumber = [...new Set(numberList)];

    if (validNumber.length < 3) {
      throw ERRORS.OVERLAP;
    }
  }

  checkLength(number) {
    if (number.length !== NUMBER_LENGTH) {
      throw ERRORS.LENGTH;
    }
  }

  checkNumber(number) {
    if (isNaN(number)) {      
      throw ERRORS.TYPE;
    }
  }

  checkRange(number) {
    if (number.includes("0")) {
      throw ERRORS.RANGE;
    }
  }

  countScore(computer, user) {
    const score = this.calculateScore(computer, user);
    const result = this.printScore(score, computer);
    return this.isAnswer(result, computer);
  }

  calculateScore(computer, user) {
    let ball = 0;
    let strike = 0;

    const intersection = [...computer].filter((number) =>
      [...user].includes(number)
    );

    intersection.forEach((number) => {
      ball++;

      if (computer.indexOf(number) === user.indexOf(number)) {
        ball--;
        strike++;
      }
    });
    return [
      {
        name: SCORES.BALL,
        score: ball,
      },
      {
        name: SCORES.STRIKE,
        score: strike,
      },
    ];  }

    printScore(scoreList) {
    let newScoreList = scoreList.filter((item) => {
      return item.score >= 1;
    });

    let result = newScoreList.map((item) => {
      return `${item.score}${item.name}`;
    });

    result = result.join(" ");

    if (result.length === 0) {
      result = SCORES.NOTHING;
    }
    MissionUtils.Console.print(result);
    return result;
  }

  isAnswer(answer, computer) {
    if (answer.includes(`${NUMBER_LENGTH}${SCORES.STRIKE}`)) {
      MissionUtils.Console.print(MESSAGES.SUCCESS); 
      return this.selectOption();
    }
    this.solveNumber(computer);
  }

  selectOption() {
    MissionUtils.Console.readLine(MESSAGES.INPUT_OPTION, (num) => {
      this.isOptionError(num);
    });
  }

  isOptionError(option) {
    const RESTART = OPTIONS.RESTART;
    const END = OPTIONS.END;

    if (option !== RESTART && option !== END) {
      throw ERRORS.OPTION;
    }
    if (option === RESTART) {
      return this.playGame();
    }
    if (option === END) {
      MissionUtils.Console.print(MESSAGES.END);
    }
  }
}
export default App;
