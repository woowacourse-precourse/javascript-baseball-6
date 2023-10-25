const MissionUtils = require('@woowacourse/mission-utils');

const NUM_LENGTH = 3;

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let playGame = true;
    while(playGame) {
      const computerNum = this.computerPickNum();
      await this.startGame(computerNum);
      playGame = await this.endGame();
    }
  }

  //(1)컴퓨터 랜덤 숫자 선택
  computerPickNum() {
    const computer = [];
    while (computer.length < NUM_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number))
        computer.push(number);
    }
    return computer;
  }

  //(2)플레이어 숫자 입력
  async startGame(computerNum) {
    while(true) {
      const input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
      const userNum = input.split('').map(Number);

      this.checkInput(input);

      let strike = this.countStrike(computerNum, userNum);
      let ball = this.countBall(computerNum, userNum);

      const result = this.printResult(ball, strike);
      MissionUtils.Console.print(result);

      if (result === '3스트라이크') {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        break;
      }
    }

  }

  async checkInput(input) {
    const userInput = new Set(input.split('').map(Number));

    if (input.length !== NUM_LENGTH)
      throw Error('[ERROR] 숫자가 잘못된 형식입니다. 3개의 숫자만 입력 가능합니다.');
    if ([...userInput].length !== NUM_LENGTH)
      throw Error('[ERROR] 숫자가 잘못된 형식입니다. 중복되지 않는 숫자만 입력 가능합니다.');
    if (Number.isNaN(input) || input.includes(' '))
      throw Error('[ERROR] 숫자가 잘못된 형식입니다. 숫자만 입력 가능합니다.');
  }

  //(3)결과 출력
  countStrike(computerNum, userNum) {
    let strike = 0;

    for (let i = 0; i < NUM_LENGTH; i++)
      if (computerNum[i] === Number(userNum[i]))
        strike += 1;

    return strike;
  }

  countBall(computerNum, userNum) {
    let ball = 0;

    for (let i = 0; i < NUM_LENGTH; i++)
      if (computerNum[i] !== Number(userNum[i]) && computerNum.includes(Number(userNum[i])))
        ball += 1;

    return ball;
  }

  printResult(ball, strike) {
    if (ball !== 0 && strike === 0)
      return `${ball}볼`;
    if (ball !== 0 && strike !== 0)
      return `${ball}볼 ${strike}스트라이크`;
    if (ball === 0 && strike !== 0)
      return `${strike}스트라이크`;
    return '낫싱';
  }

  //(4)게임 결과
  async endGame() {
    const askReplay = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');

    if(askReplay === '1')
      return true;
    else if(askReplay === '2')
      return false;
    else
      throw new Error('[ERROR] 잘못된 형식입니다. 1 또는 2만 입력 가능합니다.');
  }

}
export default App;