import { MissionUtils } from '@woowacourse/mission-utils';

export default class BaseballGame {
  constructor() {
    this.computerNumbers = [];
    this.isGameRunning = true;
  }

  initializeGame() {
    while (this.computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }

  printResult(result) {
    MissionUtils.Console.print(result);
  }

  async init() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    while (this.isGameRunning) {
      this.computerNumbers = [];
      this.initializeGame();
      let attemptCount = 0;

      while (true) {
        const userGuess = await MissionUtils.Console.readLineAsync(`서로 다른 3자리의 수를 입력하세요: `);

        if (!this.isValidInput(userGuess)) {
          MissionUtils.Console.print(`올바른 입력이 아닙니다. 1부터 9까지 서로 다른 3자리 수를 입력하세요.`);
          continue;
        }

        const result = this.checkGuess(userGuess);
        this.printResult(result);

        if (result === '3스트라이크') {
          MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          break;
        }

        attemptCount++;
      }

      await this.askForRestart();
    }
  }

  async askForRestart() {
    const response = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ');
    if (response === '2') {
      this.isGameRunning = false;
    }
  }

  isValidInput(input) {
    if (!/^\d{3}$/.test(input) || new Set(input).size !== 3) {
      throw new Error('[ERROR] 올바른 입력값을 입력해주세요');
    }
    return true;
  }

  checkGuess(userGuess) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (userGuess[i] == this.computerNumbers[i]) {
        strike++;
      } else if (this.computerNumbers.includes(Number(userGuess[i]))){
        ball++;
      }
    }

    if (strike === 0 && ball === 0) { 
        return '낫싱'; 
    } 
    else if (strike === 3) { 
        return '3스트라이크'; 
    } 
    else { 
        return `${ball}볼 ${strike}스트라이크`; 
    }
  }
}
