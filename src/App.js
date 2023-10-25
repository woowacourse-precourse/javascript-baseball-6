import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let choice = '1';
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    const com = [];
    while (com.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!com.includes(num)) {
        com.push(num);
      }
    }

    while (choice === '1') {
      let player;
      try {
        player = await MissionUtils.Console.readLineAsync('숫자를 입력해 주세요 : ');

        if (!/^[0-9]{3}$/.test(player)) {
          throw new Error('[ERROR] 숫자가 아닙니다.');
        }

        player = player.split('').map(Number);
        if (player.length !== 3 || new Set(player).size !== 3) {
          throw new Error('[ERROR] 입력한 숫자가 올바르지 않습니다.');
        }

        let sCnt = 0,
          bCnt = 0;
        for (let i = 0; i < 3; i++) {
          if (com[i] == player[i]) {
            sCnt++;
          } else if (com.includes(player[i])) {
            bCnt++;
          }
        }

        let result = '';
        if (bCnt > 0) result += bCnt + '볼 ';
        if (sCnt > 0) result += sCnt + '스트라이크';
        if (bCnt === 0 && sCnt === 0) result += '낫싱';

        MissionUtils.Console.print(result);

        if (sCnt === 3) {
          MissionUtils.Console.print(sCnt + '개의 숫자를 모두 맞히셨습니다! 게임 종료');
          MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
          choice = await MissionUtils.Console.readLineAsync();
        } else if (choice === '2') {
          break;
        }
      } catch (error) {
        throw error;
      }
    }
  }
}

export default App;