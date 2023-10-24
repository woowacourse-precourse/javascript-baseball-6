const { Console, Random } = require('@woowacourse/mission-utils');

function printHint({ ball, strike }) {
  if (ball === 0 && strike === 0) Console.print(`낫싱`);
  if (ball > 0 && strike > 0) Console.print(`${ball}볼 ${strike}스트라이크`);
  if (ball > 0 && strike === 0) Console.print(`${ball}볼`);
  if (ball === 0 && strike > 0) Console.print(`${strike}스트라이크`);
}

function calculateResult(computerNumber, playerNumber) {
  const result = { strike: 0, ball: 0 };

  playerNumber.split('').forEach((n, idx) => {
    if (computerNumber.indexOf(n) === idx) result.strike++;
    else if (computerNumber.split('').includes(n)) result.ball++;
  });

  return result;
}

function isValid(playerInput) {
  if (playerInput.length !== 3) return false;
  if (isNaN(Number(playerInput))) return false;

  let set = new Set(playerInput);
  if (set.size !== 3) return false;

  return true;
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
    const player = await this.getPlayerNumber();
    const result = calculateResult(computer, player);
    printHint(result);
  }

  async getPlayerNumber() {
    const playerNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
    if (!isValid(playerNumber)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    return playerNumber;
  }
}

export default App;
