class GameEngine {
  static inputToArray(input) {
    const playerNumber = input.toString().split('');
    if (playerNumber.length !== 3) {
      throw new Error('[ERROR] 3자리 값이 아닙니다.');
    }
    this.stringToNumber(playerNumber);
    this.playerNumberValidity(playerNumber);
    return playerNumber;
  }

  static stringToNumber(playerNumber) {
    playerNumber.map((x) => {
      const num = Number(x);
      if (Number.isNaN(num)) {
        throw new Error('[ERROR] 숫자가 아닙니다.');
      }
      return num;
    });
  }

  static playerNumberValidity(playerNumber) {
    playerNumber.forEach((x) => {
      if (x < 1 || x > 9) {
        throw new Error('[ERROR] 숫자는 1부터 9까지여야 합니다.');
      }
      if (playerNumber.filter((e) => e === x).length !== 1) {
        throw new Error('[ERROR] 중복값이 있습니다.');
      }
    });
  }
}

export default GameEngine;
