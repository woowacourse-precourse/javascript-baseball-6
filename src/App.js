import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.randomNumbers = null;
    this.initMessage = false;
  }

  async play() {
    if (!this.initMessage) {
      Console.print("숫자 야구 게임을 시작합니다.");
      this.initMessage = true;
    }

    this.randomNumbers = this.generateRandomNumber();
    await this.playGameCycle();
  }

  generateRandomNumber() {
    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }
    return randomNumbers;
  }

  async playGameCycle() {
    const userNumbers = await this.promptUserInput();
    const validatedUserNumbers = this.validateInputNumber(userNumbers) && userNumbers;
    const roundResult = this.compareRandomToUser(this.randomNumbers, validatedUserNumbers);
    const isCorrect = this.showRoundResultMessage(roundResult);

    isCorrect ? await this.handleGameContinuation() : await this.playGameCycle();
  }
  async promptUserInput() {
    return await Console.readLineAsync('숫자를 입력해주세요 : ');
  }

  validateInputNumber(userNumbers) {
    const threeDigitNumRegex = /^[1-9]{3}$/;
    const userNumberArray = userNumbers.split('').map((num) => parseInt(num));
    const isDuplicate = new Set(userNumberArray).size !== userNumberArray.length;

    if (!threeDigitNumRegex.test(userNumbers) || isDuplicate) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    return true;
  }

  compareRandomToUser(randomNumbers, userNumbers) {
    let strikes = 0;
    let balls = 0;

    const userNumberArray = userNumbers.split('').map((num) => parseInt(num));
   
    for (let i = 0; i < randomNumbers.length; i++) {
      if (randomNumbers[i] === userNumberArray[i]) strikes++;
      else if (userNumberArray.includes(randomNumbers[i])) balls++;
    }

    return { strikes, balls };
  }

  showRoundResultMessage(status) {
    const { strikes, balls } = status;
    let resultMessage = '';

    if (strikes === 3 && balls === 0) {
      Console.print('3스트라이크');
      return true;
    }

    if (balls > 0) {
      resultMessage += `${balls}볼`;
    }

    if (strikes > 0) {
      resultMessage += (resultMessage ? ' ' : '') + `${strikes}스트라이크`;
    }

    resultMessage = resultMessage || '낫싱';

    Console.print(resultMessage);

    return false;
  }

  async promptContinueOrQuit() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    return await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
  }

  async handleGameContinuation() {
    const isReplay = await this.promptContinueOrQuit();

    switch (isReplay) {
      case '1': {
        await this.play();
        break;
      }
      case '2': {
        Console.print('게임 종료');
        break;
      }
      default: {
        throw new Error('[ERROR] 올바른 선택을 입력하세요. 1 또는 2를 입력해주세요.');
      }
    }
  }
}

export default App;
