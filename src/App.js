#!/usr/bin/env node
const { Random, Console } = import('@woowacourse/mission-utils');

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    while (true) {
      const computer = this.generateRandomNumber();
      Console.print('서로 다른 3자리의 숫자를 입력해주세요: ');
      const userGuess = Console.readLineAsync();

      if (userGuess.length !== 3 || !this.isUnique(userGuess)) {
        Console.print('올바른 3자리 숫자를 입력해주세요.');
        continue;
      }

      const result = this.calculateResult(computer, userGuess);
      Console.print(result);

      if (result === '3스트라이크') {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        const restart = this.askForRestart();
        if (restart !== '1') {
          Console.print('게임을 종료합니다.');
          break;
        }
      }
    }
  }

  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  isUnique(guess) {
    return new Set(guess).size === 3;
  }

  calculateResult(computer, userGuess) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (computer[i] === userGuess[i]) {
        strike++;
      } else if (computer.includes(userGuess[i])) {
        ball++;
      }
    }

    if (strike === 3) {
      return '3스트라이크';
    } else {
      const strikeText = strike > 0 ? `${strike}스트라이크` : '';
      const ballText = ball > 0 ? `${ball}볼` : '';
      const nothingText = strike === 0 && ball === 0 ? '낫싱' : '';
      return `${strikeText} ${ballText} ${nothingText}`;
    }
  }

  askForRestart() {
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    return Console.readLineAsync();
  }
}

const app = new App();
app.play();
