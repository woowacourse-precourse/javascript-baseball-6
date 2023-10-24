const { MissionUtils } = require('@woowacourse/mission-utils');

function inputErrorHandle() {
  throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
}

function isValidNumber(str) {
  if (str.length !== 3) return false;
  if (!isNaN(Number(str))) return false;

  let set = new Set(str);
  if (set.size !== 3) return false;
  return true;
}

async function getPlayerNumber() {
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
    const playerPromise = getPlayerNumber();
    const playerNumber = await playerPromise;
  }
}

const app = new App();
app.play();

export default App;
