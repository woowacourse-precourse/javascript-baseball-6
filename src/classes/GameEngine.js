class GameEngine {
  // 입력값을 배열로 변경하는 함수
  static inputToArray(input) {
    const playerNumber = input.toString().split('');
    if (playerNumber.length !== 3) {
      throw new Error('[ERROR] 3자리 값이 아닙니다.');
    }
    this.stringToNumber(playerNumber);
    this.playerNumberValidity(playerNumber);
    return playerNumber;
  }

  // 문자배열을 숫자배열로 변경하는 함수
  static stringToNumber(playerNumber) {
    playerNumber.map((x) => {
      const num = Number(x);
      if (Number.isNaN(num)) {
        throw new Error('[ERROR] 숫자가 아닙니다.');
      }
      return num;
    });
  }

  // 플레이어 숫자가 유효한지 판별하는 함수
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

  // 플레이어 숫자의 점수를 반환하는 함수
  static countPlayerScore(computerNumber, playerNumber) {
    let ball = 0;
    let strike = 0;

    playerNumber.forEach((x, i) => {
      if (computerNumber[i] === x) {
        strike += 1;
      } else if (computerNumber.includes(x)) {
        ball += 1;
      }
    });

    if (ball === 0 && strike === 0) {
      return '낫싱';
    }
    let message = '';
    if (ball > 0) {
      message += `${ball}볼 `;
    }
    if (strike > 0) {
      message += `${strike}스트라이크`;
    }
    return message.trim();
  }
}

export default GameEngine;
