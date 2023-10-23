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

      // 사용자 입력 숫자 중 숫자 외 값 확인
      if (Number.isNaN(USER[i])) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }

    let ballCount = 0;
    let strikeCount = 0;

    // 상대방 입력 숫자와 사용자 입력 숫자 비교
    for (let i = 0; i < USER.length; i++) {
      for (let j = 0; j < COMPUTER.length; j++) {
        if (i === j && USER[i] === COMPUTER[j]) {
          strikeCount++;
        } else if (USER[i] === COMPUTER[j]) {
          ballCount++;
        }
      }
    }

    // 비교 결과 출력
    if (ballCount > 0 && strikeCount > 0) {
      Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    } else if (ballCount > 0) {
      Console.print(`${ballCount}볼`);
    } else if (strikeCount > 0 && strikeCount < 3) {
      Console.print(`${strikeCount}스트라이크`);
    } else if (ballCount === 0 && strikeCount === 0) {
      Console.print("낫싱");
    } else if (strikeCount === 3) {
      Console.print(`3스트라이크`);
      Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    }
  }
}

export default App;
