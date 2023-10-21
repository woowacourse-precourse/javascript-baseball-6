function finishGame() {
  Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  this.checkResetGame();
}

// 6-2. 게임 초기화 / 종료 선택
async function checkResetGame() {
  Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  const isGameRestart = await Console.readLineAsync('');
  if (isGameRestart === '1') return this.play();
  else if (isGameRestart !== '2') return this.checkResetGame();
}

export { finishGame, checkResetGame };
