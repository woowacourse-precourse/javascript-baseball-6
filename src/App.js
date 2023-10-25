import { Console, Random } from "@woowacourse/mission-utils";

const RandomBallNumber = () => {
  const COMPUTER = [];
  while (COMPUTER.length < 3) {
    const NUMBER = Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(NUMBER)) {
      COMPUTER.push(NUMBER);
    }
  }
  return COMPUTER.join('');
}

const WRONG_NUMBER = (my_result) => {
  if (my_result.length !== 3) {
    throw new Error('\x1b[31m[ERROR] 3개만 입력해주세요\x1b[37m');
  }

  if (isNaN(my_result[0]) === true || isNaN(my_result[1]) === true || isNaN(my_result[2]) === true) {
    throw new Error('\x1b[31m[ERROR] 숫자만 입력해주세요\x1b[37m');
  }

  if (my_result[0] === my_result[1] || my_result[0] === my_result[2] || my_result[1] === my_result[2]) {
    throw new Error('\x1b[31m[ERROR] 서로 다른 숫자를 입력해주세요\x1b[37m');
  }
  if (my_result[0] == 0 || my_result[1] == 0 || my_result[2] == 0) {
    throw new Error('\x1b[31m[ERROR] 1 ~ 9까지의 숫자를 입력해주세요\x1b[37m');
  }
}

const WRONG_EXIT_CODE = (exit_code) => {
  if (exit_code.length != 1) {
    throw new Error('\x1b[31m[ERROR] 1개만 입력해주세요\x1b[37m');
  }
  if (isNaN(exit_code[0]) === true) {
    throw new Error('\x1b[31m[ERROR] 숫자만 입력해주세요\x1b[37m');
  }
  if (exit_code[0] != 1 && exit_code[0] != 2) {
    throw new Error('\x1b[31m[ERROR] 1과 2 둘 중 하나만 입력해주세요\x1b[37m');
  }
}

class App {
  async play() {

    Console.print('\x1b[37m숫자 야구 게임을 시작합니다.');
    while (1) {
      const COMPUTER_NUMBER = RandomBallNumber();
      while (1) {
        const my_result = await Console.readLineAsync('숫자를 입력해주세요 : ');

        WRONG_NUMBER(my_result);

        let BallCnt = 0;
        let StrikeCnt = 0;

        for(let i = 0; i < 3; i++) {
          if (COMPUTER_NUMBER[i] === my_result[i]) {
            StrikeCnt++;
          }
          else if (COMPUTER_NUMBER.includes(my_result[i])) {
            BallCnt++;
          }
        }

        if (BallCnt > 0 && StrikeCnt > 0) {
          Console.print(`${BallCnt}볼 ${StrikeCnt}스트라이크`);
        }
        if (BallCnt > 0) {
          Console.print(`${BallCnt}볼`);
        }
        if (StrikeCnt > 0) {
          Console.print(`${StrikeCnt}스트라이크`);
        }
        if (BallCnt === 0 && StrikeCnt === 0) {
          Console.print(`낫싱`);
        }

        if (StrikeCnt === 3) {
          Console.print('3스트라이크');
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          break;
        }
      }
      Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      const exit_code = await Console.readLineAsync('');
      WRONG_EXIT_CODE(exit_code);
      if (exit_code[0] == 2) {
        Console.print('게임 종료');
        break;
      }
    }
  }
}

export default App;
