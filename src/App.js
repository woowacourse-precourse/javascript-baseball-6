import { MissionUtils } from '@woowacourse/mission-utils';
class App {
  async play() {
    // 1. 게임 시작 문구를 출력한다.
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    // 2. 컴퓨터는 서로 다른 임의의 수 3개를 선택한다.
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    const baseball = { ball: 0, strike: 0 };
    do {
      // 3. 숫자를 입력한다.
      let user = await MissionUtils.Console.readLineAsync(
        '숫자를 입력해주세요 : '
      );

      user = user.toString();
      const LEN = user.length;

      // 4. `1 ~ 9 사이의 서로 다른 3자리의 수` 가 입력되었는지 검증한다.
      if (
        LEN !== 3 ||
        user !== user.replace(/[^1-9]/g, '') ||
        LEN !== [...new Set(user)].join('').length
      )
        throw new Error('[ERROR]');

      // 5. 같은 수가 같은 자리에 있으면 `n스트라이크`, 다른 자리에 있으면 `n볼`을 출력한다. (n : 숫자)
      for (let i = 0; i < LEN; i++) {
        if (computer[i] === Number(user[i])) {
          baseball['strike']++;
        }
        for (let j = 0; j < LEN; j++)
          if (i !== j && computer[i] === Number(user[j])) baseball['ball']++;
      }

      const [ball, strike] = [baseball['ball'], baseball['strike']];

      if (strike >= 3) {
        // 6. 3개의 숫자를 모두 맞힐 경우 재시작(1) 또는 게임 종료(2)를 입력받는다.
        MissionUtils.Console.print('3스트라이크');
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        user = await MissionUtils.Console.readLineAsync(
          '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
        );
        if (user === '1') this.play();
        else if (user === '2') return;
        else throw new Error('[ERROR]');
      }
      // 7. 같은 수가 전혀 없으면 `낫싱`을 출력한다.
      else if (ball === 0 && strike === 0) {
        MissionUtils.Console.print('낫싱');
      }

      // 8. `ball`과 `strike`가 동시에 존재하는 경우에는 `ball`을 먼저 작성한다.
      else if (strike > 0) {
        if (ball > 0) {
          MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
        } else {
          MissionUtils.Console.print(`${strike}스트라이크`);
        }
      } else {
        MissionUtils.Console.print(`${ball}볼`);
      }
    } while (baseball['strike'] < 3);
  }
}

export default App;
