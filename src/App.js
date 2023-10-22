import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    // 여기서 부터 시작
    Console.print('숫자 야구 게임을 시작합니다.');
    let userGuess = await this.getUserInput();
    console.log(userGuess);
    const computerAnswer = this.createComputerAnswer();
    console.log(computerAnswer);
  }

  // 사용자 입력을 받는 getUserInput
  async getUserInput() {
    try {
      const answer = await new Promise((resolve) => {
        Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
          resolve(userInput);
        });
      });

      const userInput = answer.split('');

      if (
        userInput.length !== 3 ||
        userInput.some((char) => isNaN(parseInt(char, 10)))
      ) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }

      return userInput.map((char) => parseInt(char, 10));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // 랜덤한 컴퓨터 정답을 생성하는 함수
  createComputerAnswer = () => Random.pickUniqueNumbersInRange(1, 9, 3);

  // 낫싱을 확인하는 함수
  isNothing = (userGuess, computerAnswer) => {
    return userGuess.filter((x) => computerAnswer.includes(x)).length === 0
      ? true
      : false;
  };
}

export default App;
