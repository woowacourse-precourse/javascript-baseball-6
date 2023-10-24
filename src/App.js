const { Console, Random } = require('@woowacourse/mission-utils');

function isValid(playerInput) {
  if (playerInput.length !== 3)
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  if (isNaN(Number(playerInput)))
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');

  let set = new Set(playerInput);
  if (set.size !== 3) throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
}

function makeComputerNumber() {
  let computer = '';
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer += number;
    }
  }
  return computer;
}

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computerNumber = makeComputerNumber();
    await this.startGame(computerNumber);
  }

  async startGame(computer) {
    const user = await this.getPlayerNumber();
  }

  async getPlayerNumber() {
    const playerNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
    isValid(playerNumber);
    return playerNumber;
  }
}

export default App;
