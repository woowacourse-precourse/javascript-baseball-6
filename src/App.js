import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    let MATCH = true;

    while (MATCH) {
      let COMPUTER = '';
      let PLAYER = '';

      while (COMPUTER.length < 3) {
        const number = Random.pickNumberInRange(1, 9);
        if (!COMPUTER.includes(number)) {
          COMPUTER += number;
        }
      }

      while (COMPUTER !== PLAYER) {
        PLAYER = await Console.readLineAsync('숫자를 입력해주세요 : ');

        if (/[^0-9]/.test(PLAYER)) {
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }

        if (PLAYER.length !== 3) {
          throw new Error('[ERROR] 숫자가 3자리가 아닙니다.');
        }

        if (/(\d).*\1/.test(PLAYER)) {
          throw new Error('[ERROR] 숫자가 중복되었습니다.');
        }

        let BALL = 0;
        let STRIKE = 0;
        let HINT = '';

        for (let i = 0; i < PLAYER.length; i++) {
          if (COMPUTER[i] === PLAYER[i]) {
            STRIKE++;
          } else if (COMPUTER.includes(PLAYER[i])) {
            BALL++;
          }
        }

        if (BALL === 0 && STRIKE === 0) {
          HINT = '낫싱';
        } else {
          HINT = `${BALL === 0 ? '' : BALL + '볼 '}${
            STRIKE === 0 ? '' : STRIKE + '스트라이크'
          }`;
        }

        Console.print(HINT);

        if (COMPUTER === PLAYER) {
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

          const RETRY = await Console.readLineAsync(
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
          );
          if (RETRY === '1') {
            MATCH = true;
          } else if (RETRY === '2') {
            MATCH = false;
          } else {
            throw new Error('[ERROR] "1" 또는 "2"만 입력 가능합니다.');
          }
        }
      }
    }
  }
}

export default App;
