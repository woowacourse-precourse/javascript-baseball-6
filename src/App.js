class App {
  constructor() {
    this.catcherNumbers = this.getCatcherNumbers();
    this.pitcherNumbers = [];
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    while (true) {
      const pitcherNumbers = await this.getPitcherNumbers();
      const judgmentResult = this.getResultOfJudgment(pitcherNumbers);

      if (judgmentResult === '3스트라이크') {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        if (await this.decideToContinueGame()) {
          this.catcherNumbers = this.getCatcherNumbers();
        } else {
          return;
        }
      }
    }
  }

  getCatcherNumbers() {
    const catcherNumbers = [];
    while (catcherNumbers < 3) {
      const catcherNumber = Random.pickNumberInRange(1, 9);
      if (!catcherNumbers.includes(catcherNumber)) {
        catcherNumbers.push(catcherNumber);
      }
    }
    return catcherNumbers;
  }

  async getPitcherNumbers() {
    const throwBalls = await Console.readLineAsync('숫자를 입력해주세요: ');
    if (throwBalls.length !== 3) throw new Error('[ERROR] 서로 다른 3개의 숫자를 입력해야합니다.');
    if (!/^[1-9]{3}$/.test(throwBalls))
      throw new Error('[ERROR] 0을 제외한 서로 다른 3개의 숫자를 입력해야합니다.');

    const ballsToNumbers = throwBalls.split('').map(Number);

    if (new Set(ballsToNumbers).size !== 3) {
      throw new Error('[ERROR] 서로 다른 3개의 숫자를 입력해야합니다.');
    }

    return ballsToNumbers;
  }

  getResultOfJudgment(inputPitcherNumbers) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (inputPitcherNumbers[i] === this.catcherNumbers[i]) {
        strike += 1;
      }
      if (this.pitcherNumbers.includes(inputPitcherNumbers[i])) {
        ball += 1;
      }
    }
    let result = '';

    if (ball > 0) {
      result = `${ball}볼 `;
    }

    if (strike > 0) {
      result += `${strike}스트라이크`;
    }

    if (result === '') {
      result = '낫싱';
    }

    Console.print(result);
    return result;
  }
}

export default App;

