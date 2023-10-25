import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    // 게임 시작 문구 출력
    Console.print('숫자 야구 게임을 시작합니다.');
    
    const RANDOM_VALUE = this.getRandomNumber();
    let isSuccess =  false;

    // 3스트라이크 된 경우 isSuccess를 true로 변경하여 게임 종료
    while (!isSuccess) {
      try {
        isSuccess = await this.playOneInput(RANDOM_VALUE);
      } catch (e) {
        console.error(e);
        return;
      }
    }

    // 게임 종료 후 재시작, 완전 종료 확인
    this.startGameAgain();
  }

  async playOneInput(RANDOM_VALUE) {
    const RESULT = {
      strike: 0,
      ball: 0,
      nothing: 0
    };
    const INPUT_VALUE = await this.getInputNumber();
    const INPUT_VALUE_ARR = [...INPUT_VALUE];

    INPUT_VALUE_ARR.forEach((num, idx) => {
      if (num === RANDOM_VALUE[idx]) RESULT.strike++;
      else if (RANDOM_VALUE.includes(num)) RESULT.ball++;
      else if (!RANDOM_VALUE.includes(num)) RESULT.nothing++;
    })

    return this.printResult(RESULT);
  }

  // 정답으로 사용될 랜덤값 생성
  getRandomNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(number)) {
        COMPUTER.push(number);
      }
    }
    return `${COMPUTER[0]}${COMPUTER[1]}${COMPUTER[2]}`;
  }

  // 세자리 숫자 입력
  async getInputNumber() {
    const INPUT = await Console.readLineAsync('숫자를 입력해주세요 : ');
    this.checkInputNumber(INPUT);
    return INPUT;
  }

  // 게임 종료 후 재시작, 완전 종료 확인 
  async startGameAgain() {
    let input = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    this.checkInput(input);
    if (input === '1') this.play();
    return;
  }

  // 세자리 숫자 예외 처리 - 입력 값이 숫자가 아니거나, 중복을 제거한 길이가 3이 아니면 throw error
  checkInputNumber(input) {
    const SET_INPUT = [...new Set(input)];

    if (isNaN(parseInt(input)) || SET_INPUT.length !== 3) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
  }

  // 재시작, 완전 종료 예외 처리 - 입력 값이 '1'이나 '2'가 아니면 throw error
  checkInput(input) {
    if (input !== '1' && input !== '2') {
      throw new Error('[ERROR] 잘못된 형식입니다.');
    }
  }

  // 입력된 세자리 숫자 확인 결과 출력
  printResult(result) {
    if (result.strike === 3) {
      Console.print('3스트라이크');
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return true;
    }
    if (result.nothing === 3) {
      Console.print('낫싱');
      return false;
    }
    const BALL = result.ball !== 0 ? `${result.ball}볼 ` : '';
    const STRIKE = result.strike !== 0 ? `${result.strike}스트라이크 ` : '';
    Console.print(`${BALL}${STRIKE}`);
    return false;
  }
}

export default App;