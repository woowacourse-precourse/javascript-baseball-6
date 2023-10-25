#!/usr/bin/env node
import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    while (true) {
      const computer = this.generateRandomNumber();
      Console.print('서로 다른 3자리의 숫자를 입력해주세요: ');
      const userGuess = Console.readLineAsync();

      if (!this.isUnique(userGuess)) {
        Console.print('서로 다른 3자리의 숫자를 입력해주세요.');
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
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      if (userGuess[i] === computer[i]) {
        strike++;
      } else if (computer.includes(userGuess[i])) {
        ball++;
      }
    }
    if (strike === 0 && ball === 0) {
      return '낫싱';
    }
    return (ball > 0 ? `${ball}볼 ` : '') + (strike > 0 ? `${strike}스트라이크` : '');
  }

  async askForRestart() {
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ');
    return await Console.readLineAsync();
  }
}

const app = new App();
app.play();