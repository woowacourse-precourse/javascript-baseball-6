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
}

export default App;

