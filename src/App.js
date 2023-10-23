const { Console, Random } = require('@woowacourse/mission-utils');
class App {

  generateSecretNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    const secretNumber =  computer.join('');
    // console.log(secretNumber);
    return secretNumber;
  }


  startGame() {
    const secretNumber = this.generateSecretNumber();
    Console.readLineAsync('숫자를 입력해주세요 : ', (guess) => {
      this.restartOrExit(secretNumber,guess);
    });
  }

  
  isValidGuess(guess) {
    if (!/^[1-9]{3}$/.test(guess)) {
      throw new Error('숫자가 잘못된 형식입니다.');
    }
    if (guess[0] === guess[1] || guess[1] === guess[2] || guess[2] === guess[0]) {
      throw new Error('숫자가 잘못된 형식입니다.');
    }
  };

  restartOrExit(secretNumber, guess) {
    this.isValidGuess(guess);
    Console.print(this.compareNumber(secretNumber,guess));
    if (secretNumber === guess) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (choice) => {
        if (choice === '1') {
          return this.startGame();
      } else if (choice === '2') {
          Console.print('게임 종료');
          return;
      } else {
        throw new Error('1 혹은 2가 아닌 값을 입력하였습니다');
      }
      });
    }else if(secretNumber !== guess){
      Console.readLineAsync('숫자를 입력해주세요 : ', (guess) => {
        this.restartOrExit(secretNumber,guess);
      });
    }
  }

  compareNumber(secretNumber, guess){
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (secretNumber[i] !== guess[j]){
          continue;
        }

        if (i === j){
          strikes++;
        } else{
          balls++;
        }
      }
    }
    if (balls && strikes) {
      return `${balls}볼 ${strikes}스트라이크`;
    } else if(balls) {
      return `${balls}볼`;
    } else if(strikes) {
      return `${strikes}스트라이크`;
    }else {
      return '낫싱';
    }

  }

  play() {
    Console.print('숫자야구 게임을 시작합니다.');
    this.startGame();
  }

  
}

// const app = new App();
// app.play();


export default App;