import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  computerGenerateNum() {
    const computer = [];
    while (computer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    return computer;
  }

  inputVerify(v) {
    if (
      v.length !== 3
      || typeof (Number(v)) !== 'number'
      || v.includes('0')
    ) {
      return false;
    }
    return true;
  }

  playerInput() {
    const question = MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    question.then((value) => {
      if (!this.inputVerify(value)) {
        MissionUtils.Console.print('[ERROR] 0을 제외한 1~9사이 겹치지 않는 3자리 숫자를 입력해주세요.');
        return this.playerInput();
      }
      return value;
    });
    question.catch(() => {
      MissionUtils.Console.print('[ERROR] 인자는 한 개로, String 자료형으로 입력되어야 합니다.');
      return this.playerInput();
    });
  }

  numberCompare(comnum, playernum) {
    let ball = 0;
    let strike = 0;
    const judgeCall = comnum.map((v, i) => {
      if (v === playernum[i]) {
        strike += 1;
        return 'strike';
      }
      if (playernum.includes(v)) {
        ball += 1;
        return 'ball';
      }
      return 'nothing';
    });
    return [strike, ball];
  }



  userPlay(computnum) {
    const playersnum = this.playerInput();
    const count = this.numberCompare(computnum, playersnum);
    if (count[0] === 3) {
      return false;
    }
    if (count[0] !== 0 && count[1] === 0) {
      MissionUtils.Console.print(`${count[0]} + 스트라이크`);
    } else if (count[0] === 0 && count[1] !== 0) {
      MissionUtils.Console.print(`${count[1]} + 볼`);
    } else if (count[0] !== 0 && count[1] !== 0) {
      MissionUtils.Console.print(`${count[0]} + 스트라이크 ${count[1]} + 볼`);
    } else {
      MissionUtils.Console.print('낫싱');
    }
    return true;
  }

  askReGame() {
    const question = MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    question.then((value) => {
      if (!this.inputVerify(value)) {
        MissionUtils.Console.print('[ERROR] 1 혹은 2를 입력해주세요.');
        return this.playerInput();
      }
      return value;
    });
    question.catch(() => {
      MissionUtils.Console.print('[ERROR] 1 혹은 2를 입력해주세요.');
      return this.playerInput();
    });
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const computernum = this.computerGenerateNum();
    let keepgo = true;
    while (keepgo) {
      keepgo = this.userPlay(computernum);
    }
    MissionUtils.Console.print('3스트라이크');
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const replay = this.askReGame();
    if (replay !== '1') {
      return this.play();
    }
    return 0;
  }
}

const app = new App();
app.play();

export default App;
