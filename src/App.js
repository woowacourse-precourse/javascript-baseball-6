import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    // 랜덤 값 생성하기
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    let flag = 1;
    // 시작 문구 출력
    Console.print('숫자 야구 게임을 시작합니다.');

    while (flag) {
      // 사용자 입력
      const userRandom = await Console.readLineAsync('숫자를 입력해주세요 : ');

      if (!Number(userRandom)) {
        throw new Error('[ERROR] 숫자만 입력해주세요!'); // 숫자는 맞는가?
      } else if (userRandom.length !== 3) {
        throw new Error('[ERROR] 3자리 숫자를 입력해주세요!'); // 3자리인가?
      } else if (userRandom.includes('0')) {
        throw new Error('[ERROR] 각 자릿수는 1부터 9 사이 숫자여야 합니다!'); // 0이 포함된 수인가?
      } else if (userRandom.length !== new Set(userRandom.split('')).size) {
        throw new Error(
          '[ERROR] 3자리 숫자는 서로 다른 수로 이루어져야 합니다!'
        ); // 중복 수는 없는가?
      }

      // 계산
      let strike = 0;
      let ball = 0;

      userRandom.split('').map((number, index) => {
        if (computer[index] === Number(number)) strike++;
        else if (computer.includes(Number(number))) ball++;
      });

      if (strike === 0 && ball === 0) {
        Console.print('낫싱');
      } else {
        Console.print(
          `${ball ? `${ball}볼 ` : ''}${strike ? `${strike}스트라이크` : ''}`
        );
        if (strike === 3) {
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          const restart = await Console.readLineAsync(
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
          );

          if (restart !== '1' && restart !== '2') {
            throw new Error(
              '[ERROR] 1 또는 2 외의 값을 입력하여, 게임을 종료합니다!'
            ); // 1이나 2 중 하나로 입력했는가?
          } else if (restart === '2') {
            flag = 0;
          } else {
            // 새로운 랜덤 값 생성
            while (computer.length > 0) {
              computer.pop();
            }
            while (computer.length < 3) {
              const number = MissionUtils.Random.pickNumberInRange(1, 9);
              if (!computer.includes(number)) {
                computer.push(number);
              }
            }
          }
        }
      }
    }

    return;
  }
}

export default App;
