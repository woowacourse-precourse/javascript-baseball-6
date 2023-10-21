import { MissionUtils} from '@woowacourse/mission-utils';
class App {
  async play() {
    this.startGame();
    const computer = this.selectComputer();
    const user = this.selectUser();
    this.countScore(computer, user);
  }

  startGame() {
    const START = "숫자 야구 게임을 시작합니다.";
    console.log(START);
  }

  selectComputer() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer.join('');
  }

  selectUser() {
    let user;

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (num) => {
      user = num;
    });
    return user;
  }

  countScore(computer, user) {
    this.isError(user);
    const score = this.calculateScore(computer, user);
    this.printScore(score);
  }

  isError(number) {
    if (number.length !== 3 || isNaN(number)) {
      throw 'Parameter is not a number!';
    }
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
    return [ball, strike];
  }

  printScore(score) {
    const scoreList = [
      { name: "볼", score: score[0] },
      { name: "스트라이크", score: score[1] },
    ];

    let newScoreList = scoreList.filter((item) => {
      return item.score >= 1;
    });

    let result = newScoreList.map((item) => {
      return `${item.score}${item.name}`;
    });

    result = result.join(" ");

    if (result.length === 0) {
      result = "낫싱";
    }
    MissionUtils.Console.print(result);
  }
}
export default App;
