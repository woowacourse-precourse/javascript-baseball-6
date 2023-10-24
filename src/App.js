import { Random, Console } from '@woowacourse/mission-utils'

class App {
  #computerNumbers = [];
  #playerAns;
  #endGame = false;

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    
    this.#computerNumbers = await this.generateComputerNumbers();
    Console.print(this.#computerNumbers);

    while(!this.#endGame){
      this.#playerAns = await Console.readLineAsync('숫자를 입력해주세요 : ');
  
      this.inputValidator(this.#playerAns);
      Console.print(this.#playerAns);
      this.#playerAns = this.#playerAns.split('').map(Number);
      
      const ballCounts = this.checkBallCount();
      Console.print(ballCounts);
  
      const ballCountMessage = this.ballCountMessage(ballCounts);
      Console.print(ballCountMessage);
      
      if(ballCounts[0] === 3) {
        await this.playAgain();
      }
    }
  }

  async generateComputerNumbers() {
    const randomNumbers = [];
    while(randomNumbers.length < 3){
      const num = Random.pickNumberInRange(1, 9);
      if(!randomNumbers.includes(num)){
        randomNumbers.push(num);
      }
    }
    return randomNumbers;
  }

  // 사용자 입력 유효성 검사
  inputValidator(input) {
    const regex = new RegExp(/^([1-9])(?!.*\1)([1-9])(?!.*\1|\2)([1-9])$/);
    if(!regex.test(input)){
      throw new Error('[ERROR] 서로 다른 3개의 숫자를 입력해주세요.');
    }
    return input;
  }

  // 볼, 스트라이크, 아웃 판단
  checkBallCount() {
    // [스트라이크, 볼, 아웃]
    let ballCounts = [0, 0, 0];
    this.#playerAns.map((value, index) => {
      if(this.#computerNumbers.indexOf(value) === index){
        ballCounts[0] += 1;
      } else if(this.#computerNumbers.includes(value)){
        ballCounts[1] += 1;
      } else {
        ballCounts[2] += 1;
      }
    })
    return ballCounts;
  } 

  ballCountMessage([strike, ball, out]) {
    let ballCountMessage = '';

    if(ball > 0) ballCountMessage += `${ball}볼 `;
    if(strike > 0) ballCountMessage += `${strike}스트라이크`;
    if(out === 3) ballCountMessage += `낫싱`;
    
    return ballCountMessage;
  }

  async playAgain() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const playerInput = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    if(playerInput === '1') {
      this.#endGame = false;
      this.#computerNumbers = [];
      while(this.#computerNumbers.length < 3){
        const randomNumber = Random.pickNumberInRange(1, 9);
        if(!this.#computerNumbers.includes(randomNumber)){
          this.#computerNumbers.push(randomNumber);
        }
      }
      Console.print(this.#computerNumbers);
    } else {
      this.#endGame = true;
    }
  }
}

const app = new App();
app.play();

export default App;
