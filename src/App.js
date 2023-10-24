import { Random, Console } from '@woowacourse/mission-utils'

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computerNumbers = [];
    let playerAns = [];
    while(computerNumbers.length < 3){
      const randomNumber = Random.pickNumberInRange(1, 9);
      if(!computerNumbers.includes(randomNumber)){
        computerNumbers.push(randomNumber);
      }
    }
    Console.print(computerNumbers);
    playerAns = await Console.readLineAsync('숫자를 입력해주세요 : ');
    this.inputValidator(playerAns);
    Console.print(playerAns);
  }

  inputValidator(input) {
    const regex = new RegExp(/^([1-9])(?!.*\1)([1-9])(?!.*\1|\2)([1-9])$/);
    if(!regex.test(input)){
      throw new Error('[ERROR] 서로 다른 3개의 숫자를 입력해주세요.');
    }
    return input;
  }
}

const app = new App();
app.play();

export default App;
