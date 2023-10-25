class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  generateRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  takeUserGuess() {
    const inputString = MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    const input = inputString.trim().split('').map(Number);

    if (input.length !== 3 || input.includes(NaN)) {
      throw MissionUtils.Console.print('3자리 숫자만 입력 가능합니다.');
    }

    return input;
  }
}

export default App;
