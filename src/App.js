const { MissionUtils } = require('@woowacourse/mission-utils');

async function getPlayerNumbers() {
  // try {
  const playerNumber = await MissionUtils.Console.readLineAsync(
    '숫자를 입력해주세요 : '
  );
  if (!isValidNumber(playerNumber)) {
    inputErrorHandle();
  }
  // return playerNumber.split("").map(Number);
  return playerNumber;
  // }
  // catch (error) {
  // throw error;
  // }
}

class App {
  async play() {
    // 게임 시작 문구 출력
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const playerPromise = getPlayerNumbers();
    const playerNumbers = await playerPromise;
  }
}

const app = new App();
app.play();

export default App;
