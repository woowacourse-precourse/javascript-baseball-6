class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    // 컴퓨터 숫자 랜덤 지정
    const COMPUTER = [];

    while (COMPUTER.length < 3) {
      const NUMBER = Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }

    const NUMBER = await Console.readLineAsync("숫자를 입력해주세요 : ");

    // 사용자 입력 숫자의 길이 확인
    if (NUMBER.length !== 3) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    const USER = NUMBER.split("").map(Number);

    // 사용자 입력 숫자 중 중복된 값 확인
    for (let i = 0; i < USER.length; i++) {
      for (let j = i + 1; j < USER.length; j++) {
        if (USER[i] === USER[j]) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }
    }
  }
}

export default App;
