const gameStart = (async) => {
  // 0. 게임 시작 메세지 출력
  // 1. 컴퓨터의 랜덤 숫자
  const COMPUTER = [];

  MissionUtils.Console.print(Messages.START);
  while (COMPUTER.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(number)) {
      COMPUTER.push(number);
    }
  }

  const COMPUTER_NUMBER = COMPUTER.join("");
  MissionUtils.Console.print(COMPUTER_NUMBER);
};
